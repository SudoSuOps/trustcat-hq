import type { NextConfig } from 'next'

/**
 * TrustCat.ai — Gold Standard Next.js Config
 * Terminal-grade, Supabase-ready, Cloudflare-deployed
 * Compatible with Next.js 16+
 */

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🧱 Fixes "workspace root" warnings
  outputFileTracingRoot: __dirname,

  // ✅ replaces old experimental.typedRoutes (Next 16 syntax)
  typedRoutes: true,

  // ✅ optional: allow small server actions (for form submissions)
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // 🖤 unoptimized for terminal-grade static build (Cloudflare-friendly)
  images: {
    unoptimized: true,
  },

  // 🧩 trailing slashes for clean sub-pages (/client/, /provider/)
  trailingSlash: true,
}

export default nextConfig
