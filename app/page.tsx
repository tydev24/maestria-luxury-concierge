"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { MessageCircle, Users, Award, Globe, Shield, Home, Utensils, Calendar, Anchor } from "lucide-react"

export default function HomePage() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  const t = translations[language]

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
  <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/residences.jpg" alt="Luxury Villa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              onClick={() => (window.location.href = "/services")}
            >
              {t.hero.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              onClick={() => window.open("https://wa.me/33658535378", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.hero.cta2}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mb-6">{t.about.title}</h2>
            <p className="text-xl text-primary mb-6 font-medium">{t.about.subtitle}</p>
            <p className="text-card-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">{t.about.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {language === "fr" && "Service Personnalisé"}
                  {language === "en" && "Personalized Service"}
                  {language === "es" && "Servicio Personalizado"}
                </h3>
                <p className="text-foreground/70">
                  {language === "fr" && "Chaque demande est unique et mérite une attention particulière."}
                  {language === "en" && "Every request is unique and deserves special attention."}
                  {language === "es" && "Cada solicitud es única y merece atención especial."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {language === "fr" && "Excellence"}
                  {language === "en" && "Excellence"}
                  {language === "es" && "Excelencia"}
                </h3>
                <p className="text-foreground/70">
                  {language === "fr" && "Nous ne nous contentons que du meilleur pour des expériences d'exception."}
                  {language === "en" && "We settle for nothing but the best for exceptional experiences."}
                  {language === "es" && "No nos conformamos con nada menos que lo mejor."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {language === "fr" && "Réseau International"}
                  {language === "en" && "International Network"}
                  {language === "es" && "Red Internacional"}
                </h3>
                <p className="text-foreground/70">
                  {language === "fr" && "Un réseau de partenaires privilégiés dans les plus belles destinations."}
                  {language === "en" && "A network of privileged partners in beautiful destinations."}
                  {language === "es" && "Una red de socios privilegiados en hermosos destinos."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {language === "fr" && "Discrétion"}
                  {language === "en" && "Discretion"}
                  {language === "es" && "Discreción"}
                </h3>
                <p className="text-foreground/70">
                  {language === "fr" && "Votre vie privée et votre tranquillité sont nos priorités absolues."}
                  {language === "en" && "Your privacy and peace of mind are our absolute priorities."}
                  {language === "es" && "Su privacidad y tranquilidad son nuestras prioridades absolutas."}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              onClick={() => (window.location.href = "/about")}
            >
              {language === "fr" && "En savoir plus"}
              {language === "en" && "Learn More"}
              {language === "es" && "Saber Más"}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">{t.services.title}</h2>
            <p className="text-xl text-primary font-medium max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Villas de Luxe"}
                  {language === "en" && "Luxury Villas"}
                  {language === "es" && "Villas de Lujo"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Sélection exclusive de villas d'exception avec services personnalisés."}
                  {language === "en" && "Exclusive selection of exceptional villas with personalized services."}
                  {language === "es" && "Selección exclusiva de villas excepcionales con servicios personalizados."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Anchor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Yachts Privés"}
                  {language === "en" && "Private Yachts"}
                  {language === "es" && "Yates Privados"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Location de yachts de prestige avec équipage professionnel."}
                  {language === "en" && "Prestigious yacht rentals with professional crew."}
                  {language === "es" && "Alquiler de yates de prestigio con tripulación profesional."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Chefs Privés"}
                  {language === "en" && "Private Chefs"}
                  {language === "es" && "Chefs Privados"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Chefs étoilés pour des expériences culinaires inoubliables."}
                  {language === "en" && "Starred chefs for unforgettable culinary experiences."}
                  {language === "es" && "Chefs estrella para experiencias culinarias inolvidables."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {language === "fr" && "Événements"}
                  {language === "en" && "Events"}
                  {language === "es" && "Eventos"}
                </h3>
                <p className="text-card-foreground/70">
                  {language === "fr" && "Organisation d'événements privés et célébrations sur mesure."}
                  {language === "en" && "Private event organization and bespoke celebrations."}
                  {language === "es" && "Organización de eventos privados y celebraciones a medida."}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
              onClick={() => (window.location.href = "/services")}
            >
              {language === "fr" && "Découvrir nos services"}
              {language === "en" && "Discover our services"}
              {language === "es" && "Descubrir nuestros servicios"}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mb-6">
              {language === "fr" && "Contactez-nous"}
              {language === "en" && "Contact Us"}
              {language === "es" && "Contáctanos"}
            </h2>
            <p className="text-xl text-primary font-medium max-w-3xl mx-auto mb-8">
              {language === "fr" && "Prêt à vivre une expérience d'exception ? Contactez notre équipe dès maintenant."}
              {language === "en" && "Ready to live an exceptional experience? Contact our team now."}
              {language === "es" && "¿Listo para vivir una experiencia excepcional? Contacta a nuestro equipo ahora."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">
                {language === "fr" && "Téléphone"}
                {language === "en" && "Phone"}
                {language === "es" && "Teléfono"}
              </h3>
              <p className="text-card-foreground/80">+33 6 58 53 53 78</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">Email</h3>
              <p className="text-card-foreground/80">contact@maestria-concierge.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">
                {language === "fr" && "Disponibilité"}
                {language === "en" && "Availability"}
                {language === "es" && "Disponibilidad"}
              </h3>
              <p className="text-card-foreground/80">24h/24 - 7j/7</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 mr-4"
              onClick={() => window.open("https://wa.me/33658535378", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              onClick={() => (window.location.href = "/contact")}
            >
              {language === "fr" && "Formulaire de contact"}
              {language === "en" && "Contact Form"}
              {language === "es" && "Formulario de contacto"}
            </Button>
          </div>
        </div>
      </section>

  <Footer />
      <WhatsAppButton />
    </div>
  )
}
