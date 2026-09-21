import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import JavaScript from '../assets/javascript.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Node from '../assets/node.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import PostgreSQL from '../assets/postgresql.png';
import Git from '../assets/git.webp';

const SKILLS = [
  { name: 'JavaScript', icon: JavaScript },
  { name: 'NodeJS', icon: Node },
  { name: 'PostgreSQL', icon: PostgreSQL },
  { name: 'Git', icon: Git },
  { name: 'HTML', icon: HTML },
  { name: 'CSS', icon: CSS },
  { name: 'React', icon: ReactImg },
  { name: 'Redux', icon: Redux },
];

function Skills() {
  const { t } = useLanguage();
  const skillsTexts = t('skills');

  return (
    <section
      id='skills'
      name='skills'
      className='w-full min-h-screen bg-[#18434e] text-[#a1bdd0] flex items-center py-16'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <h2 className='text-4xl font-bold inline border-b-4 border-[#d8ddea]'>
            {skillsTexts.title}
          </h2>
          <p className='py-4'>{skillsTexts.subtitle}</p>
        </div>

        <ul className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
          {SKILLS.map(({ name, icon }) => (
            <li
              key={name}
              className='px-0 cursor-default shadow-md shadow-[#040c16] hover:scale-105 duration-300 py-2'
            >
              <img className='w-20 h-20 object-contain mx-auto' src={icon} alt='' />
              <p className='my-4'>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
