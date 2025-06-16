import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  
  const currentLang = lang || 'fi';
  
  // Get the current path without language prefix
  const currentPath = location.pathname.replace(`/${currentLang}`, '') || '';
  
  const switchLanguage = (newLang: string) => {
    // Create new URL with different language
    const newUrl = `/${newLang}${currentPath}${location.search}${location.hash}`;
    
    // Change language in i18n
    i18n.changeLanguage(newLang);
    
    // Navigate to new URL
    window.location.href = newUrl;
  };

  return (
    <div className="flex flex-col items-center space-y-1 text-sm uppercase tracking-widest">
      <button
        onClick={() => switchLanguage('fi')}
        className={`px-2 py-1 transition-colors ${
          currentLang === 'fi'
            ? 'text-white font-medium border-b border-white'
            : 'text-white/70 hover:text-white'
        }`}
      >
        FI
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 transition-colors ${
          currentLang === 'en'
            ? 'text-white font-medium border-b border-white'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 