import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// Número en formato internacional, sólo dígitos (sin +, espacios ni guiones).
// Se puede sobreescribir con REACT_APP_WHATSAPP_NUMBER en el .env / en Vercel.
const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '5521995282826';

const MESSAGES = {
  en: 'Hi Juan! I saw your portfolio and I would like to discuss a web project.',
  es: '¡Hola Juan! Vi tu portfolio y me gustaría consultarte por un proyecto web.',
  br: 'Olá Juan! Vi seu portfólio e gostaria de fazer uma consulta sobre um projeto web.',
};

const WhatsAppButton = () => {
  const { language, t } = useLanguage();

  const message = encodeURIComponent(MESSAGES[language] || MESSAGES.en);
  // Antes era `https://wa.me{encodedMessage}` (sin número ni interpolación): el link no funcionaba.
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={t('whatsapp').label}
      title={t('whatsapp').label}
      className='fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#20ba5a] sm:bottom-6 sm:right-6 sm:p-4'
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
