import { redirect } from "next/navigation";
import { CREATOR_LINKS } from "@/lib/creator-links";

export default async function CreatorRedirect({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const target = CREATOR_LINKS[handle.toLowerCase()];
  redirect(target ?? "/creators");
}
