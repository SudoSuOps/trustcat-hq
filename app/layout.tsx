import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustCat.ai — HQ",
  description: "Terminal-grade compute brokerage • Stealth Ops Edge",
  icons: [{ url: "/favicon-32.png", type: "image/png" }],
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
