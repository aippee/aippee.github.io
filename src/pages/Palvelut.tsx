import React from 'react';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCommonTranslation, usePagesTranslation, useSEOTranslation } from "../hooks/useTranslation";

const Palvelut = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  const { t: tCommon } = useCommonTranslation();
  const { t: tPages } = usePagesTranslation();
  const { t: tSEO } = useSEOTranslation();
  
  const currentLang = lang || 'fi';
  
  const pageUrl = window.location.href;
  const heroImageUrl = `${import.meta.env.BASE_URL}lovable-uploads/IMG_5104.JPG`;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ce2eb7c7-2bea-4f74-97b2-d60622f8ddd8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success(tCommon('forms.messages.success'));
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(tCommon('forms.messages.error'));
        console.log("Error", data);
      }
    } catch (error) {
      toast.error(tCommon('forms.messages.error'));
      console.log("Error", error);
    }

    setIsSubmitting(false);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Aino Pekkarinen",
    "description": tSEO('schema.description'),
    "url": pageUrl,
    "image": heroImageUrl,
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tSEO('schema.servicePariterapia.name'),
          "description": tSEO('schema.servicePariterapia.description'),
          "url": "https://vello.fi/lav-coaching"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tSEO('schema.serviceLyhytterapia.name'),
          "description": tSEO('schema.serviceLyhytterapia.description'),
          "url": "https://pro.vello.fi/aino-pekkarinen/service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tPages('services.speaking.title'),
          "description": tPages('services.speaking.description')
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{tSEO('services.title')}</title>
        <meta name="description" content={tSEO('services.description')} />
        <meta name="keywords" content={tSEO('services.keywords')} />
        <meta name="author" content="Aino Pekkarinen" />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:title" content={tSEO('services.ogTitle')} />
        <meta property="og:description" content={tSEO('services.ogDescription')} />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fi_FI" />
        <meta property="og:site_name" content="Aino Pekkarinen" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tSEO('services.twitterTitle')} />
        <meta name="twitter:description" content={tSEO('services.twitterDescription')} />
        <meta name="twitter:image" content={heroImageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh]">
        <img
          src={`${import.meta.env.BASE_URL}lovable-uploads/IMG_5104.JPG`}
          alt="Aino Pekkarinen speaking"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="hero-header text-white text-4xl md:text-7xl lg:text-8xl font-light tracking-wider px-4 text-center">{tCommon('navigation.services').toUpperCase()}</h1>
        </div>
      </div>

      {/* Pariterapia Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="prose max-w-none order-last md:order-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{tPages('services.couples.title').toUpperCase()}</h2>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {tPages('services.couples.description1')}
              </p>
              <p className="mb-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {tPages('services.couples.description2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-0">
                <a
                  href="https://vello.fi/lav-coaching/v2-segment/eec4dab7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  {tCommon('buttons.bookCouplesTherapy')}
                </a>
                <a
                  href="https://lavcoaching.com/hinnasto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  {currentLang === 'fi' ? 'HINNASTO' : 'PRICE LIST'}
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/0597ecf4-aacd-42b6-bfa6-1a6f1cc6c649.png`}
                alt="Pariskunta kävelee metsässä - Pariterapia palvelu"
                className="w-full h-auto object-cover"
                loading="lazy"
                width="600" 
                height="600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lyhytterapia Section */}
      <div className="py-12 md:py-16 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative overflow-hidden md:order-1">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/81e208dd-6290-4eac-b9a1-a40894223f43.png`}
                alt="Henkilö katsoo ikkunasta ulos - Lyhytterapia palvelu"
                className="w-full h-auto object-cover"
                loading="lazy"
                width="600" 
                height="600"
              />
            </div>
            <div className="prose max-w-none md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{tPages('services.shortTerm.title').toUpperCase()}</h2>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {tPages('services.shortTerm.description1')}
              </p>
              <p className="mb-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {tPages('services.shortTerm.description2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-0">
                <a
                  href="https://vello.fi/lav-coaching/v2-segment/a23ba208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  {tCommon('buttons.bookShortTherapy')}
                </a>
                <a
                  href="https://lavcoaching.com/hinnasto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  {currentLang === 'fi' ? 'HINNASTO' : 'PRICE LIST'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Puheenvuorot Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="prose max-w-none order-last md:order-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{tPages('services.speaking.title').toUpperCase()}</h2>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {tPages('services.speaking.description1')}
              </p>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {tPages('services.speaking.description2')}
              </p>
              <p className="font-semibold mb-4 text-base md:text-lg">
                {tPages('services.speaking.contactText')}
              </p>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/e826cca7-a3ac-482e-860e-4cc69502db6a.png`}
                alt="Nainen puhuu mikrofoniin - Puheenvuorot palvelu"
                className="w-full h-auto object-cover"
                loading="lazy"
                width="600" 
                height="600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-[#131313] py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wider">{tCommon('sections.contact')}</h2>
            <div className="flex justify-center mb-8">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/Kuva1.jpg`}
                alt="Aino Pekkarinen" 
                className="w-28 h-28 object-cover rounded-full"
                loading="lazy"
                width="112"
                height="112"
              />
            </div>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="space-y-1">
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder={tCommon('forms.placeholders.name')}
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={tCommon('forms.placeholders.email')}
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={tCommon('forms.placeholders.phone')}
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Textarea
                id="message"
                name="message"
                required
                placeholder={tCommon('forms.placeholders.message')}
                className="elegant-input text-white placeholder:text-gray-400 min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-center pt-8">
              <Button 
                type="submit" 
                className="btn-elegant-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? tCommon('buttons.sending') : tCommon('buttons.send')}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#131313] py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© Aino Pekkarinen 2025</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palvelut;
