export interface CommonTranslations {
  navigation: {
    home: string;
    services: string;
    about: string;
    contact: string;
    bookAppointment: string;
  };
  buttons: {
    send: string;
    sending: string;
    bookCouplesTherapy: string;
    bookShortTherapy: string;
    services: string;
    couplesTherapyPricing: string;
  };
  forms: {
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    messages: {
      success: string;
      error: string;
    };
  };
  sections: {
    testimonials: string;
    contact: string;
    services: string;
  };
}

export interface PagesTranslations {
  homepage: {
    hero: {
      tagline: string;
    };
    services: {
      couples: {
        title: string;
        description: string;
      };
      shortTerm: {
        title: string;
        description: string;
      };
      speaking: {
        title: string;
        description: string;
      };
    };
    about: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    bio: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
    quote: string;
  };
  services: {
    title: string;
    couples: {
      title: string;
      description1: string;
      description2: string;
    };
    shortTerm: {
      title: string;
      description1: string;
      description2: string;
      price: string;
    };
    speaking: {
      title: string;
      description1: string;
      description2: string;
      contactText: string;
    };
  };
}

export interface SEOTranslations {
  homepage: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  contact: {
    title: string;
    description: string;
  };
  schema: {
    name: string;
    description: string;
    servicePariterapia: {
      name: string;
      description: string;
    };
    serviceLyhytterapia: {
      name: string;
      description: string;
    };
  };
}

export interface TestimonialsTranslations {
  quotes: string[];
}

export interface TranslationResources {
  common: CommonTranslations;
  pages: PagesTranslations;
  seo: SEOTranslations;
  testimonials: TestimonialsTranslations;
}

export type SupportedLanguages = 'fi' | 'en';
export type TranslationNamespaces = keyof TranslationResources; 