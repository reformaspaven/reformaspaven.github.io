export type Language = 'es' | 'en' | 'sv';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      contact: 'Contacto',
      quote: 'Pedir Presupuesto',
    },
    hero: {
      title: 'Transformamos tu espacio',
      subtitle: 'con calidad y profesionalidad',
      description: 'Más de 15 años de experiencia en reformas integrales, impermeabilizaciones y pintura profesional.',
      cta: 'Pide tu presupuesto sin compromiso',
      ctaSecondary: 'Ver nuestros servicios',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales para tu hogar o negocio',
      reformas: {
        title: 'Reformas',
        description: 'Reformas integrales de viviendas, baños, cocinas y locales comerciales. Transformamos tu espacio con los mejores acabados.',
      },
      impermeabilizacion: {
        title: 'Impermeabilizaciones',
        description: 'Protegemos tu edificio contra filtraciones y humedades. Tratamientos profesionales para terrazas, cubiertas y fachadas.',
      },
      pintura: {
        title: 'Pintura',
        description: 'Servicios de pintura interior y exterior. Acabados perfectos con materiales de primera calidad para todo tipo de superficies.',
      },
      learnMore: 'Saber más',
    },
    contact: {
      title: 'Contacta con nosotros',
      subtitle: 'Cuéntanos tu proyecto y te daremos un presupuesto sin compromiso',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      service: 'Servicio de interés',
      selectService: 'Selecciona un servicio',
      message: 'Describe tu proyecto',
      submit: 'Enviar solicitud',
      success: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
      error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      address: 'España',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      quote: 'Get a Quote',
    },
    hero: {
      title: 'We transform your space',
      subtitle: 'with quality and professionalism',
      description: 'Over 15 years of experience in comprehensive renovations, waterproofing and professional painting.',
      cta: 'Get your free quote',
      ctaSecondary: 'See our services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for your home or business',
      reformas: {
        title: 'Renovations',
        description: 'Complete home renovations, bathrooms, kitchens and commercial spaces. We transform your space with the best finishes.',
      },
      impermeabilizacion: {
        title: 'Waterproofing',
        description: 'We protect your building against leaks and moisture. Professional treatments for terraces, roofs and facades.',
      },
      pintura: {
        title: 'Painting',
        description: 'Interior and exterior painting services. Perfect finishes with premium materials for all types of surfaces.',
      },
      learnMore: 'Learn more',
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Tell us about your project and we will give you a free quote',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      service: 'Service of interest',
      selectService: 'Select a service',
      message: 'Describe your project',
      submit: 'Send request',
      success: 'Message sent successfully! We will contact you soon.',
      error: 'There was an error sending the message. Please try again.',
    },
    footer: {
      rights: 'All rights reserved',
      address: 'Spain',
    },
  },
  sv: {
    nav: {
      home: 'Hem',
      services: 'Tjänster',
      contact: 'Kontakt',
      quote: 'Begär offert',
    },
    hero: {
      title: 'Vi förvandlar ditt utrymme',
      subtitle: 'med kvalitet och professionalism',
      description: 'Över 15 års erfarenhet av omfattande renoveringar, vattentätning och professionell målning.',
      cta: 'Få din kostnadsfria offert',
      ctaSecondary: 'Se våra tjänster',
    },
    services: {
      title: 'Våra tjänster',
      subtitle: 'Omfattande lösningar för ditt hem eller företag',
      reformas: {
        title: 'Renoveringar',
        description: 'Kompletta hemrenoveringar, badrum, kök och kommersiella lokaler. Vi förvandlar ditt utrymme med de bästa ytbehandlingarna.',
      },
      impermeabilizacion: {
        title: 'Vattentätning',
        description: 'Vi skyddar din byggnad mot läckor och fukt. Professionella behandlingar för terrasser, tak och fasader.',
      },
      pintura: {
        title: 'Målning',
        description: 'Inomhus- och utomhusmålningstjänster. Perfekta ytbehandlingar med premiummaterial för alla typer av ytor.',
      },
      learnMore: 'Läs mer',
    },
    contact: {
      title: 'Kontakta oss',
      subtitle: 'Berätta om ditt projekt så ger vi dig en kostnadsfri offert',
      name: 'Fullständigt namn',
      email: 'E-postadress',
      phone: 'Telefonnummer',
      service: 'Tjänst av intresse',
      selectService: 'Välj en tjänst',
      message: 'Beskriv ditt projekt',
      submit: 'Skicka förfrågan',
      success: 'Meddelandet skickades! Vi kontaktar dig snart.',
      error: 'Ett fel uppstod vid skickande av meddelandet. Försök igen.',
    },
    footer: {
      rights: 'Alla rättigheter förbehållna',
      address: 'Spanien',
    },
  },
};

export const useTranslation = (lang: Language) => {
  return translations[lang];
};
