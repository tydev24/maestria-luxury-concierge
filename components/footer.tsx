"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image src="/images/logo-m.jpg" alt="Maestria Logo" width={48} height={48} className="rounded-full" />
              <span className="ml-3 text-xl lg:text-2xl font-serif font-bold text-primary">
                <span className="hidden sm:inline">Maestria Luxury Concierge</span>
                <span className="sm:hidden">Maestria</span>
              </span>
            </div>
            <p className="text-card-foreground/80 mb-6 max-w-md leading-relaxed text-sm lg:text-base">
              {language === "fr" &&
                "Votre conciergerie de luxe dédiée aux expériences d'exception. Nous transformons vos désirs en réalité avec discrétion et excellence."}
              {language === "en" &&
                "Your luxury concierge dedicated to exceptional experiences. We transform your desires into reality with discretion and excellence."}
              {language === "es" &&
                "Su conserje de lujo dedicado a experiencias excepcionales. Transformamos sus deseos en realidad con discreción y excelencia."}
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => window.open("https://www.instagram.com/maestria_luxury_concierge/", "_blank")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => window.open("https://facebook.com/MaestriaLuxuryConcierge", "_blank")}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => window.open("https://wa.me/33658535378", "_blank")}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base lg:text-lg font-serif font-bold text-card-foreground mb-4">
              {language === "fr" && "Navigation"}
              {language === "en" && "Quick Links"}
              {language === "es" && "Enlaces Rápidos"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm lg:text-base text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm lg:text-base text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm lg:text-base text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/villas-yachts"
                  className="text-sm lg:text-base text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.villas}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm lg:text-base text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base lg:text-lg font-serif font-bold text-card-foreground mb-4">
              {language === "fr" && "Contact"}
              {language === "en" && "Contact"}
              {language === "es" && "Contacto"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-card-foreground/70">
                <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                <a href="tel:+33658535378" className="text-sm lg:text-base hover:text-primary transition-colors">
                  +33 6 58 53 53 78
                </a>
              </li>
              <li className="flex items-center text-card-foreground/70">
                <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                <a
                  href="mailto:maestrialuxuryconcierge@gmail.com"
                  className="text-sm lg:text-base hover:text-primary transition-colors break-all"
                >
                  maestrialuxuryconcierge@gmail.com
                </a>
              </li>
              <li className="flex items-start text-card-foreground/70">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm lg:text-base">
                  <p>Paris • Côte d'Azur</p>
                  <p>Costa Blanca • Ibiza</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs lg:text-sm text-card-foreground/60 space-y-2 md:space-y-0">
            <p>
              © 2025 Maestria Luxury Concierge.{" "}
              {language === "fr"
                ? "Tous droits réservés."
                : language === "en"
                  ? "All rights reserved."
                  : "Todos los derechos reservados."}
            </p>
            <div className="flex space-x-4 lg:space-x-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {language === "fr" && "Confidentialité"}
                {language === "en" && "Privacy Policy"}
                {language === "es" && "Política de Privacidad"}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {language === "fr" && "Conditions"}
                {language === "en" && "Terms of Service"}
                {language === "es" && "Términos de Servicio"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
