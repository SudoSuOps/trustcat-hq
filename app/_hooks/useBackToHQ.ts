"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useBackToHQ(path: string = "/") {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // terminal-grade back nav
      if (e.key === "b" || e.key === "B") {
        router.push(path as any); // ✅ suppress typed-route mismatch
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [path, router]);
}
