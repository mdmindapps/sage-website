import type { NextConfig } from "next";

// Self-identifying build stamp: every response carries the exact branch + commit that is
// deployed, so "which version is live?" is answerable with `curl -I https://sageacademy.app`
// (look for x-sage-build) — no Vercel dashboard, no guessing which branch is production.
// Values are injected by Vercel at build time; "local" when built outside Vercel.
const BUILD_REF = process.env.VERCEL_GIT_COMMIT_REF || "local";
const BUILD_SHA = (process.env.VERCEL_GIT_COMMIT_SHA || "local").slice(0, 7);
const BUILD_ENV = process.env.VERCEL_ENV || "local";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "x-sage-build", value: `${BUILD_REF}@${BUILD_SHA} (${BUILD_ENV})` },
        ],
      },
    ];
  },
};

export default nextConfig;
