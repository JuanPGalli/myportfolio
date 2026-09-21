import React from 'react';
import { AR, BR, US } from 'country-flag-icons/react/3x2';
import { useLanguage } from '../context/LanguageContext';

// Cada idioma se representa con la bandera de su país:
// inglés -> USA, portugués -> Brasil, español -> Argentina.
const LANGUAGES = [
  { code: 'en', label: 'English', Flag: US },
  { code: 'br', label: 'Português', Flag: BR },
  { code: 'es', label: 'Español', Flag: AR },
];

/**
 * @param {'sm' | 'lg'} size  sm: barra superior · lg: pensado para tocar en mobile
 * @param {boolean} showLabel muestra el nombre del idioma junto a la bandera
 */
const LanguageSwitcher = ({ size = 'sm', showLabel = false, className = '' }) => {
  const { language, setLanguage, t } = useLanguage();
  const flagWidth = size === 'lg' ? 'w-9' : 'w-7';

  return (
    <div
      role='group'
      aria-label={t('nav').language}
      className={`flex items-center gap-2 ${className}`}
    >
      {LANGUAGES.map(({ code, label, Flag }) => {
        const active = language === code;
        return (
          <button
            key={code}
            type='button'
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className={`flex items-center gap-2 rounded-md p-1 transition duration-200 ${
              active ? 'bg-[#11333c] opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Flag
              aria-hidden='true'
              className={`${flagWidth} h-auto rounded-[3px] shadow-sm ring-1 ring-black/20`}
            />
            {showLabel && (
              <span className={`text-sm font-medium ${active ? 'text-[#d8ddea]' : 'text-[#a1bdd0]'}`}>
                {label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
