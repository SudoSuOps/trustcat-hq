import type { NextConfig } from "next";

/**
 * 🐾 TRUSTCAT HQ — GOLD OPS v4
 * ✅ Next.js 16 compliant (Cloudflare Pages)
 * ✅ Fully static export
 * ✅ Clean schema, zero type warnings
 */

const nextConfig: NextConfig = {
  // Generate static HTML for Cloudflare Pages
  output: "export",
  distDir: "out",
  trailingSlash: true,

  // Experimental features (Next 16 schema)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["*"],
    },
    typedRoutes: true,
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Disable image optimization (Cloudflare handles static assets)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
