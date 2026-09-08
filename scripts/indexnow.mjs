// IndexNow: tell Bing (and Yandex/Seznam via the shared endpoint) which URLs are new or changed.
// Run after a production deploy:  npm run indexnow            (pings every URL in the live sitemap)
//                                 npm run indexnow -- /become-a-coach/monetize   (specific paths)
// Key file: public/<key>.txt (served at https://www.sageacademy.app/<key>.txt), key in .indexnow-key.
import { readFileSync } from "node:fs";

const HOST = "www.sageacademy.app";
const key = readFileSync(new URL("../.indexnow-key", import.meta.url), "utf8").trim();
const args = process.argv.slice(2);

async function sitemapUrls() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p}`))
  : await sitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
});
console.log(`IndexNow → HTTP ${res.status} (${res.status === 200 || res.status === 202 ? "accepted" : "check key/urls"}) for ${urlList.length} URL(s)`);
urlList.forEach((u) => console.log("  " + u));
