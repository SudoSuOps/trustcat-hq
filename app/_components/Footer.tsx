'use client'

export default function Footer() {
  return (
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
  )
}
