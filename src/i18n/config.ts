import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import type { SupportedLanguages } from '../types/i18n';

// Language detection configuration
const languageDetectorOptions = {
  // Order of language detection methods
  order: ['localStorage', 'navigator', 'htmlTag'],
  
  // Keys for localStorage
  lookupLocalStorage: 'ainopekkarinen-language',
  
  // Cache user language
  caches: ['localStorage'],
  
  // Don't detect from path, query, cookie, sessionStorage
  excludeCacheFor: ['cimode'],
  
  // Only detect these languages
  checkWhitelist: true
};

// Backend configuration for loading translation files
const backendOptions = {
  loadPath: `/locales/{{lng}}/{{ns}}.json?t=${Date.now()}`,
  
  // Request options
  requestOptions: {
    cache: 'no-cache',
    credentials: 'same-origin',
    mode: 'cors'
  }
};

// i18n configuration
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Default language fallback
    fallbackLng: 'fi' as SupportedLanguages,
    
    // Supported languages
    supportedLngs: ['fi', 'en'] as SupportedLanguages[],
    
    // Default namespace
    defaultNS: 'common',
    
    // Translation namespaces
    ns: ['common', 'pages', 'seo', 'testimonials'],
    
    // Language detection
    detection: languageDetectorOptions,
    
    // Backend configuration
    backend: backendOptions,
    
    // React-specific options
    react: {
      // Bind i18n instance to React component
      bindI18n: 'languageChanged',
      // Bind store to React component
      bindI18nStore: '',
      // Don't use Suspense - we'll handle loading states manually
      useSuspense: false,
    },
    
    // Interpolation options
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    
    // Debug mode (only in development)
    debug: import.meta.env.DEV,
    
    // Load settings
    load: 'languageOnly', // Don't load region-specific translations (e.g., en-US)
    
    // Clean up language codes
    cleanCode: true,
    
    // Return empty string for missing keys in development
    returnEmptyString: import.meta.env.DEV,
    
    // Key separator
    keySeparator: '.',
    
    // Namespace separator
    nsSeparator: ':',
  });

export default i18n; 