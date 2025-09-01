"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { translations, type Language } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Clock } from "lucide-react"

export default function ContactPage() {
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
          <Image src="/images/background.jpg" alt="Contact Us" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-card-foreground mb-6">{t.contact.title}</h1>
            <p className="text-xl text-card-foreground/80 max-w-3xl mx-auto">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-card-foreground mb-6">
                  {language === "fr" && "Envoyez-nous un message"}
                  {language === "en" && "Send us a message"}
                  {language === "es" && "Envíanos un mensaje"}
                </h2>
                <form className="space-y-6">
                  <div>
                    <Input placeholder={t.contact.form.name} className="bg-input border-border text-card-foreground" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.form.email}
                      className="bg-input border-border text-card-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder={t.contact.form.phone}
                      className="bg-input border-border text-card-foreground"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.contact.form.message}
                      rows={4}
                      className="bg-input border-border text-card-foreground"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {t.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {language === "fr" && "Contact Direct"}
                  {language === "en" && "Direct Contact"}
                  {language === "es" && "Contacto Directo"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">+33 6 58 53 53 78</p>
                      <p className="text-sm text-foreground/70">
                        {language === "fr" && "Disponible 24h/24, 7j/7"}
                        {language === "en" && "Available 24/7"}
                        {language === "es" && "Disponible 24/7"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">maestrialuxuryconcierge@gmail.com</p>
                      <p className="text-sm text-foreground/70">
                        {language === "fr" && "Réponse sous 2h"}
                        {language === "en" && "Response within 2h"}
                        {language === "es" && "Respuesta en 2h"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "fr" && "Nos Destinations"}
                        {language === "en" && "Our Destinations"}
                        {language === "es" && "Nuestros Destinos"}
                      </p>
                      <p className="text-sm text-foreground/70">Paris • Côte d'Azur</p>
                      <p className="text-sm text-foreground/70">Costa Blanca • Ibiza</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {language === "fr" && "Contact Rapide"}
                  {language === "en" && "Quick Contact"}
                  {language === "es" && "Contacto Rápido"}
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                    onClick={() => window.open("https://wa.me/33658535378", "_blank")}
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    {t.contact.whatsapp}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open("mailto:maestrialuxuryconcierge@gmail.com", "_blank")}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    {t.contact.email}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open("tel:+33658535378", "_blank")}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    {language === "fr" && "Appeler maintenant"}
                    {language === "en" && "Call now"}
                    {language === "es" && "Llamar ahora"}
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {language === "fr" && "Suivez-nous"}
                  {language === "en" && "Follow us"}
                  {language === "es" && "Síguenos"}
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open("https://www.instagram.com/maestria_luxury_concierge/", "_blank")}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open("https://facebook.com/MaestriaLuxuryConcierge", "_blank")}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {language === "fr" && "Horaires"}
                  {language === "en" && "Hours"}
                  {language === "es" && "Horarios"}
                </h3>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-foreground/80">
                    {language === "fr" && "Disponible 24h/24, 7j/7 pour vos demandes urgentes"}
                    {language === "en" && "Available 24/7 for your urgent requests"}
                    {language === "es" && "Disponible 24/7 para sus solicitudes urgentes"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  )
}
