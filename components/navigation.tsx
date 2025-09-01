"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo-m.jpg" alt="Maestria Logo" width={40} height={40} className="rounded-full" />
            <span className="ml-3 text-lg sm:text-xl font-serif font-bold text-primary">
              <span className="hidden sm:inline">Maestria Luxury Concierge</span>
              <span className="sm:hidden">Maestria</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              {t.nav.services}
            </Link>
            <Link href="/villas-yachts" className="text-foreground hover:text-primary transition-colors">
              {t.nav.villas}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary p-2">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/villas-yachts"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.villas}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-card-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
