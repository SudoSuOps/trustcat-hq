'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useBackToHQ(path: string = '/') {
  const router = useRouter()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'b' || e.key === 'B') router.push(path as unknown as Route)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [router, path])
}
