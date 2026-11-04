import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FORMAT_OPTIONS = ["Helsinki", "Etä", "Molemmat sopii"];

// Google Apps Script web app (see google-apps-script/dating-reset-waitlist.gs)
const WAITLIST_ENDPOINT = "https://script.google.com/macros/s/AKfycbzI_4NeeVXzXeA5l-MIv2NVqSDo9ovh4N19H6XaMuhZ4aCe7vPWGOHOrMj4aYSYibZ3/exec";

const DatingReset = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [format, setFormat] = useState("");
  const [consent, setConsent] = useState(false);

  const pageUrl = window.location.href;
  const heroImageUrl = `${import.meta.env.BASE_URL}lovable-uploads/IMG_5104.JPG`;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) return;
    if (!format) {
      toast.error("Valitse toteutustapa.");
      return;
    }
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("toteutustapa", format);
    formData.append("suostumus", "Kyllä");
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        body,
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Kiitos! Olet nyt odotuslistalla. 🤍");
        form.reset();
        setFormat("");
        setConsent(false);
      } else {
        toast.error("Jokin meni pieleen. Yritä uudelleen.");
        console.log("Error", data);
      }
    } catch (error) {
      toast.error("Jokin meni pieleen. Yritä uudelleen.");
      console.log("Error", error);
    }

    setIsSubmitting(false);
  };

  const textClass = "mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700";
  const linkClass = "underline underline-offset-2 hover:text-black transition-colors";

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dating Reset – ryhmävalmennus sinkkunaisille | Aino Pekkarinen</title>
        <meta
          name="description"
          content="Dating Reset on sinkkunaisille suunnattu, kahden psykologin ohjaama ryhmävalmennus. Pilottiryhmä tammi–maaliskuussa 2027 Helsingissä tai etänä."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Dating Reset ❤️‍🔥 Uusi suunta rakkauselämällesi" />
        <meta
          property="og:description"
          content="Kahden psykologin ohjaama ryhmävalmennus sinkkunaisille. Liity odotuslistalle!"
        />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fi_FI" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh]">
        <img
          src={heroImageUrl}
          alt="Dating Reset -ryhmävalmennus"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="hero-header text-white text-4xl md:text-7xl lg:text-8xl font-light tracking-wider">
            DATING RESET
          </h1>
          <p className="hero-header text-white text-lg md:text-2xl font-light tracking-wide mt-4">
            Uusi suunta rakkauselämällesi.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">DATING RESET ❤️‍🔥</h2>
          <p className={textClass}>
            Tuntuuko, että samat kaavat toistuvat deittailussa ja ihmissuhteissa? Haluaisitko tuntea olosi
            itsevarmaksi ja turvalliseksi tapailusuhteissasi? Oletko valmis deittailemaan tinkimättä omista
            tarpeista ja rajoistasi?
          </p>
          <p className={textClass}>
            Dating Reset on sinkkunaisille suunnattu, kahden psykologin ohjaama ryhmävalmennus, jossa
            syvennytään omiin suhdekaavoihin, kiintymyssuhteisiin sekä omiin tarpeisiin ja toiveisiin.
          </p>
          <p className={textClass}>
            Tavoitteena on ymmärtää itseäsi paremmin, jättää toimimattomat deittikuviot taakse ja ottaa
            askelia kohti rakkaussuhdetta, jossa voit hyvin. 🤍
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="py-12 md:py-16 bg-[#f8f7f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            ✨ Ensimmäinen pilottiryhmä käynnistyy tammikuussa 2027!
          </h2>
          <ul className="space-y-2 text-base md:text-lg font-light text-gray-700">
            <li><strong className="font-semibold">Milloin:</strong> tammi–maaliskuu 2027</li>
            <li><strong className="font-semibold">Missä:</strong> Helsingissä tai etänä</li>
            <li><strong className="font-semibold">Toteutus:</strong> Ohjattu ryhmämuotoinen toteutustapa</li>
          </ul>
        </div>
      </div>

      {/* Coaches */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">TUTUSTU VALMENTAJIIN 🤍</h2>
          <p className={textClass}>
            <strong className="font-semibold">Aino Pekkarinen</strong> – Pariterapeutti ja ihmissuhdepsykologi,
            jonka erityisosaamista ovat kiintymyssuhdeteemat ja deittailu- ja parisuhteiden haasteiden
            ymmärtäminen sekä ratkaiseminen. Lue Ainosta lisää{" "}
            <a
              href="https://www.instagram.com/ihmissuhdepsykologi/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              täältä
            </a>
            .
          </p>
          <p className={textClass}>
            <strong className="font-semibold">Helmi Silvennoinen</strong> – Psykologi ja lyhytterapeutti, jonka
            erityisosaamista ovat itsetuntemuksen ja itsevarmuuden vahvistaminen sekä voimaannuttava
            ryhmätyöskentely. Lue Helmistä lisää{" "}
            <a
              href="https://www.instagram.com/psykologihelmi/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              täältä
            </a>
            .
          </p>
        </div>
      </div>

      {/* Waitlist Form */}
      <div id="odotuslista" className="w-full bg-[#131313] py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 text-white">
            <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-wider">KIINNOSTUITKO? 💌</h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-4">
              Liity odotuslistalle, niin kuulet ensimmäisten joukossa valmennuksen tarkemmasta sisällöstä,
              toteutuksesta ja ilmoittautumisesta.
            </p>
            <p className="text-base md:text-lg font-semibold leading-relaxed mb-4">
              Odotuslistalaisena saat myös mahdollisuuden ilmoittautua mukaan Early Bird -etuhintaan!
            </p>
            <p className="text-sm md:text-base font-light text-gray-400">
              Odotuslistalle liittyminen ei sido sinua mihinkään.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-8">
            {/* Spam honeypot – hidden from real users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <Input
              name="name"
              type="text"
              required
              placeholder="Nimi"
              className="elegant-input text-white placeholder:text-gray-400"
            />
            <Input
              name="email"
              type="email"
              required
              placeholder="Sähköposti"
              className="elegant-input text-white placeholder:text-gray-400"
            />
            <Input
              name="phone"
              type="tel"
              required
              placeholder="Puhelinnumero"
              className="elegant-input text-white placeholder:text-gray-400"
            />
            <Input
              name="ika"
              type="number"
              min={18}
              max={120}
              required
              placeholder="Ikä"
              className="elegant-input text-white placeholder:text-gray-400"
            />

            <fieldset>
              <legend className="text-gray-300 font-light mb-3">Toteutustapa</legend>
              <div className="flex flex-wrap gap-3" role="radiogroup">
                {FORMAT_OPTIONS.map((option) => {
                  const selected = format === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setFormat(option)}
                      className={`px-5 py-2 border text-sm tracking-wider uppercase transition-all ${
                        selected
                          ? "bg-white text-[#131313] border-white"
                          : "border-gray-500 text-gray-300 hover:border-white hover:text-white"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="flex items-start gap-3 cursor-pointer text-gray-300 font-light text-sm md:text-base">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-white cursor-pointer"
                required
              />
              <span className="italic">
                Jättämällä yhteystietoni annan suostumukseni siihen, että minuun voidaan olla yhteydessä
                Dating Reset -valmennukseen liittyen.
              </span>
            </label>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="btn-elegant-light disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={isSubmitting || !consent}
              >
                {isSubmitting ? "Lähetetään..." : "Liity odotuslistalle ❤️‍🔥"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#131313] py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-start">
          <p className="text-sm text-gray-400">© Aino Pekkarinen 2026</p>
        </div>
      </div>
    </div>
  );
};

export default DatingReset;
