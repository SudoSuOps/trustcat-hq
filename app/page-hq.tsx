'use client'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { BrowserProvider, JsonRpcProvider } from 'ethers'

// ────────────────────────────────
// Terminal Output Lines
// ────────────────────────────────
const LINES = [
  '             /\\_/\\',
  '   Meow ~   ( o.o )  > trustcat.ai online',
  '             > ^ <',
  '',
  '$ trustcat.ai boot',
  '> Initializing Proof-of-Compute HQ...',
  '> Authenticating micro-hub network...',
  '> 60 RTX 5090s verified.',
  '> 10Gb fiber online.',
  '> USDC escrow link active.',
  '> Chainlink oracles synced.',
  '> System integrity: 99.9%',
  '> All human operators doxxed.',
  '> Trust layer live.',
  '',
  '$ whoami',
  '> TrustCat.ai — Proof-of-Compute HQ',
  '> Compute. Adoption. Transact.',
  '> R.A.V.E: Respect. Appreciate. Value. Everyone.',
  '',
  '$ mission',
  '> Build the truth layer for AI compute.',
  '> Verify the work. Verify the worker. Verify the watt.',
  '',
  '$ deals --pipeline',
  '> Request Compute → Proposal → Escrow → Proof → Close',
  '',
  '$ options',
  '[1] Request Compute',
  '[2] List Rig',
  '[3] Join Brokers',
  '[4] Enter Network',
]

// ────────────────────────────────
// React Component
// ────────────────────────────────
export default function Page(): React.JSX.Element {
  const [i, setI] = useState(0)

  // Boot animation
  useEffect(() => {
    if (i < LINES.length) {
      const t = setTimeout(() => setI(x => x + 1), 70)
      return () => clearTimeout(t)
    }
  }, [i])

  const shown = useMemo(() => LINES.slice(0, i), [i])

  return (
    <main className="min-h-screen bg-black text-white font-mono p-8 select-none">
      {shown.map((line, idx) => (
        <div key={idx} className="whitespace-pre-wrap">{line}</div>
      ))}
      {i >= LINES.length && (
        <span className="inline-block w-3 h-5 bg-white animate-pulse align-middle"></span>
      )}
    </main>
  )
}
