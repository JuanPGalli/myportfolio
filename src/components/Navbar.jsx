import React, { useState } from 'react';
import { FaBars, ReactFaTimes, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { setLanguage, t } = useLanguage();
  const navTexts = t('nav');

  const handleNavClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#18434e] text-[#a1bdd0] z-50 border-b border-[#11333c]'>
      <div>
        <h1 className='text-2xl font-bold font-mono text-[#d8ddea]'>JPG</h1>
      </div>

      {/* Menu Desktop */}
      <ul className='hidden md:flex items-center gap-6'>
        <li className='hover:text-[#d8ddea] cursor-pointer font-medium transition-colors'>
          {navTexts.home}
        </li>
        <li className='hover:text-[#d8ddea] cursor-pointer font-medium transition-colors'>
          {navTexts.about}
        </li>
        <li className='hover:text-[#d8ddea] cursor-pointer font-medium transition-colors'>
          {navTexts.work}
        </li>
        <li className='hover:text-[#d8ddea] cursor-pointer font-medium transition-colors'>
          {navTexts.contact}
        </li>

        {/* Selector de idiomas Desktop */}
        <div className='flex gap-2 border-l border-[#3a5d66] pl-4 ml-2'>
          <button
            onClick={() => setLanguage('en')}
            title='English (US)'
            className='hover:scale-125 transition-transform duration-150 text-xl'
          >
            🇺🇸
          </button>
          <button
            onClick={() => setLanguage('es')}
            title='Español (AR)'
            className='hover:scale-125 transition-transform duration-150 text-xl'
          >
            🇦🇷
          </button>
          <button
            onClick={() => setLanguage('br')}
            title='Português (BR)'
            className='hover:scale-125 transition-transform duration-150 text-xl'
          >
            🇧🇷
          </button>
        </div>
      </ul>

      {/* Hamburguesa Mobile */}
      <div
        onClick={handleNavClick}
        className='md:hidden z-10 cursor-pointer text-xl text-[#d8ddea]'
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu Mobile */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#18434e] flex flex-col justify-center items-center gap-6 text-2xl'
        }
      >
        <li className='hover:text-[#d8ddea] cursor-pointer'>{navTexts.home}</li>
        <li className='hover:text-[#d8ddea] cursor-pointer'>{navTexts.about}</li>
        <li className='hover:text-[#d8ddea] cursor-pointer'>{navTexts.work}</li>
        <li className='hover:text-[#d8ddea] cursor-pointer'>{navTexts.contact}</li>

        {/* Selector de idiomas Mobile */}
        <div className='flex gap-6 mt-8 pt-6 border-t border-[#3a5d66] w-1/2 justify-center'>
          <button
            onClick={() => {
              setLanguage('en');
              setNav(false);
            }}
            className='text-3xl active:scale-95'
          >
            🇺🇸
          </button>
          <button
            onClick={() => {
              setLanguage('es');
              setNav(false);
            }}
            className='text-3xl active:scale-95'
          >
            🇦🇷
          </button>
          <button
            onClick={() => {
              setLanguage('br');
              setNav(false);
            }}
            className='text-3xl active:scale-95'
          >
            🇧🇷
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
