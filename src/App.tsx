import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Minusta from "./pages/Minusta";
import Palvelut from "./pages/Palvelut";
import Yhteydenotto from "./pages/Yhteydenotto";
import NotFound from "./pages/NotFound";
import I18nTest from "./components/I18nTest";
import "./i18n/config";

const queryClient = new QueryClient();

// Language wrapper component to handle language switching
const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Update i18n language when URL language changes
    if (lang && (lang === 'fi' || lang === 'en') && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Add hreflang meta tags
  useEffect(() => {
    const currentPath = location.pathname.replace(`/${lang}`, '');
    const baseUrl = window.location.origin;
    
    // Remove existing hreflang links
    const existingLinks = document.querySelectorAll('link[hreflang]');
    existingLinks.forEach(link => link.remove());

    // Add hreflang links
    const hreflangs = [
      { lang: 'fi', href: `${baseUrl}/fi${currentPath}` },
      { lang: 'en', href: `${baseUrl}/en${currentPath}` },
      { lang: 'x-default', href: `${baseUrl}/fi${currentPath}` } // Default to Finnish
    ];

    hreflangs.forEach(({ lang: hrefLang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hrefLang;
      link.href = href;
      document.head.appendChild(link);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang || 'fi';

    return () => {
      // Cleanup on unmount
      const links = document.querySelectorAll('link[hreflang]');
      links.forEach(link => link.remove());
    };
  }, [lang, location.pathname]);

  return <>{children}</>;
};

// Language redirect component
const LanguageRedirect = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Get user's preferred language
    const savedLanguage = localStorage.getItem('i18nextLng');
    const browserLanguage = navigator.language.split('-')[0];
    const defaultLanguage = (savedLanguage === 'en' || browserLanguage === 'en') ? 'en' : 'fi';
    
    // Redirect to language-specific URL
    const newPath = `/${defaultLanguage}${location.pathname}${location.search}${location.hash}`;
    window.location.replace(newPath);
  }, [location]);

  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Root redirect */}
              <Route path="/" element={<LanguageRedirect />} />
              
              {/* Language-specific routes - Fixed with /* */}
              <Route path="/:lang/*" element={
                <LanguageWrapper>
                  <Navigation />
                  <Routes>
                    <Route index element={<Index />} />
                    <Route path="minusta" element={<Minusta />} />
                    <Route path="palvelut" element={<Palvelut />} />
                    <Route path="yhteydenotto" element={<Yhteydenotto />} />
                    <Route path="i18n-test" element={<I18nTest />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </LanguageWrapper>
              } />
              
              {/* Fallback for invalid routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
