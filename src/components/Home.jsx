import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { useTypingText } from '../hooks/typingEffect';

const Home = () => {
  const { t } = useLanguage();
  const homeTexts = t('home');

  // Se escribe una vez y se queda; al cambiar de idioma vuelve a escribirse.
  // Para que borre y repita como antes: useTypingText(homeTexts.subtitle, { loop: true })
  const typedSubtitle = useTypingText(homeTexts.subtitle);

  return (
    <section
      id='home'
      name='home'
      className='w-full min-h-screen bg-[#18434e] flex items-center justify-center pt-[80px]'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full'>
        <p className='text-[#d8ddea] text-lg mb-2'>{homeTexts.welcome}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#d8ddea] leading-tight'>
          {homeTexts.title}
        </h1>

        {/* Los lectores de pantalla leen el texto completo; la animación es sólo visual. */}
        <h2 className='text-3xl sm:text-5xl font-bold text-[#a1bdd0] mt-2 mb-4 min-h-[3.5rem] sm:min-h-[4rem] leading-tight'>
          <span className='sr-only'>{homeTexts.subtitle}</span>
          <span aria-hidden='true'>
            {typedSubtitle}
            <span className='animate-pulse text-[#d8ddea]'>|</span>
          </span>
        </h2>

        <p className='text-[#a1bdd0] py-4 max-w-[700px] text-lg leading-relaxed font-medium'>
          {homeTexts.desc}
        </p>

        <div className='mt-4'>
          <Link to='work' href='#work' smooth duration={500} offset={-80} className='inline-block'>
            <span className='text-[#d8ddea] group border-2 px-6 py-3 my-2 flex items-center gap-3 bg-transparent border-[#d8ddea] hover:bg-[#d8ddea] hover:text-[#18434e] transition-all duration-300 font-semibold rounded-md shadow-md cursor-pointer'>
              {homeTexts.button}
              <span className='group-hover:translate-x-1 duration-300'>
                <HiArrowNarrowRight />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
