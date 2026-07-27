/**
 * Creator handle → Insert Affiliate deep link.
 *
 * Handles are the public-facing slug used in creator bio links. Two routes
 * consume this map:
 *
 *   - /[handle]              — canonical, short URL for bios (e.g.
 *                              sageacademy.app/isabella_grae). Unknown handles
 *                              return 404 so typos don't hijack real routes.
 *                              A RESERVED_HANDLES guard in that route also
 *                              prevents accidental shadowing of real pages.
 *   - /c/[handle]            — legacy alias, kept working so any bio links
 *                              already posted with the /c/ prefix continue to
 *                              resolve. Unknown handles fall back to /creators.
 *
 * Keep handle keys lowercase; both routes lowercase inbound requests before
 * lookup, so /BELLAGRAE, /Bellagrae, and /bellagrae all resolve to the same
 * target if `bellagrae` is the key.
 *
 * The destination URL is the full Insert Affiliate proceed-link, including
 * companyId, userCode, and any embedded utm_* parameters. Attribution is
 * handled entirely by Insert Affiliate on the destination — do not add any
 * tracking on our redirect side.
 */
export const CREATOR_LINKS: Record<string, string> = {
  isabella_grae:
    "https://insertaffiliate.link/proceed-to-link.html?companyId=p56z0jG9quWqk5PSANaz960rR3p1&userCode=BELLAGRAE&originalUrl=/p56z0jG9quWqk5PSANaz960rR3p1/BELLAGRAE?utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  vitoria_machado:
    "https://insertaffiliate.link/p56z0jG9quWqk5PSANaz960rR3p1/VITORIAMACHADO",
};
