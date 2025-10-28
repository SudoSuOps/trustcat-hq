'use client'
import { useEffect, useState } from 'react'
import Footer from '../_components/Footer'

type Init = {
  status: string
  message?: string
}

export default function Page() {
  const [init, setInit] = useState<Init | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/stealth/init')
      .then(r => r.json() as Promise<Init>) // 🟩 Explicitly type the response
      .then((data) => setInit(data))        // ✅ Type-safe
      .catch((e) => setErr(String(e)))
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center text-green-400 bg-black">
      <h1 className="text-4xl font-bold mb-6">🕶️ Stealth Ops</h1>
      {err ? (
        <p className="text-red-400">Error: {err}</p>
      ) : init ? (
        <pre className="text-left text-gray-300 p-4 bg-[#111] rounded-xl">
          {JSON.stringify(init, null, 2)}
        </pre>
      ) : (
        <p className="text-gray-500">Initializing stealth mode...</p>
      )}
      <Footer />
    </main>
  )
}
