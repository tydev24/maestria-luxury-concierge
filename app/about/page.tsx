"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { translations, type Language } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Shield } from "lucide-react"

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>("fr")
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-card overflow-hidden min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/lifestyle.jpg" alt="Luxury Lifestyle" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-card-foreground mb-4 md:mb-6 lg:mb-8 leading-tight">
              {t.about.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-card-foreground/80 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                {language === "fr" && "Notre Histoire"}
                {language === "en" && "Our Story"}
                {language === "es" && "Nuestra Historia"}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                {t.about.description}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                {language === "fr" &&
                  "Fondée sur les valeurs d'excellence et de discrétion, Maestria Luxury Concierge s'est imposée comme la référence en matière de services de conciergerie de luxe dans les destinations les plus prisées d'Europe."}
                {language === "en" &&
                  "Founded on the values of excellence and discretion, Maestria Luxury Concierge has established itself as the reference in luxury concierge services in Europe's most sought-after destinations."}
                {language === "es" &&
                  "Fundada en los valores de excelencia y discreción, Maestria Luxury Concierge se ha establecido como la referencia en servicios de conserjería de lujo en los destinos más codiciados de Europa."}
              </p>
              <p className="text-primary font-medium text-sm sm:text-base md:text-lg lg:text-xl">{t.about.locations}</p>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/lifestyle.jpg"
                alt="Luxury Lifestyle"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-card-foreground mb-2 md:mb-3 lg:mb-4">
                  {language === "fr" && "Service Personnalisé"}
                  {language === "en" && "Personalized Service"}
                  {language === "es" && "Servicio Personalizado"}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-card-foreground/70 leading-relaxed">
                  {language === "fr" &&
                    "Chaque demande est unique et mérite une attention particulière adaptée à vos besoins."}
                  {language === "en" &&
                    "Every request is unique and deserves special attention tailored to your needs."}
                  {language === "es" &&
                    "Cada solicitud es única y merece atención especial adaptada a sus necesidades."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-card-foreground mb-2 md:mb-3 lg:mb-4">
                  {language === "fr" && "Excellence"}
                  {language === "en" && "Excellence"}
                  {language === "es" && "Excelencia"}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-card-foreground/70 leading-relaxed">
                  {language === "fr" &&
                    "Nous ne nous contentons que du meilleur pour offrir des expériences d'exception."}
                  {language === "en" && "We settle for nothing but the best to offer exceptional experiences."}
                  {language === "es" &&
                    "No nos conformamos con nada menos que lo mejor para ofrecer experiencias excepcionales."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-card-foreground mb-2 md:mb-3 lg:mb-4">
                  {language === "fr" && "Réseau International"}
                  {language === "en" && "International Network"}
                  {language === "es" && "Red Internacional"}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-card-foreground/70 leading-relaxed">
                  {language === "fr" &&
                    "Un réseau de partenaires privilégiés dans les plus belles destinations européennes."}
                  {language === "en" && "A network of privileged partners in Europe's most beautiful destinations."}
                  {language === "es" && "Una red de socios privilegiados en los destinos más hermosos de Europa."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 lg:mb-6">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-card-foreground mb-2 md:mb-3 lg:mb-4">
                  {language === "fr" && "Discrétion"}
                  {language === "en" && "Discretion"}
                  {language === "es" && "Discreción"}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-card-foreground/70 leading-relaxed">
                  {language === "fr" && "Votre vie privée et votre tranquillité sont nos priorités absolues."}
                  {language === "en" && "Your privacy and peace of mind are our absolute priorities."}
                  {language === "es" && "Su privacidad y tranquilidad son nuestras prioridades absolutas."}
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
