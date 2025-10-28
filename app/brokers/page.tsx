'use client'
import Footer from '../_components/Footer'
import { useBackToHQ } from '../_hooks/useBackToHQ'

export default function Page() {
  useBackToHQ('/')
  return (
    <main className="min-h-screen bg-black text-white font-mono p-8">
      <p className="text-[#00FF00]">$ brokers --join</p>
      <p className="mt-2">Rainmakers: 10% commissions, mentorship, AII grants.</p>
      <p className="mt-4 text-[#00FF00]">Press [B] to go back</p>
      <Footer />
    </main>
  )
}
