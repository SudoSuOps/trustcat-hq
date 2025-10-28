'use client'
import Footer from '../_components/Footer'
import useBackToHQ from '../_hooks/useBackToHQ'
import { useEffect, useState } from 'react'

type Init = { status: string; mode: string; aesKey: string; timestamp: string }

export default function Page() {
  useBackToHQ('/')

  const [init, setInit] = useState<Init | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/stealth/init')
      .then(r => r.json())
      .then(setInit)
      .catch(e => setErr(String(e)))
  }, [])

  return (
    <main className="min-h-screen bg-black text-white font-mono p-8">
      <p className="text-[#00FF00]">$ stealth --init</p>
      {!init && !err && <p className="mt-2 opacity-80">initializing stealth session…</p>}
      {err && <p className="mt-2 text-red-400">error: {err}</p>}
      {init && (
        <pre className="mt-3 text-xs">
{JSON.stringify(init, null, 2)}
        </pre>
      )}
      <p className="mt-4 text-[#00FF00]">Press [B] to go back</p>
      <Footer />
    </main>
  )
}
