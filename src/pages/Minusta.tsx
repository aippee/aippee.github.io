import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const Minusta = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Use the base useTranslation hook and check if i18next is ready
  const { t, i18n, ready } = useTranslation(['common', 'pages', 'seo', 'testimonials']);
  
  // If translations are still loading, show loading state
  if (!ready || !i18n.isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading translations...</div>
      </div>
    );
  }

  // Now we can safely get translations
  const aboutTitle = t('about.title', { ns: 'pages' }) || 'MINUSTA';
  const bio1 = t('about.bio.paragraph1', { ns: 'pages' }) || 'Loading bio...';
  
  const heroImageUrl = `/lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png`;
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Safely get testimonials - only when translations are ready
  let testimonials: string[] = [];
  try {
    const testimonialsData = t('quotes', { ns: 'testimonials', returnObjects: true });
    // Make sure it's an array and contains only strings
    if (Array.isArray(testimonialsData)) {
      testimonials = testimonialsData.filter((item): item is string => typeof item === 'string');
    } else {
      console.warn('Testimonials data is not an array:', testimonialsData);
      testimonials = [];
    }
  } catch (error) {
    console.error('Error loading testimonials:', error);
    testimonials = [];
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    // Use environment variable safely
    const accessKey = "ce2eb7c7-2bea-4f74-97b2-d60622f8ddd8";
    
    if (!accessKey) {
      toast.error('Configuration error: Missing access key');
      setIsSubmitting(false);
      return;
    }
    
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t('forms.messages.success', { ns: 'common' }) || 'Message sent successfully!');
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(t('forms.messages.error', { ns: 'common' }) || 'Error sending message');
        console.log("Error", data);
      }
    } catch (error) {
      toast.error(t('forms.messages.error', { ns: 'common' }) || 'Error sending message');
      console.log("Error", error);
    }

    setIsSubmitting(false);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aino Pekkarinen",
    "jobTitle": t('schema.jobTitle', { ns: 'seo' }) || "Psychologist",
    "image": `/lovable-uploads/Kuva1.jpg`,
    "description": bio1,
    "url": pageUrl,
    "knowsLanguage": ["fi", "en"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Helsinki",
      "addressRegion": "Uusimaa",
      "addressCountry": "FI"
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('about.title', { ns: 'seo' }) || 'About - Aino Pekkarinen'}</title>
        <meta 
          name="description" 
          content={t('about.description', { ns: 'seo' }) || 'About Aino Pekkarinen'}
        />
        <meta name="keywords" content={t('about.keywords', { ns: 'seo' }) || ''} />
        <meta name="author" content="Aino Pekkarinen" />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:title" content={t('about.ogTitle', { ns: 'seo' }) || aboutTitle} />
        <meta property="og:description" content={t('about.ogDescription', { ns: 'seo' }) || bio1} />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="fi_FI" />
        <meta property="og:site_name" content="Aino Pekkarinen" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('about.twitterTitle', { ns: 'seo' }) || aboutTitle} />
        <meta name="twitter:description" content={t('about.twitterDescription', { ns: 'seo' }) || bio1} />
        <meta name="twitter:image" content={heroImageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section with Header */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <img
          src={heroImageUrl}
          alt="Rauhallinen maisemakuva meren rannalta auringonlaskun aikaan - Aino Pekkarinen Terapia"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchPriority="high"
          onError={(e) => {
            console.error('Hero image failed to load:', heroImageUrl);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="hero-header text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-wider">{aboutTitle.toUpperCase()}</h1>
        </div>
      </div>

      {/* About Me Section with Text and Image */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image on the left for desktop, but will show below text on mobile */}
            <div className="relative overflow-hidden order-last md:order-first">
              <img
                src="/lovable-uploads/81e208dd-6290-4eac-b9a1-a40894223f43.png"
                alt="Henkilö katsoo ikkunasta ulos - Lyhytterapia palvelu"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error('About image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Text content on the right */}
            <div className="prose max-w-none">
              <p className="mb-8 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {bio1}
              </p>
              <p className="mb-8 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {t('about.bio.paragraph2', { ns: 'pages' }) || 'Loading...'}
              </p>
              <p className="mb-8 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {t('about.bio.paragraph3', { ns: 'pages' }) || 'Loading...'}
              </p>
              <p className="mb-8 text-base md:text-lg font-light leading-relaxed text-gray-700">
                {t('about.bio.paragraph4', { ns: 'pages' }) || 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full bg-[#f8f7f5] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-light text-2xl md:text-3xl text-[#131313] leading-relaxed">
            "{t('about.quote', { ns: 'pages' }) || 'Loading quote...'}"
          </h2>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title">{t('sections.testimonials', { ns: 'common' }) || 'Testimonials'}</h2>
          
          {testimonials.length > 0 && (
            <Carousel 
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-2/3 mx-auto">
                    <div className="bg-[#f8f7f5] p-8 md:p-12">
                      <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">"{testimonial}"</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static transform-none border border-gray-300 hover:bg-gray-50 rounded-none h-10 w-10" />
                <CarouselNext className="static transform-none border border-gray-300 hover:bg-gray-50 rounded-none h-10 w-10" />
              </div>
            </Carousel>
          )}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-[#131313] py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wider">{t('sections.contact', { ns: 'common' }) || 'Contact'}</h2>
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/Kuva1.jpg"
                alt="Aino Pekkarinen" 
                className="w-28 h-28 object-cover rounded-full"
                width="112"
                height="112"
                loading="lazy"
                onError={(e) => {
                  console.error('Profile image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
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
                placeholder={t('forms.placeholders.name', { ns: 'common' }) || 'Name'}
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('forms.placeholders.email', { ns: 'common' }) || 'Email'}
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t('forms.placeholders.phone', { ns: 'common' }) || 'Phone'}
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Textarea
                id="message"
                name="message"
                required
                placeholder={t('forms.placeholders.message', { ns: 'common' }) || 'Message'}
                className="elegant-input text-white placeholder:text-gray-400 min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-center pt-8">
              <Button 
                type="submit" 
                className="btn-elegant-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? (t('buttons.sending', { ns: 'common' }) || 'Sending...') : (t('buttons.send', { ns: 'common' }) || 'Send')}
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
    </>
  );
};

export default Minusta;
