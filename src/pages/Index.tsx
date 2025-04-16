import React from 'react';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pageUrl = window.location.href;
  const heroImageUrl = `${import.meta.env.BASE_URL}lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png`;
  
  const testimonials = [
    "Olit hyvä luomaan meidän välille parempaa ymmärrystä. Teet todella hyvää psykologin työtä ja olimme molemmat tosi tyytyväisiä. Olit hyvä pitämään keskustelussa punaista lankaa ja nostamaan esiin tunnepuolta ja ymmärrystä toisiamme kohtaan.",
    "Olit todella helposti lähestyttävä ja sait vaivattomasti luotua ilmapiirin, missä oli helppo keskustella mistä tahansa.",
    "Lähtökohtaisesti kaikki: meillä oli vain 3 kerran paketti, mutta pääsimme hyvin kiinni parisuhteen tärkeisiin teemoihin ja oppimaan uutta itsestä sekä kumppanista. Tämä siitäkin huolimatta, että keskustelemme paljon parisuhteessamme jo entuudestaan.",
    "Terapeutti sopi hyvin meille molemmille ja loi turvallisen ja rauhallisen ilmapiirin tapaamisiin. Meidän välille rakennettiin entistä parempaa yhteyttä ja se tuntui tärkeältä."
  ];

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
        toast.success("Viesti lähetetty onnistuneesti!");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error("Virhe viestin lähetyksessä. Yritä uudelleen.");
        console.log("Error", data);
      }
    } catch (error) {
      toast.error("Virhe viestin lähetyksessä. Yritä uudelleen.");
      console.log("Error", error);
    }

    setIsSubmitting(false);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Aino Pekkarinen",
    "image": `${import.meta.env.BASE_URL}lovable-uploads/Kuva1.jpg`,
    "description": "Tarjoan pariterapiaa ja lyhytterapiaa mielen hyvinvoinnin tukemiseksi.",
    "url": pageUrl,
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pariterapia ja Lyhytterapia | Aino Pekkarinen</title>
        <meta name="description" content="Aino Pekkarinen tarjoaa ammattitaitoista pariterapiaa ja lyhytterapiaa tukemaan parisuhdetta ja mielen hyvinvointia. Varaa aikasi helposti." />
        
        <meta property="og:title" content="Pariterapia ja Lyhytterapia | Aino Pekkarinen" />
        <meta property="og:description" content="Ammattitaitoista pariterapiaa ja lyhytterapiaa Helsingissä. Tukea parisuhteeseen ja mielen hyvinvointiin." />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section - Adjusted height and button layout/size */}
      <div className="relative h-[75vh] md:h-screen">
        <img
          src={heroImageUrl}
          alt="Rauhallinen maisemakuva meren rannalta auringonlaskun aikaan - Aino Pekkarinen Terapia"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-16 md:bottom-32 w-full flex flex-col items-center gap-4 md:gap-8 px-4">
          <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 w-full max-w-xs md:max-w-none">
            <a
              href="https://vello.fi/lav-coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-center border-2 border-white text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              Varaa aika pariterapiaan
            </a>
            <a
              href="https://vello.fi/aino-pekkarinen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-center border-2 border-white text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              Varaa aika lyhytterapiaan
            </a>
          </div>
        </div>
      </div>

      {/* Quote Section - Adjusted padding and font size */}
      <div className="w-full bg-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Tukenasi rakentamassa läheisiä ja kestäviä rakkaussuhteita sekä mielen hyvinvointia.
          </h1>
        </div>
      </div>

      {/* Services Section - Adjusted padding and gap */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <Link 
            to="/palvelut"
            className="relative group overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/0597ecf4-aacd-42b6-bfa6-1a6f1cc6c649.png`}
              alt="Pariskunta kävelee käsi kädessä metsäpolulla - Pariterapia Aino Pekkarinen"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <span className="text-white text-xl md:text-2xl font-semibold text-center">Pariterapia</span>
            </div>
          </Link>

          <Link 
            to="/palvelut"
            className="relative group overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/81e208dd-6290-4eac-b9a1-a40894223f43.png`}
              alt="Henkilö istuu rauhassa katsoen ikkunasta ulos - Lyhytterapia Aino Pekkarinen"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <span className="text-white text-xl md:text-2xl font-semibold text-center">Lyhytterapia</span>
            </div>
          </Link>

          <Link 
            to="/palvelut"
            className="relative group overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/e826cca7-a3ac-482e-860e-4cc69502db6a.png`}
              alt="Nainen puhuu mikrofoniin yleisölle - Puheenvuorot Aino Pekkarinen"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <span className="text-white text-xl md:text-2xl font-semibold text-center">Puheenvuorot</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Testimonials Carousel - Adjusted padding and font size */}
      <div className="w-full bg-gray-100/70 py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">Asiakaspalautteita</h2>
          
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
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                    <p className="text-base md:text-lg text-gray-800 italic">"{testimonial}"</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Contact Form Section - Adjusted padding and font size */}
      <div className="w-full bg-black py-8 md:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">YHTEYDENOTTO</h2>
            <div className="flex justify-center mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/Kuva1.jpg`}
                alt="Aino Pekkarinen" 
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-1">
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nimi:"
                className="bg-transparent border-none border-b border-white text-white focus:ring-0 px-0 py-1"
                style={{ borderBottom: "1px solid white" }}
              />
            </div>

            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Sähköposti:"
                className="bg-transparent border-none border-b border-white text-white focus:ring-0 px-0 py-1"
                style={{ borderBottom: "1px solid white" }}
              />
            </div>

            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Puhelin"
                className="bg-transparent border-none border-b border-white text-white focus:ring-0 px-0 py-1"
                style={{ borderBottom: "1px solid white" }}
              />
            </div>

            <div className="space-y-1">
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Viesti"
                className="bg-transparent border-none border-b border-white text-white focus:ring-0 px-0 py-1 min-h-[120px] resize-none"
                style={{ borderBottom: "1px solid white" }}
              />
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="rounded-full px-8 py-2 md:px-12 text-sm md:text-base bg-transparent border border-white text-white hover:bg-white/10"
                disabled={isSubmitting}
              >
                LÄHETÄ
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer - Adjusted padding */}
      <div className="w-full bg-black py-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© Aino Pekkarinen 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
