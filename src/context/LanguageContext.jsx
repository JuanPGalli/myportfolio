import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANGUAGE = 'en';

// Código interno -> atributo lang del <html> (mejora accesibilidad y SEO).
const HTML_LANG = { en: 'en', es: 'es', br: 'pt-BR' };

const isSupported = (code) => Object.prototype.hasOwnProperty.call(translations, code);

const detectInitialLanguage = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && isSupported(saved)) return saved;
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }

  const browser = (navigator.language || '').toLowerCase();
  if (browser.startsWith('pt')) return 'br';
  if (browser.startsWith('es')) return 'es';
  return DEFAULT_LANGUAGE;
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(detectInitialLanguage);

  const setLanguage = useCallback((code) => {
    if (!isSupported(code)) return;
    setLanguageState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Sin persistencia: el idioma sigue funcionando durante la sesión.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language] || 'en';
  }, [language]);

  const t = useCallback((section) => translations[language]?.[section] || {}, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }
  return context;
};
