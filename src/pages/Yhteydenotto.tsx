import React from 'react';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCommonTranslation, useSEOTranslation } from "../hooks/useTranslation";

const Yhteydenotto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t: tCommon } = useCommonTranslation();
  const { t: tSEO } = useSEOTranslation();
  
  const pageUrl = window.location.href;
  const heroImageUrl = `${import.meta.env.BASE_URL}lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png`;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

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
    "@type": "ContactPage",
    "name": tSEO('contact.title'),
    "description": tSEO('contact.description'),
    "url": pageUrl,
    "mainEntity": {
      "@type": "Person",
      "name": "Aino Pekkarinen",
      "jobTitle": tSEO('schema.jobTitle'),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Helsinki",
        "addressRegion": "Uusimaa",
        "addressCountry": "FI"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{tSEO('contact.title')}</title>
        <meta 
          name="description" 
          content={tSEO('contact.description')}
        />
        <meta name="keywords" content={tSEO('contact.keywords')} />
        <meta name="author" content="Aino Pekkarinen" />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:title" content={tSEO('contact.ogTitle')} />
        <meta property="og:description" content={tSEO('contact.ogDescription')} />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fi_FI" />
        <meta property="og:site_name" content="Aino Pekkarinen" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tSEO('contact.twitterTitle')} />
        <meta name="twitter:description" content={tSEO('contact.twitterDescription')} />
        <meta name="twitter:image" content={heroImageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#131313] flex flex-col justify-center text-white pt-32 md:pt-40 lg:pt-48 px-4 py-16 md:py-24">
        <div className="max-w-lg w-full mx-auto px-4 sm:px-8 py-8 md:py-12">  
          <form onSubmit={onSubmit} className="space-y-6 md:space-y-8">
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
    </>
  );
};

export default Yhteydenotto;
