"use client";

import { useState } from "react";

/**
 * The only interactive part of a waitlist page: one email field.
 *
 * Posts to /api/waitlist, never to the database — the table has no policies, so the checks on the
 * server cannot be skipped. What happens here is the part that has to be instant: catching the
 * typed-wrong domain before they press the button, because gmial.com is a real person we would
 * otherwise lose silently on launch day.
 */

/** Domains people actually mistype, and the thing they meant. */
const COMMON = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "hotmail.com", "hotmail.co.uk",
  "outlook.com", "live.com", "icloud.com", "me.com", "aol.com", "protonmail.com", "proton.me",
  "msn.com", "comcast.net", "sky.com", "bt.com", "btinternet.com",
];

function distance(a: string, b: string) {
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return d[a.length][b.length];
}

/** "jess@gmial.com" -> "jess@gmail.com". Only suggests when it is one or two keystrokes away. */
function suggest(email: string): string | null {
  const at = email.lastIndexOf("@");
  if (at < 1) return null;
  const domain = email.slice(at + 1).toLowerCase();
  if (!domain || COMMON.includes(domain)) return null;
  let best: string | null = null;
  let bestD = 3;
  for (const c of COMMON) {
    const d = distance(domain, c);
    if (d < bestD) {
      bestD = d;
      best = c;
    }
  }
  return best ? email.slice(0, at + 1) + best : null;
}

const MESSAGES: Record<string, string> = {
  invalid_email: "That doesn't look like an email address — have another go.",
  no_such_domain: "We can't find that mail provider. Check the bit after the @.",
  disposable: "That's a throwaway address, and you'd miss the email. Use your real one.",
  too_many: "That's a few tries in a row. Give it a minute.",
};

/** Our fault has to read as our fault. Someone who thinks their own address was rejected tries
 *  once more, fails again and leaves, and we never know they were here. */
const OUR_FAULT = "Something broke on our side, not yours. Give it a minute and try again — or email contact@sageacademy.app and we'll add you by hand.";

export default function WaitlistForm({ handle, name }: { handle: string; name: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [already, setAlready] = useState(false);

  const tip = state === "idle" ? suggest(email.trim()) : null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ handle, email: email.trim().toLowerCase(), website }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(MESSAGES[json.error] ?? (res.status >= 500 ? OUR_FAULT : "That didn't go through. Try once more."));
        setState("error");
        return;
      }
      setPosition(typeof json.position === "number" ? json.position : null);
      setAlready(Boolean(json.already));
      setState("done");
    } catch {
      // Network failure is also not their problem.
      setError(OUR_FAULT);
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl bg-ink text-white p-7 text-center">
        {position ? (
          <>
            <p className="text-5xl font-bold" style={{ letterSpacing: "-0.02em" }}>
              #{position}
            </p>
            <p className="font-bold text-lg mt-2">
              {already ? "You were already on the list." : "That's your place on the list."}
            </p>
          </>
        ) : (
          <p className="font-bold text-lg">
            {already ? "You were already on the list." : "You're on the list."}
          </p>
        )}
        <p className="text-white/60 text-sm mt-3">
          {already
            ? `Nothing more to do — ${name} will email you first when the doors open.`
            : `${name} will email you first when the doors open. Nothing to pay until then.`}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="your@email.com"
          aria-label="Your email address"
          className="flex-1 h-14 px-5 rounded-full bg-white border border-border text-ink placeholder:text-subtle focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="h-14 px-8 rounded-full bg-primary text-white font-semibold shrink-0 transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {state === "sending" ? "One moment…" : "Save my spot"}
        </button>
      </div>

      {/* Nobody sees this. Bots fill everything in. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />

      {tip && (
        <button
          type="button"
          onClick={() => setEmail(tip)}
          className="mt-3 text-sm text-primary font-semibold hover:underline underline-offset-2"
        >
          Did you mean {tip}?
        </button>
      )}

      {state === "error" && error && <p className="mt-3 text-sm text-danger">{error}</p>}

      {/* Consent has to name every use, or the only one it covers is the launch email. The second
          purpose is stated here because it is stated in the privacy policy, and the two have to match. */}
      <p className="mt-4 text-xs text-subtle leading-relaxed">
        No payment now — this is a list, not a purchase. Your email goes to {name} and to Sage
        (Friday Technologies SRL), who run the app, so we can tell you when the doors open and send
        you the occasional email about Sage and other creators. Unsubscribe any time — see our{" "}
        <a href="/privacy" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-ink">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
