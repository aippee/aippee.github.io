import React from "react";
import { Helmet } from "react-helmet-async";

const CALENDLY_URL = "https://calendly.com/helmi-psykologipalveluvalo/15min-puhelu";

const RECOGNISE_ITEMS = [
  "Olet joustanut liikaa rajoistasi ja tarpeistasi tapailusuhteissasi",
  "Pohdit herkästi, ovatko tarpeesi ja tunteesi liikaa",
  "Miellytät ja mukaudut herkästi kun ihastut, samalla unohtaen itsesi tai omat tarpeesi",
  "Tapailuun tulee helposti etäisyyttä tai kitkaa, etkä aina tiedä, mitä asialle voisi tehdä",
  "Olet kyllästynyt selviämään hämmentävien deittailukuvioiden kanssa itseksesi, kaipaat selkeyttä ja uutta suuntaa rakkauteen",
];

const BENEFITS = [
  {
    icon: "🔎",
    title: "Selkeyttä kuvioihisi.",
    text: "Saat sanat sille, mikä suhteissasi toistuu, ja ymmärrät, mistä tutut toimintatapasi tulevat. Ymmärrys mahdollistaa kestävän muutoksen.",
  },
  {
    icon: "🧭",
    title: "Tiedon siitä, mitä haluat.",
    text: "Opit tunnistamaan, millaisessa suhteessa tunnet olosi hyväksi ja arvostetuksi, ja osaat sanoa tarpeesi ja rajasi ääneen.",
  },
  {
    icon: "🛠",
    title: "Käytännön keinoja toimia toisin.",
    text: "Pääset harjoittelemaan oman itsesi puolella olemista sekä muita deittailussa tärkeitä vuorovaikutustaitoja.",
  },
  {
    icon: "🤝",
    title: "Ryhmän tuen.",
    text: "Psykologien ja muiden ryhmäläisten luomassa turvallisessa tilassa on mahdollista oppia ja oivaltaa yhdessä, sekä tuntea että et ole yksin kokemustesi kanssa.",
  },
];

const FIT_ITEMS = [
  "olet tällä hetkellä sinkku ja toivot kestävää parisuhdetta",
  "huomaat, että samat kuviot toistuvat deittailussasi, ja haluat tutkia niitä uteliaasti",
  "olet valmis puhumaan kokemuksistasi ryhmässä omaan tahtiisi ja kuuntelemaan muita",
  "haluat tehdä työtä itsesi eteen etkä etsi pelkkiä deittivinkkejä",
  "elämäntilanteesi on juuri nyt riittävän vakaa, ettei sinulla ole akuuttia kriisiä tai traumaoireilua. Ryhmän teemat voivat herättää paljon tunteita, joten siihen on hyvä tulla, kun on voimia kohdata niitä.",
];

const SESSIONS = [
  {
    date: "20.1.",
    title: "Mikä vetää puoleensa ja miksi?",
    text: "Tutustu ryhmään ja ymmärrä kiintymyksesi juuria – ymmärrys auttaa sinua tekemään valintoja itsestäsi käsin.",
  },
  {
    date: "3.2.",
    title: "Miksi sama kuvio toistuu?",
    text: "Tunnistetaan omia toimintatapoja ja tutkitaan, mistä ne tulevat.",
  },
  {
    date: "17.2.",
    title: "Suhde itseesi.",
    text: "Ymmärrät miten suhde itsesi kanssa määrittelee toimintaasi rakkaudessa, harjoittelet omalla puolellasi olemista.",
  },
  {
    date: "3.3.",
    title: "Tarpeet ja rajat.",
    text: "Harjoitellaan saamaan yhteys ja jakamaan se, mitä toivot ja mikä tuntuu sinulle sopivalta.",
  },
  {
    date: "17.3.",
    title: "Uusi luku rakkaudessa.",
    text: "Yhteisen matkan päätös: viedään opit ja oivallukset oikeaan elämään.",
  },
];

const CTA_LABEL = "Varaa maksuton kartoituspuhelu →";

