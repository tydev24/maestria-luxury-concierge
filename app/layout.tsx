import type React from "react"
import type { Metadata } from "next"
// removed Google font imports to avoid network fetch during build
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

// use system fonts instead of fetching Google Fonts at build time

export const metadata: Metadata = {
  title: "Maestria Luxury Concierge - Your life. Our mastery.",
  description:
    "Exclusive luxury concierge services in Paris, French Riviera, Costa Blanca & Ibiza. Villas, yachts, private chefs, and bespoke events.",
  generator: "v0.app",
  keywords:
    "luxury concierge, private villas, yacht charter, private chef, exclusive events, French Riviera, Ibiza, Costa Blanca, Paris",
  icons: {
  icon: "/images/logo-m.jpg",
  apple: "/images/logo-m.jpg",
  shortcut: "/images/logo-m.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
