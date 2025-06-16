import { useTranslation as useI18nextTranslation } from 'react-i18next';
import type { 
  SupportedLanguages, 
  TranslationNamespaces,
  TranslationResources 
} from '../types/i18n';

// Custom hook for typed translations
export function useTranslation<T extends TranslationNamespaces>(
  namespace?: T
): {
  t: (key: string, options?: any) => string;
  i18n: {
    language: SupportedLanguages;
    changeLanguage: (lng: SupportedLanguages) => Promise<void>;
    isInitialized: boolean;
  };
  currentLanguage: SupportedLanguages;
  switchLanguage: (language: SupportedLanguages) => Promise<void>;
  isLoading: boolean;
} {
  const { t, i18n, ready } = useI18nextTranslation(namespace);

  const switchLanguage = async (language: SupportedLanguages) => {
    await i18n.changeLanguage(language);
    // Update document language attribute
    document.documentElement.lang = language;
  };

  return {
    t,
    i18n: {
      language: i18n.language as SupportedLanguages,
      changeLanguage: switchLanguage,
      isInitialized: i18n.isInitialized,
    },
    currentLanguage: i18n.language as SupportedLanguages,
    switchLanguage,
    isLoading: !ready,
  };
}

// Hook specifically for common translations (navigation, buttons, forms)
export function useCommonTranslation() {
  return useTranslation('common');
}

// Hook specifically for page content translations
export function usePagesTranslation() {
  return useTranslation('pages');
}

// Hook specifically for SEO translations
export function useSEOTranslation() {
  return useTranslation('seo');
}

// Hook specifically for testimonials
export function useTestimonialsTranslation() {
  return useTranslation('testimonials');
}

// Hook for language detection and switching
export function useLanguage() {
  const { i18n } = useI18nextTranslation();

  const switchLanguage = async (language: SupportedLanguages) => {
    await i18n.changeLanguage(language);
    // Update document language attribute
    document.documentElement.lang = language;
    
    // Update HTML lang attribute in index.html
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('lang', language);
    }
  };

  const getCurrentLanguage = (): SupportedLanguages => {
    return i18n.language as SupportedLanguages;
  };

  const isLanguageLoaded = (language: SupportedLanguages): boolean => {
    return i18n.hasResourceBundle(language, 'common');
  };

  return {
    currentLanguage: getCurrentLanguage(),
    switchLanguage,
    isLanguageLoaded,
    availableLanguages: ['fi', 'en'] as SupportedLanguages[],
    isInitialized: i18n.isInitialized,
  };
} 