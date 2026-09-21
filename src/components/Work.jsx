import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../context/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShopFlow from '../assets/shopflow.webp';
import MariaMartaGalli from '../assets/mariamartagalli.webp';
import ThePetShop from '../assets/thepetshop&thepetcare.webp';

function Work() {
  const { t } = useLanguage();
  const workTexts = t('work');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const workItems = [
    {
      img: ShopFlow,
      title: 'ShopFlow Ecommerce',
      link: 'https://shopflow-ecommerce-demo.vercel.app/',
      description: workTexts.projects?.shopflow,
      tech: 'React, Node, Express, PostgreSQL, Mercado Pago',
    },
    {
      img: MariaMartaGalli,
      title: 'María Marta Galli - CMS',
      link: 'https://mariamartagalli.com.ar',
      description: workTexts.projects?.cms,
      tech: 'TypeScript, React, Node, MongoDB, JWT, Mercado Pago',
    },
    {
      img: ThePetShop,
      title: 'The Pet Shop - Landing Page',
      link: 'https://thepetshop-and-thepetcare.netlify.app/',
      description: workTexts.projects?.landing,
      tech: 'HTML5, CSS3, JavaScript Vanilla',
    },
  ];

  return (
    <section
      name='work'
      className='w-full min-h-screen text-[#a1bdd0] bg-[#18434e] pt-32 flex items-center'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <header className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea]'>
            {workTexts.title}
          </h2>
          <p className='py-6 text-lg'>{workTexts.subtitle}</p>
        </header>

        <div className='w-full mx-auto max-w-[650px] z-0'>
          <Slider {...settings}>
            {workItems.map((item, index) => (
              <article key={index} className='p-2 outline-none'>
                <div className='group relative overflow-hidden rounded-lg shadow-xl bg-[#11333c]'>
                  <img
                    src={item.img}
                    alt={`${item.title} web development project blueprint screenshot`}
                    className='w-full h-auto object-cover transform duration-500 group-hover:scale-105'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 flex flex-col items-center justify-center bg-[#18434e]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center'>
                    <h3 className='text-2xl font-bold text-[#d8ddea] mb-2'>{item.title}</h3>
                    <p className='text-sm text-[#a1bdd0] font-medium mb-3'>{item.description}</p>
                    <span className='text-xs text-[#d8ddea] bg-[#11333c] px-3 py-1 rounded-full font-mono mb-6'>
                      {item.tech}
                    </span>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block'
                    >
                      <button className='rounded-lg px-6 py-2.5 bg-[#d8ddea] text-[#18434e] font-bold text-sm hover:bg-white transition-colors duration-200 shadow-md'>
                        {workTexts.demoBtn}
                      </button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Work;
