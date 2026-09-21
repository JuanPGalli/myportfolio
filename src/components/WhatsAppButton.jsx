import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const { language } = useLanguage();

  const messages = {
    en: 'Hi Juan! I saw your portfolio and I would like to discuss a web project.',
    es: '¡Hola Juan! Vi tu portfolio y me gustaría consultarte por un proyecto web.',
    br: 'Olá Juan! Vi seu portfólio e gostaria de fazer uma consulta sobre um projeto web.'
  };

  const encodedMessage = encodeURIComponent(messages[language] || messages['en']);
  // Tu número real ya configurado
  const whatsappUrl = `https://wa.me{encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 z-50 flex items-center justify-center animate-bounce"
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
