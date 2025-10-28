'use client'
import Footer from '../_components/Footer'
import useBackToHQ from '../_hooks/useBackToHQ'

export default function Page() {
  useBackToHQ('/')
  return (
    <main className="min-h-screen bg-black text-white font-mono p-8">
      <p className="text-[#00FF00]">$ request --compute</p>
      <p className="mt-2">Proposal intake coming soon — submit AI workload specs.</p>
      <p className="mt-4 text-[#00FF00]">Press [B] to go back</p>
      <Footer />
    </main>
  )
}
