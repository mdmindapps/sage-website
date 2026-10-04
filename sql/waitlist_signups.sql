-- Audience test: one row per person who left their email on /waitlist/<handle>.
--
-- Nothing here links to profiles, auth.users or creators: these people have no Sage account and the
-- creator may not be on Sage at all. That is the point — a test can run for someone who has never
-- heard of us, and nothing in the product has to be prepared first.
--
-- No policies at all, so anon and authenticated can do nothing. The only door is /api/waitlist,
-- which runs with the service role: that way the validation (typo check, MX, disposable domains,
-- rate limit) cannot be skipped by posting straight at the table.
--
-- Run on DEV first, then PROD with the same file. Needs Liviu's OK: this is a write.

-- One row per creator we run a test for. Three ways to identify her, in one place, instead of
-- repeating them on every signup row.
create table if not exists public.waitlist_creators (
  slug          text primary key check (slug ~ '^[a-z0-9-]{1,40}$'),
  instagram     text,
  email         text,
  display_name  text,
  -- the secret in the creator's private link to /waitlist/<slug>/live
  view_key      text,
  created_at    timestamptz not null default now()
);

create table if not exists public.waitlist_signups (
  id              uuid primary key default gen_random_uuid(),
  creator_slug    text        not null references public.waitlist_creators(slug) on delete cascade,
  position        integer,
  email           text        not null,
  consent_at      timestamptz,
  source          text,
  created_at      timestamptz not null default now()
);

-- One person counts once per creator; the same person may join two different creators' lists.
create unique index if not exists waitlist_signups_slug_email
  on public.waitlist_signups (creator_slug, lower(email));

create index if not exists waitlist_signups_slug_created
  on public.waitlist_signups (creator_slug, created_at desc);

-- Their number on the list. Shown back to them on the thank-you screen ("you're #37"), which turns
-- an email address into a place they now hold. Numbering restarts per creator.
create or replace function public.waitlist_set_position()
returns trigger
language plpgsql
as $$
begin
  -- Two people submitting in the same instant would both read the same max and both be given the
  -- same number. The lock is per creator, so one creator's rush never waits on another's.
  perform pg_advisory_xact_lock(hashtext(new.creator_slug));
  select coalesce(max(position), 0) + 1 into new.position
    from public.waitlist_signups where creator_slug = new.creator_slug;
  return new;
end;
$$;

drop trigger if exists waitlist_position on public.waitlist_signups;
create trigger waitlist_position
  before insert on public.waitlist_signups
  for each row execute function public.waitlist_set_position();

alter table public.waitlist_creators enable row level security;
alter table public.waitlist_signups  enable row level security;
-- deliberately no policies and no grants: everything goes through the service role.

-- The view_key is the only thing protecting the creator's private page and her CSV, so it is
-- generated here rather than chosen: 32 hex characters from the server's own random source.
insert into public.waitlist_creators (slug, instagram, email, display_name, view_key)
values ('bella', 'isabella_grae', 'Isabellagraecpt@gmail.com', 'Bella', encode(gen_random_bytes(16), 'hex'))
on conflict (slug) do nothing;

-- Her private link, to hand over by hand. Nothing else ever prints this.
select 'https://sageacademy.app/waitlist/' || slug || '/live?k=' || view_key as private_link
  from public.waitlist_creators where slug = 'bella';
