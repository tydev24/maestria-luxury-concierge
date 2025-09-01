export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      villas: "Villas & Yachts",
      contact: "Contact",
    },
    hero: {
      title: "Votre vie. Notre maîtrise.",
      subtitle: "Services de conciergerie de luxe exclusifs à Paris, Côte d'Azur, Costa Blanca et Ibiza",
      cta1: "Découvrir nos services",
      cta2: "Contact WhatsApp",
    },
    about: {
      title: "L'art de l'orchestration",
      subtitle: "Chez Maestria Luxury Concierge, nous nous considérons comme des chefs d'orchestre.",
      description:
        "Chaque service, chaque détail, chaque partenaire est comme une note de musique — et ensemble, nous composons des expériences uniques. Notre philosophie repose sur trois piliers : l'orchestration parfaite, l'élégance intemporelle et la discrétion absolue.",
      locations: "Nos destinations : Paris, Côte d'Azur, Costa Blanca, Ibiza",
    },
    services: {
      title: "Nos Services",
      subtitle: "Excellence et discrétion dans chaque détail",
      villa: {
        title: "Villas de Luxe",
        description: "Locations exclusives à Paris, Côte d'Azur, Costa Blanca et Ibiza",
      },
      yacht: {
        title: "Yachts Privés",
        description: "Croisières sur mesure avec équipage, chef et champagne",
      },
      chef: {
        title: "Chefs Privés",
        description: "Gastronomie raffinée et gestion de style de vie",
      },
      events: {
        title: "Événements",
        description: "Événements privés exclusifs avec discrétion et élégance",
      },
    },
    gallery: {
      title: "Villas & Yachts",
      subtitle: "Découvrez nos propriétés et expériences exclusives",
      cta: "Demander plus de détails via WhatsApp",
    },
    contact: {
      title: "Contact",
      subtitle: "Créons ensemble votre expérience sur mesure",
      form: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        message: "Message",
        submit: "Envoyer",
      },
      whatsapp: "Contacter sur WhatsApp",
      email: "maestrialuxuryconcierge@gmail.com",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      villas: "Villas & Yachts",
      contact: "Contact",
    },
    hero: {
      title: "Your life. Our mastery.",
      subtitle: "Exclusive luxury concierge services in Paris, French Riviera, Costa Blanca & Ibiza",
      cta1: "Discover Our Services",
      cta2: "Contact WhatsApp",
    },
    about: {
      title: "The art of orchestration",
      subtitle: "At Maestria Luxury Concierge, we see ourselves as conductors.",
      description:
        "Each service, each detail, each partner is like a note of music — and together, we compose unique experiences. Our philosophy rests on three pillars: perfect orchestration, timeless elegance, and absolute discretion.",
      locations: "Our destinations: Paris, French Riviera, Costa Blanca, Ibiza",
    },
    services: {
      title: "Our Services",
      subtitle: "Excellence and discretion in every detail",
      villa: {
        title: "Luxury Villas",
        description: "Exclusive rentals in Paris, Riviera, Costa Blanca & Ibiza",
      },
      yacht: {
        title: "Private Yachts",
        description: "Tailor-made cruises with crew, chef, champagne",
      },
      chef: {
        title: "Private Chefs",
        description: "Gourmet dining and lifestyle management",
      },
      events: {
        title: "Events",
        description: "Exclusive private events with discretion & elegance",
      },
    },
    gallery: {
      title: "Villas & Yachts",
      subtitle: "Discover our exclusive properties and experiences",
      cta: "Request more details via WhatsApp",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's create your bespoke experience together",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send",
      },
      whatsapp: "Contact on WhatsApp",
      email: "maestrialuxuryconcierge@gmail.com",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      villas: "Villas y Yates",
      contact: "Contacto",
    },
    hero: {
      title: "Tu vida. Nuestra maestría.",
      subtitle: "Servicios exclusivos de conserjería de lujo en París, Costa Azul, Costa Blanca e Ibiza",
      cta1: "Descubrir Nuestros Servicios",
      cta2: "Contacto WhatsApp",
    },
    about: {
      title: "El arte de la orquestación",
      subtitle: "En Maestria Luxury Concierge, nos vemos como directores de orquesta.",
      description:
        "Cada servicio, cada detalle, cada socio es como una nota musical — y juntos, componemos experiencias únicas. Nuestra filosofía se basa en tres pilares: orquestación perfecta, elegancia atemporal y discreción absoluta.",
      locations: "Nuestros destinos: París, Costa Azul, Costa Blanca, Ibiza",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Excelencia y discreción en cada detalle",
      villa: {
        title: "Villas de Lujo",
        description: "Alquileres exclusivos en París, Riviera, Costa Blanca e Ibiza",
      },
      yacht: {
        title: "Yates Privados",
        description: "Cruceros a medida con tripulación, chef y champán",
      },
      chef: {
        title: "Chefs Privados",
        description: "Gastronomía gourmet y gestión de estilo de vida",
      },
      events: {
        title: "Eventos",
        description: "Eventos privados exclusivos con discreción y elegancia",
      },
    },
    gallery: {
      title: "Villas y Yates",
      subtitle: "Descubre nuestras propiedades y experiencias exclusivas",
      cta: "Solicitar más detalles vía WhatsApp",
    },
    contact: {
      title: "Contacto",
      subtitle: "Creemos juntos tu experiencia personalizada",
      form: {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Enviar",
      },
      whatsapp: "Contactar por WhatsApp",
      email: "maestrialuxuryconcierge@gmail.com",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
