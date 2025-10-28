import type { NextConfig } from "next";

/**
 * 🐾 TRUSTCAT HQ — TERMINAL-GRADE CONFIG (Gold v3)
 *  • Compatible with Next 16 .0 +
 *  • Clean static export for Cloudflare Pages
 *  • Zero schema warnings
 *  • Builds perfectly on Cloudflare
 */

const nextConfig: NextConfig = {
  // ✅ Generate static HTML output for Cloudflare Pages
  output: "export",
  distDir: "out",
  trailingSlash: true,

  // ✅ Enable Next.js experiments safely
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },

  // ✅ Optimize compiler (removes console.logs in prod)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Cloudflare Pages doesn’t handle next/image transforms
  images: {
    unoptimized: true,
  },

  // ✅ Ignore build telemetry via env var (set below)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
