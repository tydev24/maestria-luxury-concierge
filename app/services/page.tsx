"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { translations, type Language } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Anchor, ChefHat, Calendar, Car, Plane, Music, Gift } from "lucide-react"

export default function ServicesPage() {
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
          <Image src="/images/lifestyle.jpg" alt="Luxury Services" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-card-foreground mb-6">{t.services.title}</h1>
            <p className="text-xl text-card-foreground/80 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{t.services.villa.title}</h3>
                <p className="text-card-foreground/70 mb-4">{t.services.villa.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => (window.location.href = "/villas-yachts")}
                >
                  {language === "fr" && "Voir les villas"}
                  {language === "en" && "View Villas"}
                  {language === "es" && "Ver Villas"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Anchor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{t.services.yacht.title}</h3>
                <p className="text-card-foreground/70 mb-4">{t.services.yacht.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => (window.location.href = "/villas-yachts")}
                >
                  {language === "fr" && "Voir les yachts"}
                  {language === "en" && "View Yachts"}
                  {language === "es" && "Ver Yates"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <ChefHat className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{t.services.chef.title}</h3>
                <p className="text-card-foreground/70 mb-4">{t.services.chef.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => (window.location.href = "/contact")}
                >
                  {language === "fr" && "Réserver"}
                  {language === "en" && "Book Now"}
                  {language === "es" && "Reservar"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">{t.services.events.title}</h3>
                <p className="text-card-foreground/70 mb-4">{t.services.events.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => (window.location.href = "/contact")}
                >
                  {language === "fr" && "Organiser"}
                  {language === "en" && "Plan Event"}
                  {language === "es" && "Organizar"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              {language === "fr" && "Services Additionnels"}
              {language === "en" && "Additional Services"}
              {language === "es" && "Servicios Adicionales"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Transport VIP"}
                  {language === "en" && "VIP Transport"}
                  {language === "es" && "Transporte VIP"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Véhicules de luxe avec chauffeur privé pour tous vos déplacements."}
                  {language === "en" && "Luxury vehicles with private driver for all your travels."}
                  {language === "es" && "Vehículos de lujo con conductor privado para todos sus viajes."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Jets Privés"}
                  {language === "en" && "Private Jets"}
                  {language === "es" && "Jets Privados"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Location de jets privés pour vos voyages d'affaires ou de loisirs."}
                  {language === "en" && "Private jet rental for your business or leisure travels."}
                  {language === "es" && "Alquiler de jets privados para sus viajes de negocios o placer."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Divertissement"}
                  {language === "en" && "Entertainment"}
                  {language === "es" && "Entretenimiento"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Artistes, musiciens et spectacles privés pour vos événements."}
                  {language === "en" && "Artists, musicians and private shows for your events."}
                  {language === "es" && "Artistas, músicos y espectáculos privados para sus eventos."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Services Personnalisés"}
                  {language === "en" && "Bespoke Services"}
                  {language === "es" && "Servicios Personalizados"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Toute demande spéciale sera étudiée avec la plus grande attention."}
                  {language === "en" && "Any special request will be studied with the utmost attention."}
                  {language === "es" && "Cualquier solicitud especial será estudiada con la máxima atención."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  )
}
