import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useCommonTranslation } from "../hooks/useTranslation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { t, isLoading } = useCommonTranslation();
  
  const currentLang = lang || 'fi';

  // Helper function to create language-aware links
  const createLink = (path: string) => {
    return `/${currentLang}${path}`;
  };

  const isActive = (path: string) => {
    const currentPath = location.pathname.replace(`/${currentLang}`, '') || '/';
    return currentPath === path;
  };

  // Don't render navigation items until translations are loaded
  if (isLoading) {
    return (
      <nav className="absolute w-full z-50 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <a href={createLink("")} className="text-white text-2xl md:text-3xl tracking-wider font-light">
                AINO PEKKARINEN
              </a>
            </div>
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const navItems = [
    { path: "", label: t('navigation.home') },
    { path: "/palvelut", label: t('navigation.services') },
    { path: "/minusta", label: t('navigation.about') },
    { path: "/yhteydenotto", label: t('navigation.contact') },
  ];

  return (
    <nav className="absolute w-full z-50 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Language Switcher - Top Left */}
        <div className="md:hidden absolute left-4 top-6">
          <LanguageSwitcher />
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a href={createLink("")} className="text-white text-2xl md:text-3xl tracking-wider font-light">
              AINO PEKKARINEN
            </a>
          </div>

          <div className="hidden md:flex gap-12 items-center text-white uppercase text-xs tracking-widest">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={createLink(item.path)}
                className={`hover:text-gray-300 transition-colors py-2 ${
                  isActive(item.path) ? 'border-b border-white' : ''
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://vello.fi/lav-coaching/v2-segment/80d541cd"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-2 hover:bg-white/10 transition-all ml-4"
            >
              {t('navigation.bookAppointment')}
            </a>

            {/* Desktop Language Switcher */}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button - Top Right */}
          <div className="md:hidden absolute right-4 top-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="md:hidden bg-white/95 shadow-lg absolute top-16 left-0 right-0 mt-0 transition-opacity duration-200 ease-in-out"
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        >
          <div className="px-2 pt-4 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={createLink(item.path)}
                className="text-gray-800 hover:text-black block px-3 py-3 text-sm font-light w-full text-center uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://vello.fi/lav-coaching/v2-segment/80d541cd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-gray-800 px-6 py-2 text-sm font-light text-gray-800 hover:bg-gray-800/5 transition-all uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.bookAppointment')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
