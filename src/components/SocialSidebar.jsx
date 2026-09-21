import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useLanguage } from '../context/LanguageContext';
import Pdf_file from '../assets/Juan_Pablo_Galli_EN.pdf';

const { REACT_APP_LINKEDIN_PROFILE, REACT_APP_GITHUB_PROFILE } = process.env;

// Sidebar social: mismo diseño que en myportfolio-anterior
// (pestañas que se deslizan desde el borde izquierdo al pasar el mouse).
const SocialSidebar = () => {
  const { t } = useLanguage();

  return (
    <div className='hidden md:flex fixed flex-col top-[35%] left-0 z-40'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300'>
          <a
            className='flex justify-between items-center w-full text-[#d8ddea]'
            href={REACT_APP_LINKEDIN_PROFILE}
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300'>
          <a
            className='flex justify-between items-center w-full text-[#d8ddea]'
            href={REACT_APP_GITHUB_PROFILE}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300'>
          <a
            className='flex justify-between items-center w-full text-[#d8ddea]'
            href={Pdf_file}
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('sidebar').resume} <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
