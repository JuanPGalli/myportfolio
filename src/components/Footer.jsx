import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='bg-[#18434e] border-t border-[#11333c] py-8 text-center text-sm text-[#a1bdd0]'>
      <p>
        {t('footer').madeBy} Juan Pablo Galli · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
