'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  // view state
  const [view, setView] = useState<'boot' | 'main'>('boot')
  const [i, setI] = useState(0) // typing index

  // boot text
  const LINES = [
    '$ trustcat.ai boot',
    '> Initializing Proof-of-Compute HQ …',
    '> Authenticating micro-hub network …',
    '> 60 RTX 5090s verified.',
    '> 10 Gb fiber online.',
    '> USDC escrow link active.',
    '> Chainlink oracles synced.',
    '> System integrity: 99.9%',
    '> All human operators doxxed.',
    '> Trust layer live.',
    '',
    '$ whoami',
    'TrustCat.ai — Proof-of-Compute HQ',
    'Compute. Adoption. Transact.',
    '',
    '$ mission',
    'Build the truth layer for AI compute.',
    'Verify the work. Verify the worker. Verify the watt.',
    '',
    '$ stack',
    'frontend    : Next.js + Supabase + Cloudflare Zero-Trust',
    'compute     : peer-to-peer mesh (60 × RTX 5090s)',
    'verification: Chainlink + Base L2 + USDC escrow',
    'storage     : Ceph / IPFS volumes + ENS routed',
    '',
    '$ ethos',
    'We deliver terminal-grade compute.',
    'Auditable. Peer-to-peer. Zero-trust. Verified.',
    '',
    'Press [ENTER] to initialize Ops Menu ▸',
    'Press [7] to enter Stealth Mode ▸'
  ]

  // typing animation
  useEffect(() => {
    if (view !== 'boot') return
    if (i < LINES.length) {
      const t = setTimeout(() => setI((v) => v + 1), 80)
      return () => clearTimeout(t)
    }
  }, [i, view])

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key

      // ignore when typing in inputs/textareas
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement)?.isContentEditable) return

      // BOOT — Enter fast-forwards or opens menu
      if (view === 'boot') {
        if (key === 'Enter') {
          if (i < LINES.length) {
            // fast-forward to end, then open
            setI(LINES.length)
            setTimeout(() => setView('main'), 10)
          } else {
            setView('main')
          }
        }
        // allow direct jump to stealth too
        if (key === '7') router.push('/stealth')
        return
      }

      // MAIN — Ops shortcuts
      if (view === 'main') {
        switch (key) {
          case '1': router.push('/request'); break
          case '2': router.push('/list'); break
          case '3': router.push('/brokers'); break
          case '4': router.push('/network'); break
          case '5': router.push('/client'); break
          case '6': router.push('/client'); break // alias to client list/intel
          case '7': router.push('/stealth'); break
          case 'b':
          case 'B':
            // go back to boot + replay typing
            setView('boot')
            setI(0)
            break
          default:
            break
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [view, i, router])

  return (
    <main className="min-h-screen bg-black text-white font-mono p-8">
      {view === 'boot' ? (
        <section>
          {LINES.slice(0, i).map((line, idx) => (
            <p key={idx} className="text-sm leading-6">{line}</p>
          ))}
        </section>
      ) : (
        <section className="text-sm leading-6">
          <p>$ ops --menu</p>
          <p>[1] Request Compute</p>
          <p>[2] List Rig / Jobs</p>
          <p>[3] Join Brokers</p>
          <p>[4] Enter Network</p>
          <p>[5] Open Client Portal</p>
          <p>[6] View Clients</p>
          <p>[7] Stealth Mode</p>
          <p className="mt-4 text-[#00FF00]">Press [B] to go back</p>
        </section>
      )}

      {/* footer */}
      <footer className="mt-10 text-center text-xs text-[#C6C6C6] opacity-80">
        <pre className="text-white text-[10px] leading-4">{String.raw`
 /\_/\
( o.o )   > meow ops ready
 > ^ <    > verify compute
`}</pre>
        <p className="text-[#FFD700] mt-2">
          TrustCat.ai — Proof of Compute • Chainlink Verified • Cloudflare Secured • Terminal-Grade
        </p>
      </footer>
    </main>
  )
}
