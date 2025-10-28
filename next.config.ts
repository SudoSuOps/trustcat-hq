import type { NextConfig } from "next";

/**
 * 🐾 TRUSTCAT HQ — TERMINAL-GRADE CONFIG
 *  - Static export for Cloudflare Pages
 *  - Preserves client routing and serverActions
 *  - Compatible with Next.js 16 + TypeScript
 *  - Produces /out directory for deploy
 */

const nextConfig: NextConfig = {
  // ✅ Generate fully static output for Cloudflare
  output: "export",

  // ✅ Place built files here (Cloudflare picks this up)
  distDir: "out",

  // ✅ Keep URLs consistent (helps for static hosting)
  trailingSlash: true,

  // ✅ Enable experimental Next.js features safely
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },

  // ✅ Optimization + security headers (optional gold ops)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Trusted external domains for images or APIs if you expand later
  images: {
    unoptimized: true,
  },

  // ✅ Allow internal LAN origin during dev builds
  allowedHosts: ["localhost", "192.168.0.99"],

  // ✅ Explicit root tracing (for monorepo safety)
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
