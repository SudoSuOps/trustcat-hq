#!/bin/bash
# TrustCat Gold Ops Deploy 🐾
# Stealth + Main HQ Deployment
# v2.0 — 0xHashcat Verified

echo "🐾 TrustCat Gold Ops Deploy — $(date)"
echo "──────────────────────────────────────────────"

# 1️⃣ Build Static Export
echo "⚙️  Building optimized static export..."
npm run build || { echo "❌ Build failed"; exit 1; }

# 2️⃣ Push to GitHub
echo "📦 Committing and pushing latest build..."
git add .
git commit -m "🚀 Gold Ops Deploy $(date '+%Y-%m-%d %H:%M:%S')"
git push

# 3️⃣ Deploy HQ via Cloudflare Pages
echo "🌐 Deploying TrustCat HQ → https://trustcat.ai"
npx wrangler pages deploy ./out --project-name=trustcat-hq --branch=main || {
  echo "❌ Cloudflare deploy failed"
  exit 1
}

# 4️⃣ Verify Stealth Node API
echo "🛰  Verifying Stealth Edge API..."
curl -s https://stealth.trustcat.ai/api/stealth/init | jq

# 5️⃣ Wrap Up
echo "✅ Gold Ops Deploy complete."
