import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const { REACT_APP_GET_FORM_IO } = process.env;

const fieldClass =
  'w-full rounded-md bg-[#d8ddea] p-3 text-[#18434e] placeholder:text-[#4a6670] focus:bg-white transition-colors';

function Contact() {
  const { t } = useLanguage();
  const contactTexts = t('contact');

  // Envío nativo a getform.io (POST). Antes, un handler llamaba form.submit() y salteaba la
  // validación del navegador (se podían mandar formularios vacíos); ahora se validan los campos.
  return (
    <section
      id='contact'
      name='contact'
      className='w-full min-h-screen bg-[#18434e] flex justify-center items-center px-4 py-16'
    >
      <form
        method='POST'
        action={REACT_APP_GET_FORM_IO}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-4'>
          <h2 className='text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea]'>
            {contactTexts.title}
          </h2>
          <p className='text-[#a1bdd0] py-4'>{contactTexts.subtitle}</p>
        </div>

        <label htmlFor='contact-name' className='sr-only'>
          {contactTexts.name}
        </label>
        <input
          id='contact-name'
          className={fieldClass}
          type='text'
          name='name'
          autoComplete='name'
          placeholder={contactTexts.name}
          required
        />

        <label htmlFor='contact-email' className='sr-only'>
          {contactTexts.email}
        </label>
        <input
          id='contact-email'
          className={`my-4 ${fieldClass}`}
          type='email'
          name='email'
          autoComplete='email'
          placeholder={contactTexts.email}
          required
        />

        <label htmlFor='contact-message' className='sr-only'>
          {contactTexts.message}
        </label>
        <textarea
          id='contact-message'
          className={fieldClass}
          name='message'
          rows='8'
          placeholder={contactTexts.message}
          required
        ></textarea>

        <button
          type='submit'
          className='text-[#d8ddea] border-2 border-[#d8ddea] rounded-md px-6 py-3 my-8 mx-auto flex items-center font-semibold hover:bg-[#d8ddea] hover:text-[#18434e] transition-colors duration-300'
        >
          {contactTexts.send}
        </button>
      </form>
    </section>
  );
}

export default Contact;
