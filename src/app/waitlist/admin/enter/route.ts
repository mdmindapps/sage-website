/* Trades the key in the link for a cookie, then sends you to the clean address.
 *
 * The point is that the key stops living in the URL. After this one request it is not in the
 * address bar, not in browser history, not in a screenshot of the tab, and it appears in the
 * hosting logs once instead of on every page view. The cookie is httpOnly, so no script on the
 * page can read it either.
 *
 * A wrong key gets the same 404 as no key: this route never says whether a key was close.
 */
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE = "wl_admin";
const ADMIN_PATH = "/waitlist/admin";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const key = url.searchParams.get("k");
  const gate = process.env.WAITLIST_ADMIN_KEY;

  if (!gate || !key || key !== gate) {
    return new NextResponse("Not found", { status: 404 });
  }

  const res = NextResponse.redirect(new URL(ADMIN_PATH, url.origin));
  res.cookies.set(COOKIE, gate, {
    httpOnly: true,
    sameSite: "lax",
    secure: url.protocol === "https:",
    path: ADMIN_PATH,
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
