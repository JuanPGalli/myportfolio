import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#18434e] text-[#a1bdd0] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#d8ddea]'>About me</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>
              Hi! I'm Juan. I turn your ideas into reality and boost your digital presence to grow
              your business.
            </p>
          </div>
          <div>
            <p className='mb-4'>
              I am a Full Stack Developer and Public Accountant with extensive experience in the
              banking industry. I combine technical expertise with business intelligence to craft
              everything from high-converting landing pages to secure E-commerce platforms and
              custom Content Management Systems (CMS).
            </p>
            <p>
              My stack includes JavaScript, TypeScript, Node.js, Express, React, Tailwind CSS,
              PostgreSQL, and MongoDB. I focus on integrating payment gateways, optimizing database
              operations, and delivering functional solutions that help your company thrive. Let's
              work together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
