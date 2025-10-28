// types/browser-globals.d.ts
// 🧠 Browser + DOM globals patch for TrustCat HQ client hooks

export {}

declare global {
  const window: Window & typeof globalThis
  const document: Document
  const navigator: Navigator

  interface BrowserKeyboardEvent extends KeyboardEvent {
    key?: string
  }
}
