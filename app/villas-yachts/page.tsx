"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { translations, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function VillasYachtsPage() {
  const [language, setLanguage] = useState<Language>("fr")
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/residences.jpg" alt="Luxury Villas and Yachts" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-card-foreground mb-6">{t.gallery.title}</h1>
            <p className="text-xl text-card-foreground/80 max-w-3xl mx-auto mb-8">{t.gallery.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/residences.jpg"
                alt="Exclusive villa in the French Riviera"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-foreground p-4">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {language === "fr" && "Villa Exclusive - Côte d'Azur"}
                    {language === "en" && "Exclusive Villa - French Riviera"}
                    {language === "es" && "Villa Exclusiva - Costa Azul"}
                  </h3>
                  <p className="text-sm">
                    {language === "fr" && "Vue mer panoramique, piscine privée, 8 chambres"}
                    {language === "en" && "Panoramic sea view, private pool, 8 bedrooms"}
                    {language === "es" && "Vista panorámica al mar, piscina privada, 8 habitaciones"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/travel.jpg"
                alt="Private yacht experience in Ibiza"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-foreground p-4">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {language === "fr" && "Yacht Privé - Ibiza"}
                    {language === "en" && "Private Yacht - Ibiza"}
                    {language === "es" && "Yate Privado - Ibiza"}
                  </h3>
                  <p className="text-sm">
                    {language === "fr" && "Yacht de luxe 30m, équipage professionnel"}
                    {language === "en" && "30m luxury yacht, professional crew"}
                    {language === "es" && "Yate de lujo de 30m, tripulación profesional"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/background.jpg"
                alt="Luxury resort experience"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-foreground p-4">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {language === "fr" && "Resort de Luxe"}
                    {language === "en" && "Luxury Resort"}
                    {language === "es" && "Resort de Lujo"}
                  </h3>
                  <p className="text-sm">
                    {language === "fr" && "Expérience resort exclusive avec services premium"}
                    {language === "en" && "Exclusive resort experience with premium services"}
                    {language === "es" && "Experiencia de resort exclusiva con servicios premium"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/lifestyle.jpg"
                alt="Private dining with city view"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-foreground p-4">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {language === "fr" && "Dîner Privé - Paris"}
                    {language === "en" && "Private Dining - Paris"}
                    {language === "es" && "Cena Privada - París"}
                  </h3>
                  <p className="text-sm">
                    {language === "fr" && "Terrasse privée avec vue sur la ville"}
                    {language === "en" && "Private terrace with city view"}
                    {language === "es" && "Terraza privada con vista a la ciudad"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/event.webp"
                alt="Exclusive private events"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-foreground p-4">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {language === "fr" && "Événements Privés"}
                    {language === "en" && "Private Events"}
                    {language === "es" && "Eventos Privados"}
                  </h3>
                  <p className="text-sm">
                    {language === "fr" && "DJ professionnel, éclairage sur mesure"}
                    {language === "en" && "Professional DJ, custom lighting"}
                    {language === "es" && "DJ profesional, iluminación personalizada"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/images/residences.jpg"
                alt="Mediterranean luxury lifestyle"
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-foreground p-4">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {language === "fr" && "Style de Vie Méditerranéen"}
                    {language === "en" && "Mediterranean Lifestyle"}
                    {language === "es" && "Estilo de Vida Mediterráneo"}
                  </h3>
                  <p className="text-sm">
                    {language === "fr" && "L'art de vivre à la méditerranéenne"}
                    {language === "en" && "The art of Mediterranean living"}
                    {language === "es" && "El arte de vivir mediterráneo"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open("https://wa.me/33658535378", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.gallery.cta}
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  )
}
