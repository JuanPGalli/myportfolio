import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const aboutTexts = t('about');

  return (
    <section
      name='about'
      className='w-full min-h-screen bg-[#18434e] text-[#a1bdd0] flex items-center'
    >
      <div className='flex flex-col justify-center items-center w-full max-w-[1000px] mx-auto p-4'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8'>
          <div className='sm:text-right pl-4'>
            <h2 className='text-4xl font-bold inline border-b-4 border-[#d8ddea] text-[#a1bdd0]'>
              {aboutTexts.title}
            </h2>
          </div>
          <div></div>
        </div>
        <div className='w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold text-[#d8ddea] leading-tight'>
            <h3>{aboutTexts.headline}</h3>
          </div>
          <div className='text-base leading-relaxed flex flex-col gap-4 text-[#a1bdd0]'>
            <p>{aboutTexts.p1}</p>
            <p>{aboutTexts.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
