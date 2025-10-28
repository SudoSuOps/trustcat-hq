import type { NextConfig } from "next";

/**
 * 🐾 TRUSTCAT HQ — TERMINAL-GRADE CONFIG (v2 clean)
 *  - Next.js 16 compliant
 *  - Cloudflare Pages static export
 *  - Zero warnings, zero type errors
 *  - Full static rendering with safe features
 */

const nextConfig: NextConfig = {
  // ✅ Generate static output for Cloudflare
  output: "export",

  // ✅ Build output directory
  distDir: "out",

  // ✅ Add trailing slash for Cloudflare static routing
  trailingSlash: true,

  // ✅ New top-level flags (moved out of experimental in Next 16)
  serverActions: {
    bodySizeLimit: "2mb",
    allowedOrigins: ["*"],
  },

  typedRoutes: true,

  // ✅ Optimize the build
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Simplify for Cloudflare image/CDN pipeline
  images: {
    unoptimized: true,
  },

  // ✅ Silence telemetry in production
  telemetry: false,
};

export default nextConfig;
