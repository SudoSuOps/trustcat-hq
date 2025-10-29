"use client";

import { useEffect, useState } from "react";

export default function StealthPage() {
  const [status, setStatus] = useState("⏳ Initializing TrustCat AI Ops …");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://stealth.trustcat.ai/api/stealth/init");
        const json = await res.json();
        setData(json);
        setStatus("🟢 Stealth Ops Active — All Systems Nominal");
      } catch (err) {
        console.error(err);
        setStatus("🔴 Connection Error — Stealth Edge Unreachable");
      }
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#16f2a5] font-mono p-8 terminal-scanlines relative">
      <section className="text-center">
        <h1 className="text-2xl mb-2">🐾 TrustCat Stealth Ops</h1>
        <p className="text-sm text-[#FFD700] mb-6">
          Proof of Compute • Chainlink Verified • Cloudflare Secured
        </p>
        <pre className="text-md mb-4">{status}</pre>

        {data && (
          <div className="text-left inline-block bg-[#0c0c0c] p-4 rounded-lg border border-[#222] shadow-lg">
            <p>node: {data.node}</p>
            <p>zone: {data.cloudflare_zone}</p>
            <p>timestamp: {data.timestamp}</p>
            <p>message: {data.message}</p>
          </div>
        )}

        <div className="mt-8 text-xs text-gray-400">
          <p>Worker Endpoint → stealth.trustcat.ai/api/stealth/init</p>
          <p>ENS Mirror → stealth.trustcat.eth.limo</p>
          <p>Gateway → eth.limo</p>
        </div>

        <footer className="mt-12 text-center text-[#FFD700]">
          <pre>
{String.raw`
   ( o_o )  trench online
  > ^   <  verify compute
   /   \   ops: gold standard
`}
          </pre>
        </footer>
      </section>
    </main>
  );
}
