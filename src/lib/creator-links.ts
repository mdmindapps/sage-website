/**
 * Creator handle → Insert Affiliate deep link.
 *
 * Handles are the public-facing slug used at /c/[handle] (e.g. TikTok/IG bio
 * links). Keep them lowercase; the redirect route lowercases inbound requests
 * before lookup so /c/BELLAGRAE, /c/Bellagrae, and /c/bellagrae all resolve
 * to the same target.
 *
 * The destination URL is the full Insert Affiliate proceed-link, including
 * companyId, userCode, and any embedded utm_* parameters. Attribution is
 * handled entirely by Insert Affiliate on the destination — do not add any
 * tracking on our redirect side.
 *
 * Unknown handles fall back to /creators (see src/app/c/[handle]/page.tsx).
 */
export const CREATOR_LINKS: Record<string, string> = {
  isabella_grae:
    "https://insertaffiliate.link/proceed-to-link.html?companyId=p56z0jG9quWqk5PSANaz960rR3p1&userCode=BELLAGRAE&originalUrl=/p56z0jG9quWqk5PSANaz960rR3p1/BELLAGRAE?utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
};
