'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// ✅ Explicit DOM event typing for hybrid (SSR + client) build
type BrowserKeyboardEvent = globalThis.KeyboardEvent

export default function useBackToHQ(path: string) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const onKey = (e: BrowserKeyboardEvent) => {
      const key = (e as BrowserKeyboardEvent).key?.toLowerCase?.()
      if (key === 'b') router.push(path as any)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [path, router])
}
