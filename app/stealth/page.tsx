// app/stealth/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stealth Ops — TrustCat.ai",
  description: "Cloudflare Edge API • ENS Mirror • Terminal-grade ops console",
};

type EdgeStatus = {
  status: string;
  node: string;
  ai_ops: boolean;
  cloudflare_zone: string;
  timestamp: string;
  message: string;
};

async function getEdgeStatus(): Promise<{ data?: EdgeStatus; error?: string }> {
  try {
    const res = await fetch("https://stealth.trustcat.ai/api/stealth/init", {
      cache: "no-store",
      next: { revalidate: 0 },
      headers: { accept: "application/json" },
    });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    return { data: await res.json() };
  } catch (err: any) {
    return { error: err.message };
  }
}

export default async function StealthPage() {
  const { data, error } = await getEdgeStatus();

  return (
    <main className="min-h-screen bg-black text-gray-200 font-mono flex items-center justify-center p-6">
      <div className="w-full max-w-3xl border border-[#1b1b1b] rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-[0_0_0_1px_#111,0_0_80px_rgba(0,255,200,0.1)]">
        <header className="flex justify-between px-4 py-3 border-b border-[#151515] bg-[#0e0e0e]">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-[#16f2a5]">Stealth Ops / 0xhashcat</span>
        </header>

        <section className="p-8 terminal-scanlines">
          <h1 className="text-2xl font-bold text-[#16f2a5]">🐾 Stealth Ops Active</h1>
          <p className="text-xs text-[#9ca3af] mt-2">
            Proof of Compute • Chainlink Verified • Cloudflare Secured
          </p>

          <pre className="mt-6 text-sm text-[#22d3ee] whitespace-pre-wrap leading-6">
{error
  ? `Error: ${error}\n⏳ Initializing TrustCat AI Ops …`
  : `TrustCat Edge online and verified at ${data?.timestamp}\n\nAPI Endpoint → /api/stealth/init`}
          </pre>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="card">
              <div className="cardTitle">Worker Endpoint</div>
              <a href="https://stealth.trustcat.ai/api/stealth/init" className="cardLink" target="_blank">
                stealth.trustcat.ai/api/stealth/init
              </a>
              <div className="cardFoot">Cloudflare Worker JSON</div>
            </div>

            <div className="card">
              <div className="cardTitle">ENS Mirror</div>
              <a href="https://stealth.trustcat.eth.limo" className="cardLink" target="_blank">
                stealth.trustcat.eth.limo
              </a>
              <div className="cardFoot">eth.limo Gateway</div>
            </div>
          </div>

          <div className="mt-10 text-xs text-[#ffd166] text-center">
            0xhashcat — Jobs & Control-Plane • Terminal-grade compute brokerage
          </div>

          <pre className="mt-6 text-[#16f2a5] text-sm leading-5">{String.raw`
   ( o_o )  trench online
  > ^   <  verify compute
   /   \   ops: gold standard
`}</pre>

          <div className="mt-4">
            <span className="inline-block h-4 w-2 bg-[#16f2a5] animate-caret" />
          </div>
        </section>
      </div>
    </main>
  );
}

