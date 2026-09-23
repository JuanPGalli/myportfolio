import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import resumeData from '../context/resumeData';
import resumeFiles from '../assets/resumeFiles';

// Currículum navegable e indexable por Google (texto real, no una imagen ni un PDF
// embebido). El botón abre/descarga el PDF equivalente en el idioma activo —
// mismo contenido, dos formatos.
const Resume = () => {
  const { language } = useLanguage();
  const r = resumeData[language] || resumeData.en;
  const { header, sectionTitles } = r;

  return (
    <section
      id='resume'
      name='resume'
      className='w-full min-h-screen bg-[#18434e] text-[#a1bdd0] flex items-center py-16'
    >
      <div className='max-w-[800px] mx-auto p-4 w-full'>
        <div className='flex flex-wrap items-center justify-between gap-4 pb-6'>
          <h2 className='text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea]'>
            {header.name}
          </h2>
          <a
            href={resumeFiles[language]}
            download
            className='flex items-center gap-2 rounded-md border-2 border-[#d8ddea] px-4 py-2 text-sm font-semibold text-[#d8ddea] hover:bg-[#d8ddea] hover:text-[#18434e] transition-colors duration-300'
          >
            <HiOutlineDownload size={18} /> {sectionTitles.download}
          </a>
        </div>

        <p className='text-sm text-[#a1bdd0] mb-1'>{header.tagline}</p>
        <p className='text-sm text-[#a1bdd0] mb-8'>
          {header.location} · {header.phone} ·{' '}
          <a className='underline hover:text-[#d8ddea]' href={`mailto:${header.email}`}>
            {header.email}
          </a>
          <br />
          <a
            className='underline hover:text-[#d8ddea]'
            href={header.linkedinUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            {header.linkedin}
          </a>{' '}
          ·{' '}
          <a
            className='underline hover:text-[#d8ddea]'
            href={header.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            {header.github}
          </a>
        </p>

        <h3 className='text-xl font-bold text-[#d8ddea] mb-2'>{sectionTitles.summary}</h3>
        <p className='mb-8 leading-relaxed'>{r.summary}</p>

        <h3 className='text-xl font-bold text-[#d8ddea] mb-2'>{sectionTitles.skills}</h3>
        <ul className='mb-8 space-y-1'>
          {r.skills.map((group) => (
            <li key={group.label}>
              <span className='font-semibold text-[#d8ddea]'>{group.label}: </span>
              {group.items.join(', ')}
            </li>
          ))}
        </ul>

        <h3 className='text-xl font-bold text-[#d8ddea] mb-4'>{sectionTitles.devExperience}</h3>
        <div className='space-y-6 mb-8'>
          {r.devExperience.map((job) => (
            <article key={job.role + job.dates}>
              <h4 className='font-bold text-[#d8ddea]'>{job.role}</h4>
              <p className='text-sm italic mb-2'>
                {job.place} · {job.dates}
              </p>
              <ul className='list-disc list-outside pl-5 space-y-1 leading-relaxed'>
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 24)}>{b}</li>
                ))}
              </ul>
              {(job.deploy || job.code || job.video) && (
                <p className='text-sm mt-2 space-x-3'>
                  {job.deploy && (
                    <a
                      className='underline hover:text-[#d8ddea]'
                      href={`https://${job.deploy}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {job.deploy}
                    </a>
                  )}
                  {job.code && (
                    <a
                      className='underline hover:text-[#d8ddea]'
                      href={`https://${job.code}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {job.code}
                    </a>
                  )}
                  {job.video && (
                    <a
                      className='underline hover:text-[#d8ddea]'
                      href={`https://${job.video}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {job.video}
                    </a>
                  )}
                </p>
              )}
            </article>
          ))}
        </div>

        <h3 className='text-xl font-bold text-[#d8ddea] mb-4'>{sectionTitles.financeExperience}</h3>
        <ul className='mb-8 space-y-2'>
          {r.financeExperience.map((job) => (
            <li key={job.role + job.dates}>
              <span className='font-semibold text-[#d8ddea]'>{job.role}</span> — {job.place}
              <span className='italic'> · {job.dates}</span>
            </li>
          ))}
        </ul>

        <h3 className='text-xl font-bold text-[#d8ddea] mb-2'>{sectionTitles.education}</h3>
        <ul className='list-disc list-outside pl-5 space-y-1 mb-2'>
          {r.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{r.languages}</p>
      </div>
    </section>
  );
};

export default Resume;
