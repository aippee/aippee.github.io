import React from 'react';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Palvelut = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Adjusted height and font size */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img
          src={`${import.meta.env.BASE_URL}lovable-uploads/IMG_5104.JPG`}
          alt="Aino Pekkarinen speaking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">PALVELUT</h1>
        </div>
      </div>

      {/* Pariterapia Section - Adjusted padding, gap, font sizes, and button layout/size */}
      <div className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Added order-last on mobile for image */}
            <div className="prose max-w-none order-last md:order-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">PARITERAPIA</h2>
              {/* Adjusted prose text size for mobile */}
              <p className="mb-4 text-base md:text-lg">
                Pariterapiaprosessit toteutetaan LAV-coaching yrityksen kautta. Liikkeelle voit lähteä LAV-coaching ajanvarauksen kautta. Käyntipaketit ovat jotakin 2-10 tapaamisen välillä, mutta käyntejä voi sopia tarpeen mukaan myös enemmän. Voit myös aloittaa 30min tutustumiskäynnillä kanssani, jos haluatte ensin kokeilla sitä miltä parisuhteen asioista tuntuu jutella.
              </p>
              <p className="mb-6 text-base md:text-lg">
                Pariterapiaan voitte tulla työstämään esimerkiksi etäisyyden tunteita, toistuvia konflikteja, arvoihin tai näkemyseroihin liittyviä erimielisyyksiä, luottamukseen liittyviä haasteita tai seksuaalisuuden ja läheisyyden teemoja. Pariterapiatyössä hyödynnän tunnekeskeisen pariterapian viitekehystä, joka on maailman tutkituin ja tehokkain pariterapian viitekehys. Lue lisää tunnekeskeisestä pariterapiasta täältä.
              </p>
              {/* Made buttons stack on mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <a
                  href="https://vello.fi/lav-coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base text-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
                >
                  VARAA AIKA PARITERAPIAAN
                </a>
                <a
                  href="https://lavcoaching.com/hinnasto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base text-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
                >
                  PARITERAPIAN HINNASTO
                </a>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/0597ecf4-aacd-42b6-bfa6-1a6f1cc6c649.png`}
                alt="Pariterapia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lyhytterapia Section - Adjusted padding, gap, font sizes, and button size */}
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg order-first md:order-1">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/81e208dd-6290-4eac-b9a1-a40894223f43.png`}
                alt="Lyhytterapia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Adjusted prose text size for mobile */}
            <div className="prose max-w-none order-last md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">LYHYTTERAPIA</h2>
              <p className="mb-4 text-base md:text-lg">
                Lyhytterapia tarkoittaa yksilöterapiaa, joka on kestoltaan tyypillisesti lyhyempää kuin psykoterapia. Lyhytterapiakäynnit ovat yleensä jotakin muutamasta käynnistä puolen vuoden tai vuodenkin mittaiseen prosessiin. Voit tehdä tarkempaa suunnitelmaa kanssani kun pääsemme käyntien kanssa alkuun.
              </p>
              <p className="mb-4 text-base md:text-lg">
                Lyhytterapiassa voit käsitellä kanssani mieltä painavia asioitasi. Käynneiltä voit saada tukea esimerkiksi kuormittavaan elämäntilanteeseen, haasteisiin ihmissuhteissa tai parisuhteessa, tai vaikkapa elämääsi haittaaviin ahdistus- tai masennusoireisiin. Käynneille voit tulla myös jos haluat ymmärtää itseäsi tai jotakin toimintataapasi paremmin, tai tehdä muutoksia elämässäsi toivomaasi suuntaan.
              </p>
              <p className="font-semibold mb-6 text-base md:text-lg">
                45min lyhytterapiakäynnin hinta: 120€
              </p>
              <div>
                <a
                  href="https://pro.vello.fi/aino-pekkarinen/service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base text-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
                >
                  VARAA AIKA LYHYTTERAPIAAN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Puheenvuorot Section - Adjusted padding, gap, font sizes, order */}
      <div className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Added order-last on mobile for image */}
            <div className="prose max-w-none order-last md:order-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">PUHEENVUOROT</h2>
              {/* Adjusted prose text size for mobile */}
              <p className="mb-4 text-base md:text-lg">
                Haluatko tapahtumaasi puheenvuoron ihmissuhteista, rakkauden merkityksestä kokonaisvaltaiselle hyvinvoinnille, tai vuorovaikutus- ja tunnetaidoista ja niiden merkityksestä? Vuorovaikutussuhteiden ja ihmissuhteiden merkitys koskettaa meitä kaikkialla, ja voin soveltaa näitä teemoja monenlaisiin ympäristöihin.
              </p>
              <p className="font-semibold mb-2 text-base md:text-lg">Esimerkkejä puheenvuoroista:</p>
              <ul className="mb-6 list-disc pl-5 text-base md:text-lg">
                <li>Rakkauden psykologia - miten voimme luoda kestävää rakkautta?</li>
                <li>Tunne- ja vuorovaikutustaidot</li>
                <li>Kestävä rakkaussuhde kokonaisvaltaisen hyvinvoinnin perustana</li>
                <li>Kiintymyssuhteet läpi elämänkaaren</li>
              </ul>
              <p className="font-semibold mb-4 text-base md:text-lg">
                Ota yhteyttä niin räätälöidään tarpeisiisi sopiva kokonaisuus!
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/e826cca7-a3ac-482e-860e-4cc69502db6a.png`}
                alt="Puheenvuorot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Copied from Index, adjusted padding and font size */}
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

      {/* Footer */}
      <div className="w-full bg-black py-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© Aino Pekkarinen 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Palvelut;
