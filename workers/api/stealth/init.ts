// workers/api/stealth/init.ts
export interface Env {}

export const onRequest: PagesFunction<Env> = async (_ctx) => {
  const payload = {
    status: "ok",
    node: "TrustCat HQ Edge",
    ai_ops: true,
    ping: new Date().toISOString(),
    message: "🐾 TrustCat Stealth Ops online — terminal-grade verified"
  }

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}
