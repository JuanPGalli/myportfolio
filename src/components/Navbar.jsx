import React, { useCallback, useEffect, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from '../assets/Logo.png';
import resumeFiles from '../assets/resumeFiles';

const { REACT_APP_LINKEDIN_PROFILE, REACT_APP_GITHUB_PROFILE } = process.env;

// Alto de la barra fija: los links scrollean con este offset para no quedar tapados.
const NAV_HEIGHT = 80;
const SECTIONS = ['home', 'about', 'skills', 'resume', 'work', 'contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, language } = useLanguage();
  const navTexts = t('nav');
  const resumeLabel = t('sidebar').resume;

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((value) => !value), []);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Bloquear el scroll de fondo mientras el menú está abierto.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Si se agranda la pantalla (rotar el celular, redimensionar), cerrar el menú mobile.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const linkProps = (id) => ({
    to: id,
    href: `#${id}`,
    smooth: true,
    duration: 500,
    offset: -NAV_HEIGHT,
  });

  return (
    <header className='fixed top-0 inset-x-0 z-50 bg-[#18434e] border-b border-[#11333c] text-[#a1bdd0]'>
      {/* Barra superior (siempre por encima del panel mobile, así el botón X sigue clickeable) */}
      <nav
        aria-label='Main'
        className='relative z-[60] h-[80px] px-4 flex justify-between items-center'
      >
        <Link {...linkProps('home')} onClick={closeMenu} aria-label='Juan Pablo Galli' className='cursor-pointer'>
          <img src={Logo} alt='' style={{ width: '50px' }} />
        </Link>

        {/* Menú desktop */}
        <ul className='hidden md:flex items-center gap-2'>
          {SECTIONS.map((id) => (
            <li key={id} className='px-1'>
              <Link
                {...linkProps(id)}
                spy
                activeClass='!text-[#d8ddea] !border-[#d8ddea]'
                className='block px-3 py-2 font-medium border-b-2 border-transparent hover:text-[#d8ddea] transition-colors duration-200'
              >
                {navTexts[id]}
              </Link>
            </li>
          ))}
          <li className='ml-3 pl-4 border-l border-[#3a5d66]'>
            <LanguageSwitcher size='sm' />
          </li>
        </ul>

        {/* Mobile: idioma siempre a mano + botón hamburguesa */}
        <div className='md:hidden flex items-center gap-3'>
          <LanguageSwitcher size='sm' />
          <button
            type='button'
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls='mobile-menu'
            aria-label={open ? navTexts.menuClose : navTexts.menuOpen}
            className='flex h-11 w-11 items-center justify-center rounded-md text-xl text-[#d8ddea]'
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Panel mobile */}
      <div
        id='mobile-menu'
        className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-[#18434e] px-6 pt-[80px] transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className='flex flex-col items-center gap-2'>
          {SECTIONS.map((id) => (
            <li key={id} className='px-0'>
              <Link
                {...linkProps(id)}
                spy
                onClick={closeMenu}
                activeClass='!text-[#d8ddea]'
                className='block px-6 py-3 text-3xl font-semibold hover:text-[#d8ddea] transition-colors duration-200'
              >
                {navTexts[id]}
              </Link>
            </li>
          ))}
        </ul>

        {/* En mobile no hay sidebar: los accesos sociales viven acá */}
        <ul aria-label={navTexts.social} className='flex items-center gap-8 text-[#d8ddea]'>
          <li className='px-0'>
            <a
              href={REACT_APP_LINKEDIN_PROFILE}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='flex h-12 w-12 items-center justify-center rounded-full border border-[#3a5d66]'
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li className='px-0'>
            <a
              href={REACT_APP_GITHUB_PROFILE}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='flex h-12 w-12 items-center justify-center rounded-full border border-[#3a5d66]'
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li className='px-0'>
            <a
              href={resumeFiles[language]}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={resumeLabel}
              className='flex h-12 w-12 items-center justify-center rounded-full border border-[#3a5d66]'
            >
              <BsFillPersonLinesFill size={24} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
