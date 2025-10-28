import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Static export mode for Cloudflare Pages
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
  typedRoutes: true,

  // ✅ Ignore TypeScript errors during export (optional)
  typescript: { ignoreBuildErrors: false },

  // ✅ Silence telemetry in modern Next 16
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["@cloudflare/workers-types"],
  },
};

export default nextConfig;
