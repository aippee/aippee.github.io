import React from 'react';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Palvelut = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pageUrl = window.location.href;
  const heroImageUrl = `${import.meta.env.BASE_URL}lovable-uploads/IMG_5104.JPG`;

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
    "description": "Tarjoan pariterapiaa, lyhytterapiaa ja puheenvuoroja tukemaan ihmissuhteita ja mielen hyvinvointia.",
    "url": pageUrl,
    "image": heroImageUrl,
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pariterapia",
          "description": "Pariterapiaa tunnekeskeisen pariterapian viitekehyksessä etäisyyden, konfliktien, luottamushaasteiden ja läheisyyden teemojen työstämiseen.",
          "url": "https://vello.fi/lav-coaching"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lyhytterapia",
          "description": "Yksilöllistä lyhytterapiaa kuormittaviin elämäntilanteisiin, ihmissuhdehaasteisiin, ahdistus- tai masennusoireisiin tai itsetuntemuksen lisäämiseen.",
          "url": "https://pro.vello.fi/aino-pekkarinen/service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Puheenvuorot",
          "description": "Räätälöityjä puheenvuoroja ihmissuhteista, rakkauden psykologiasta, vuorovaikutus- ja tunnetaidoista tapahtumiin."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Palvelut: Pariterapia, Lyhytterapia, Puheenvuorot | Aino Pekkarinen</title>
        <meta name="description" content="Tutustu Aino Pekkarisen palveluihin: ammattitaitoinen pariterapia, tukea antava lyhytterapia ja oivaltavat puheenvuorot ihmissuhteista ja hyvinvoinnista." />
        
        <meta property="og:title" content="Palvelut: Pariterapia, Lyhytterapia, Puheenvuorot | Aino Pekkarinen" />
        <meta property="og:description" content="Tarjoan pariterapiaa, lyhytterapiaa ja asiantuntevia puheenvuoroja. Varaa aika tai kysy lisää!" />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

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
          <h1 className="hero-header text-white text-4xl md:text-7xl lg:text-8xl font-light tracking-wider px-4 text-center">PALVELUT</h1>
        </div>
      </div>

      {/* Pariterapia Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="prose max-w-none order-last md:order-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">PARITERAPIA</h2>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                Pariterapiaprosessit toteutetaan LAV-coaching yrityksen kautta. Liikkeelle voit lähteä LAV-coaching ajanvarauksen kautta. Käyntipaketit ovat jotakin 2-10 tapaamisen välillä, mutta käyntejä voi sopia tarpeen mukaan myös enemmän. Voit myös aloittaa 30min tutustumiskäynnillä kanssani, jos haluatte ensin kokeilla sitä miltä parisuhteen asioista tuntuu jutella.
              </p>
              <p className="mb-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
                Pariterapiaan voitte tulla työstämään esimerkiksi etäisyyden tunteita, toistuvia konflikteja, arvoihin tai näkemyseroihin liittyviä erimielisyyksiä, luottamukseen liittyviä haasteita tai seksuaalisuuden ja läheisyyden teemoja. Pariterapiatyössä hyödynnän tunnekeskeisen pariterapian viitekehystä, joka on maailman tutkituin ja tehokkain pariterapian viitekehys. Lue lisää tunnekeskeisestä pariterapiasta täältä.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-0">
                <a
                  href="https://vello.fi/lav-coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  VARAA AIKA PARITERAPIAAN
                </a>
                <a
                  href="https://lavcoaching.com/hinnasto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  PARITERAPIAN HINNASTO
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">LYHYTTERAPIA</h2>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                Lyhytterapia tarkoittaa yksilöterapiaa, joka on kestoltaan tyypillisesti lyhyempää kuin psykoterapia. Lyhytterapiakäynnit ovat yleensä jotakin muutamasta käynnistä puolen vuoden tai vuodenkin mittaiseen prosessiin. Voit tehdä tarkempaa suunnitelmaa kanssani kun pääsemme käyntien kanssa alkuun.
              </p>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                Lyhytterapiassa voit käsitellä kanssani mieltä painavia asioitasi. Käynneiltä voit saada tukea esimerkiksi kuormittavaan elämäntilanteeseen, haasteisiin ihmissuhteissa tai parisuhteessa, tai vaikkapa elämääsi haittaaviin ahdistus- tai masennusoireisiin. Käynneille voit tulla myös jos haluat ymmärtää itseäsi tai jotakin toimintataapasi paremmin, tai tehdä muutoksia elämässäsi toivomaasi suuntaan.
              </p>
              <p className="font-semibold mb-6 text-base md:text-lg">
                45min lyhytterapiakäynnin hinta: 120€
              </p>
              <div className="mb-6 md:mb-0">
                <a
                  href="https://pro.vello.fi/aino-pekkarinen/service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-elegant inline-block text-center"
                >
                  VARAA AIKA LYHYTTERAPIAAN
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">PUHEENVUOROT</h2>
              <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700">
                Haluatko tapahtumaasi puheenvuoron ihmissuhteista, rakkauden merkityksestä kokonaisvaltaiselle hyvinvoinnille, tai vuorovaikutus- ja tunnetaidoista ja niiden merkityksestä? Vuorovaikutussuhteiden ja ihmissuhteiden merkitys koskettaa meitä kaikkialla, ja voin soveltaa näitä teemoja monenlaisiin ympäristöihin.
              </p>
              <p className="font-semibold mb-2 text-base md:text-lg">Esimerkkejä puheenvuoroista:</p>
              <ul className="mb-6 list-disc pl-5 text-base md:text-lg font-light">
                <li className="mb-1">Rakkauden psykologia - miten voimme luoda kestävää rakkautta?</li>
                <li className="mb-1">Tunne- ja vuorovaikutustaidot</li>
                <li className="mb-1">Kestävä rakkaussuhde kokonaisvaltaisen hyvinvoinnin perustana</li>
                <li className="mb-1">Kiintymyssuhteet läpi elämänkaaren</li>
              </ul>
              <p className="font-semibold mb-4 text-base md:text-lg">
                Ota yhteyttä niin räätälöidään tarpeisiisi sopiva kokonaisuus!
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
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wider">YHTEYDENOTTO</h2>
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
                placeholder="Nimi"
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Sähköposti"
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Puhelin"
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Viesti"
                className="elegant-input text-white placeholder:text-gray-400 min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-center pt-8">
              <Button 
                type="submit" 
                className="btn-elegant-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? "LÄHETETÄÄN..." : "LÄHETÄ"}
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
