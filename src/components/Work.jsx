import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShopFlow from '../assets/shopflow.webp';
import MariaMartaGalli from '../assets/mariamartagalli.webp';
import ThePetShop from '../assets/thepetshop$thepetcare.webp';

function Work() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const workItems = [
    {
      img: ShopFlow,
      title: 'ShopFlow Ecommerce Demo',
      link: 'https://shopflow-ecommerce-demo.vercel.app/',
      description:
        'JavaScript, ReactJS, NodeJS, Express, PostgreSQL, HTML, CSS, Cloudinary, Firebase, Mercado Pago',
    },
    {
      img: MariaMartaGalli,
      title: 'María Marta Galli - Content Management System',
      link: 'https://mariamartagalli.com.ar/',
      description:
        'JavaScript, ReactJS, Tailwind CSS, TypeScript, NodeJS, Express, MongoDB, JWT, Mercado Pago, Cloudinary, Resend',
    },
    {
      img: ThePetShop,
      title: 'The Pet Shop & The Pet Care - Landing Page',
      link: 'https://thepetshop-and-thepetcare.netlify.app/',
      description: 'HTML, CSS, JavaScript.',
    },
  ];

  return (
    <div name='work' className='w-full h-screen md:h-screen text-[#a1bdd0] bg-[#18434e] pt-40'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea] '>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work:</p>
        </div>

        <div className='w-full mx-auto max-w-[600px] mt-[100px] md:mt-[80px] z-0'>
          {/* Carrusel */}
          <Slider {...settings}>
            {workItems.map((item, index) => (
              <div
                key={index}
                className=' group container rounded-md flex justify-center items-center mx-auto '
              >
                {/* Image container with hover effects */}
                <div className='group relative'>
                  {/* Image */}
                  <img src={item.img} alt='work_images' className='rounded-md' />
                  {/* Hover effects */}
                  <div className='w-full mx-auto max-w-[600px] absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 rounded-md'>
                    <span className='md:text-2xl sm:text-xl text-md font-bold text-[#d8ddea] tracking-wider'>
                      {item.title}
                    </span>
                    <span className='text-sm md:text-sm sm:text-sm text-[#d8ddea] tracking-wider'>
                      {item.description}
                    </span>
                    <div className='pt-8 text-center'>
                      <a href={item.link} target='_blank' rel='noopener noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-sm'>
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Work;
