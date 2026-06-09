#!/usr/bin/env node
// Generate the Sage favicon set from the brand SVG.
//
// Usage:  node scripts/generate-favicons.mjs
//
// Reads:  public/images/brand/logo-mark.svg
// Writes:
//   src/app/icon.png                    (32x32)   -> auto-discovered favicon
//   src/app/apple-icon.png              (180x180) -> auto-discovered apple-touch-icon
//   public/android-chrome-192x192.png   (192x192)
//   public/android-chrome-512x512.png   (512x512)
//
// The teal disc background is preserved (no transparency) so the icon
// stays legible against any browser/device theme.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SOURCE_SVG = path.join(ROOT, "public/images/brand/logo-mark.svg");

const TARGETS = [
  { out: "src/app/icon.png", size: 32 },
  { out: "src/app/apple-icon.png", size: 180 },
  { out: "public/android-chrome-192x192.png", size: 192 },
  { out: "public/android-chrome-512x512.png", size: 512 },
];

async function main() {
  const svg = await fs.readFile(SOURCE_SVG);

  const results = [];
  for (const { out, size } of TARGETS) {
    const outPath = path.join(ROOT, out);
    await fs.mkdir(path.dirname(outPath), { recursive: true });

    const buffer = await sharp(svg, { density: 384 })
      .resize(size, size, { fit: "contain", background: { r: 14, g: 154, b: 174, alpha: 1 } })
      .png({ compressionLevel: 9, quality: 100 })
      .toBuffer();

    await fs.writeFile(outPath, buffer);
    const stat = await fs.stat(outPath);
    results.push({ file: out, size: `${size}x${size}`, bytes: stat.size });
  }

  console.log("Generated favicons:");
  for (const r of results) {
    console.log(`  ${r.file.padEnd(42)} ${r.size.padStart(9)}  ${r.bytes} bytes`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
