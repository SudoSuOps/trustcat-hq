/// <reference types="@cloudflare/workers-types" />

declare global {
  type CFEnv = Record<string, unknown>;

  // ✅ Universal PagesFunction helper type
  type CFPagesFunction = PagesFunction<unknown, any, CFEnv>;
}

export {};
