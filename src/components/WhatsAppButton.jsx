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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={t('whatsapp').label}
      title={t('whatsapp').label}
      className='fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#20ba5a] sm:bottom-8 sm:right-8 sm:h-[72px] sm:w-[72px]'
    >
      <FaWhatsapp className='h-9 w-9 sm:h-11 sm:w-11' />
    </a>
  );
};

export default WhatsAppButton;