const DatingReset = () => {
  const pageUrl = window.location.href;
  const base = import.meta.env.BASE_URL;
  const heroImageUrl = `${base}lovable-uploads/IMG_5104.JPG`;
  const ainoImageUrl = `${base}lovable-uploads/dating-reset-aino.jpg`;
  const helmiImageUrl = `${base}lovable-uploads/dating-reset-helmi.jpg`;
  const videoUrl = `${base}videos/dating-reset-esittely.mp4`;
  const videoPosterUrl = `${base}videos/dating-reset-esittely-poster.jpg`;

  const sectionClass = "py-12 md:py-16";
  const containerClass = "max-w-3xl mx-auto px-4 sm:px-6";
  const headingClass = "text-2xl md:text-3xl font-bold mb-6";
  const textClass = "mb-4 text-base md:text-lg font-light leading-relaxed text-gray-700";
  const listClass =
    "list-disc pl-5 space-y-3 text-base md:text-lg font-light leading-relaxed text-gray-700 marker:text-[#a9a186]";
  const linkClass = "underline underline-offset-2 hover:text-black transition-colors";

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dating Reset – ryhmävalmennus sinkkunaisille Helsingissä | Aino Pekkarinen</title>
        <meta
          name="description"
          content="Dating Reset on kahden psykologin ohjaama viiden tapaamisen ryhmävalmennus sinkkunaisille. Ensimmäinen pilottiryhmä alkaa Helsingissä 20.1.2027. Varaa maksuton kartoituspuhelu."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Dating Reset ❤️‍🔥 Ryhmävalmennus sinkkunaisille" />
        <meta
          property="og:description"
          content="Kahden psykologin ohjaama viiden tapaamisen ryhmävalmennus Helsingissä. Pilottiryhmä alkaa 20.1.2027 – vain 8 paikkaa."
        />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fi_FI" />
      </Helmet>

      {/* Hero */}
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
      <div className={`${sectionClass} bg-white`}>
        <div className={containerClass}>
          <h2 className={headingClass}>
            Toistuvatko samat kuviot tapailusuhteissasi? Haluatko tuntea itsesi hyväksi ja arvostetuksi ja
            olla omalla puolellasi rakkaudessa?
          </h2>
          <p className={textClass}>
            Alussa kaikki tuntuu lupaavalta. Sitten huomaat taas odottavasi viestiä, arvailevasi toisen
            tunteita ja miettiväsi, oletko liian vaativa, kun haluat tietää, missä mennään. Kun tapailu
            päättyy, kysyt itseltäsi: <em>miten päädyin taas tähän?</em>
          </p>
          <p className={textClass}>
            Tämä ei tarkoita, että sinussa olisi jotain vikaa. Kuvioilla on usein selitys, ja kun sen
            ymmärtää, voi alkaa valita toisin.
          </p>
          <p className={textClass}>
            <strong className="font-semibold">
              Dating Reset on kahden psykologin ohjaama viiden tapaamisen ryhmävalmennus sinkkunaisille.
            </strong>{" "}
            Valmennuksella opit ymmärtämään kiintymyssuhdekaavojesi logiikkaa ja opit deittailemaan niin,
            että omilla toiveillasi ja tarpeillasi on tilaa.
          </p>
          <p className={`${textClass} mt-8`}>
            📍 Helsinki · 🗓 Ensimmäinen pilottiryhmä alkaa{" "}
            <strong className="font-semibold">20.1.2027</strong>
          </p>
          <p className="mb-8 text-base md:text-lg font-semibold leading-relaxed text-gray-900">
            Tarjoamme tämän mahdollisuuden nyt vain 8:lle henkilölle!
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-elegant-dark">
            {CTA_LABEL}
          </a>
          <p className="mt-4 text-sm md:text-base font-light italic text-gray-600">
            Puhelu ei sido mihinkään.
          </p>
        </div>
      </div>

      {/* Do you recognise yourself */}
      <div className={`${sectionClass} bg-[#f8f7f5]`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Tunnistatko itsesi näistä?</h2>
          <ul className={listClass}>
            {RECOGNISE_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 text-base md:text-lg font-semibold leading-relaxed text-gray-900">
            Jos tunnistit itsesi, Dating Reset on tehty sinulle.
          </p>
        </div>
      </div>

      {/* What you get */}
      <div className={`${sectionClass} bg-white`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Mitä saat mukaasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title}>
                <div className="text-3xl mb-3" aria-hidden="true">
                  {benefit.icon}
                </div>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">{benefit.title}</strong> {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who it is for */}
      <div className={`${sectionClass} bg-[#f8f7f5]`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Kenelle Dating Reset on tehty? 💛</h2>
          <p className={textClass}>
            Haluamme koota ryhmän huolella, jotta osallistujat saavat siitä parhaan mahdollisen hyödyn.
          </p>
          <p className="mb-4 text-base md:text-lg font-semibold leading-relaxed text-gray-900">
            Dating Reset sopii sinulle, jos
          </p>
          <ul className={listClass}>
            {FIT_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={`${textClass} mt-8 mb-0`}>
            Epävarma, sopiiko ryhmä sinulle juuri nyt? Puhelussa voit pohtia sitä rauhassa psykologin
            kanssa. Ei ole vääriä kysymyksiä tai ajatuksia, vaan pohdimme näitä kanssasi mielellämme.
          </p>
        </div>
      </div>

      {/* Schedule */}
      <div className={`${sectionClass} bg-white`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Viisi tapaamista, yksi selkeä suunta</h2>
          <ol className="border-t border-gray-200">
            {SESSIONS.map((session) => (
              <li
                key={session.date}
                className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-5 border-b border-gray-200"
              >
                <p className="text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap">
                  {session.date} klo 16–18
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">{session.title}</strong> {session.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Coaches */}
      <div className={`${sectionClass} bg-[#f8f7f5]`}>
        <div className={containerClass}>
          <h2 className={`${headingClass} mb-8`}>Ohjaajinasi kaksi psykologia 🤍</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex sm:block items-start gap-5">
              <img
                src={ainoImageUrl}
                alt="Aino Pekkarinen"
                className="w-1/3 sm:w-full shrink-0 aspect-[4/5] object-cover sm:mb-5"
                loading="lazy"
                width="800"
                height="1000"
              />
              <p className={`${textClass} mb-0`}>
                <strong className="font-semibold text-gray-900">Aino Pekkarinen</strong>, pariterapeutti ja
                ihmissuhdepsykologi. Erityisosaamistani ovat kiintymyssuhteet sekä deittailun ja
                parisuhteiden toistuvat haasteet.{" "}
                <a
                  href="https://www.instagram.com/ihmissuhdepsykologi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Lue lisää Ainosta
                </a>
              </p>
            </div>
            <div className="flex sm:block items-start gap-5">
              <img
                src={helmiImageUrl}
                alt="Helmi Silvennoinen"
                className="w-1/3 sm:w-full shrink-0 aspect-[4/5] object-cover sm:mb-5"
                loading="lazy"
                width="800"
                height="1000"
              />
              <p className={`${textClass} mb-0`}>
                <strong className="font-semibold text-gray-900">Helmi Silvennoinen</strong>, psykologi ja
                lyhytterapeutti. Erityisosaamistani ovat itsetuntemuksen ja itsevarmuuden vahvistaminen
                sekä ryhmätyöskentely.{" "}
                <a
                  href="https://www.instagram.com/psykologihelmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Lue lisää Helmistä
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join */}
      <div className="w-full bg-[#131313] py-16 md:py-20 text-white">
        <div className={`${containerClass} text-center`}>
          <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
            Lähde mukaan ensimmäiseen ryhmään – vain 8 paikkaa jaossa 💌
          </h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-2">
            Dating Reset · 5 ohjattua kahden tunnin ryhmätapaamista Helsingissä · 890{"\u00A0"}€
          </p>
          <p className="text-base md:text-lg font-light italic text-gray-300 mb-8">
            Voit maksaa myös kahdessa erässä (2{"\u00A0"}×{"\u00A0"}445{"\u00A0"}€).
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-10 text-left sm:text-center">
            Jätä yhteystietosi, niin toinen valmentajista soittaa sinulle. Puhelussa voit kertoa, mikä
            herätti kiinnostuksesi ryhmää kohtaan ja mitä toivoisit valmennukselta, sekä voit kysyä
            ryhmästä ja pohtia yhdessä psykologin kanssa, sopiiko Dating Reset sinulle. Päätät
            osallistumisesta vasta puhelun jälkeen, eli puhelu ei sido sinua mihinkään.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-elegant-solid-light">
            {CTA_LABEL}
          </a>
          <p className="mt-6 text-sm md:text-base font-light italic text-gray-400">
            Pilottiryhmän paikkamäärä on rajattu.
          </p>
        </div>
      </div>

      {/* Video */}
      <div className={`${sectionClass} bg-white`}>
        <div className={containerClass}>
          <video
            className="w-full aspect-video bg-black"
            controls
            playsInline
            preload="none"
            poster={videoPosterUrl}
            aria-label="Dating Reset -esittelyvideo"
          >
            <source src={videoUrl} type="video/mp4" />
            <a href={videoUrl}>Katso Dating Reset -esittelyvideo</a>
          </video>
          <div className="mt-8 text-center">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-elegant-dark">
              {CTA_LABEL}
            </a>
          </div>
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
