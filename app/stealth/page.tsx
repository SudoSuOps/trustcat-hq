"use client";
import { useEffect, useState } from "react";

export default function StealthOpsPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    fetch("https://stealth.trustcat.ai/api/stealth/init")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(() => setError(true));

    const interval = setInterval(() => setUptime((u) => u + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#16f2a5] font-mono p-8 terminal-scanlines relative">
      <section className="text-center">
        <h1 className="text-2xl text-[#16f2a5] mb-2">🐾 TrustCat Stealth Ops</h1>
        <p className="text-sm text-[#FFD700] mb-6">
          Proof of Compute • Chainlink Verified • Cloudflare Secured
        </p>

        {!error ? (
          <>
            {data ? (
              <>
                <p className="text-[#00ff88] mb-3">
                  🟢 {data.message} ({data.node})
                </p>
                <p className="text-xs text-gray-400">
                  uptime: {uptime}s | zone: {data.cloudflare_zone}
                </p>
              </>
            ) : (
              <p className="text-[#FFD700]">⏳ Initializing TrustCat AI Ops …</p>
            )}
          </>
        ) : (
          <p className="text-red-400">🔴 Connection Error — Stealth Edge Unreachable</p>
        )}

        <div className="mt-6 text-xs text-gray-400">
          <p>Worker → stealth.trustcat.ai/api/stealth/init</p>
          <p>ENS Mirror → stealth.trustcat.eth.limo</p>
          <p>Gateway → eth.limo</p>
        </div>

        <footer className="mt-10 text-[#FFD700]">
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
