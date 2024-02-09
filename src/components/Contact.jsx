import React, { useRef } from 'react';

const { REACT_APP_GET_FORM_IO } = process.env;

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current.reset();
    }, 500);
    formRef.current.submit();
  };

  return (
    <div name='contact' className='w-full md:h-screen bg-[#18434e] flex justify-center items-center p-4 pt-40 '>
      {/* I used getform.io to send emails from my contact form */}
      <form
        ref={formRef}
        method="POST"
        action={REACT_APP_GET_FORM_IO}
        className='flex flex-col max-w-[600px] w-full pt-20'
        onSubmit={handleSubmit}
      >
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea]'>Contact</p>
          <p className='text-[#a1bdd0] py-4'>Submit the form</p>
        </div>
        <input className='bg-[#d8ddea] p-2' type='text' placeholder='Name' name='name'></input>
        <input className='my-4 p-2 bg-[#d8ddea]' type='email' placeholder='Email' name='email' ></input>
        <textarea className='bg-[#d8ddea] p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button className="text-[#d8ddea] group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#78949f] hover:border-[#78949f]">Send message</button>
      </form>
    </div>
  );
}

export default Contact;