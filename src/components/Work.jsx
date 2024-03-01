import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Videogames from "../assets/videogames.png";
// import Promanitas from "../assets/promanitas.jpg";
// import Dogs from "../assets/dogs.jpg";
// import Nomadeando from "../assets/nomadeando.jpg";
// import Oddi from "../assets/oddi.jpg";
import Drivers from "../assets/drivers.png";
import HelpCommunity from "../assets/helpcommunity.png";

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
    /* {
      img: Nomadeando,
      title: "Nomadeando",
      link: "https://nomadeando.org/",
      description: "WordPress Blog",
    },
    {
      img: Dogs,
      title: "Dogs API",
      link: "https://individual-project-dogs-indol.vercel.app/",
      description:
        "JavaScript, NodeJS, Express, PostgreSQL, HTML, CSS, ReactJS "
    },
    {
      img: Videogames,
      title: "Videogames API",
      link: "https://individual-project-video-games.vercel.app/",
      description:
        "JavaScript, NodeJS, Express, PostgreSQL, HTML, CSS, ReactJS ",
    },
    {
      img: Promanitas,
      title: "Promanitas job market place",
      link: "",
      description:
        "JavaScript, NodeJS, Express, PostgreSQL, React JS, MUI, AuthO, Cloudinary",
    },
    {
      img: Oddi,
      title: "ODDI Website",
      link: "https://oddi.es/",
      description: "ReactJS, Tailwind CSS",
    }, */
    {
      img: Drivers,
      title: "Drivers API",
      link: "https://pi-drivers-seven.vercel.app/",
      description: "JavaScript, NodeJS, Express, PostgreSQL, HTML, CSS, ReactJS ",
    },
    {
      img: HelpCommunity,
      title: "HelpCommunity",
      link: "https://help-community.vercel.app/",
      description: "JavaScript, NodeJS, Express, PostgreSQL, ReactJS, Firebase, Cloudinary",
    },
  ];

  return (
    <div
      name="work"
      className="w-full h-screen md:h-screen text-[#a1bdd0] bg-[#18434e] pt-40"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea] ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work:</p>
        </div>

        <div className="w-full mx-auto max-w-[600px] mt-[100px] md:mt-[80px] z-0">
          {/* Carrusel */}
          <Slider {...settings}>
            {workItems.map((item, index) => (
              <div
                key={index}
                className=" group container rounded-md flex justify-center items-center mx-auto "
              >
                {/* Image container with hover effects */}
                <div className="group relative">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt="work_images"
                    className="rounded-md"
                  />
                  {/* Hover effects */}
                  <div className="w-full mx-auto max-w-[600px] absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 rounded-md">
                    <span className="md:text-2xl sm:text-xl text-md font-bold text-[#d8ddea] tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-sm md:text-sm sm:text-sm text-[#d8ddea] tracking-wider">
                      {item.description}
                    </span>
                    <div className="pt-8 text-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-sm">
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

  //(
  //   <div
  //     name="work"
  //     className="w-full md:h-screen text-[#a1bdd0] bg-[#18434e] pt-80"
  //   >
  //     <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
  //       <div className="pb-8">
  //         <p className="text-4xl font-bold inline border-b-4 text-[#a1bdd0] border-[#d8ddea] ">
  //           Work
  //         </p>
  //         <p className="py-6">Check out some of my recent work:</p>
  //       </div>

  //       {/* Container */}
  //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
  //         {/* Grid Item nomadeando*/}
  //         <div
  //           style={{ backgroundImage: `url(${Nomadeando})` }}
  //           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
  //         >
  //           {/* hover effects */}
  //           <div className="opacity-0 group-hover:opacity-100">
  //             <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
  //               WordPress Blog
  //             </span>
  //             <div className="pt-8 text-center">
  //               <a
  //                 href="https://nomadeando.org/"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                   Demo
  //                 </button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Grid Item dogs*/}
  //         <div
  //           style={{ backgroundImage: `url(${Dogs})` }}
  //           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
  //         >
  //           {/* hover effects */}
  //           <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
  //             <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
  //               Single page aplication <br /> <br /> ReactJS, JavaScript,
  //               NodeJS, Express, PostgreSQL, HTML, CSS
  //             </span>
  //             <div className="pt-8 text-center">
  //               <a
  //                 href="https://github.com/gabydesi/Individual_Project_Dogs"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                   Code
  //                 </button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Grid Item videogames*/}
  //         <div
  //           style={{ backgroundImage: `url(${Videogames})` }}
  //           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
  //         >
  //           {/* hover effects */}
  //           <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
  //             <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
  //               Single page aplication <br /> <br /> ReactJS, JavaScript,
  //               NodeJS, Express, PostgreSQL, HTML, CSS
  //             </span>
  //             <div className="pt-8 text-center">
  //               <a
  //                 href="https://github.com/gabydesi/Individual_Project_VideoGames"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                   Code
  //                 </button>
  //               </a>

  //               <a
  //                 href="https://individual-project-video-games.vercel.app/"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                   Demo
  //                 </button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Grid Item promanitas*/}
  //         <div
  //           style={{ backgroundImage: `url(${Promanitas})` }}
  //           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
  //         >
  //           {/* hover effects */}
  //           <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
  //             <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
  //               Job market place <br />
  //               <br /> React JS, JavaScript, NodeJS, Express, PostgreSQL, MUI,
  //               AuthO, Cloudinary
  //             </span>
  //             <div className="pt-8 text-center">
  //               <a
  //                 href="https://github.com/ProManitas"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                   Code
  //                 </button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Grid Item ODDI*/}
  //         <div
  //           style={{ backgroundImage: `url(${Oddi})` }}
  //           className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
  //         >
  //           {/* hover effects */}
  //           <div className="opacity-0 group-hover:opacity-100 py-1 px-4">
  //             <span className="text 2xl font-bold text-[#d8ddea] tracking-wider">
  //               Website <br />
  //               <br /> ReactJS, Tailwind CSS
  //             </span>
  //             <div className="pt-8 text-center">
  //               <a
  //                 href="https://oddi.es/"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <a
  //                   href="https://github.com/Dentmedia-oddi/client_oddi"
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                     Code
  //                   </button>
  //                 </a>
  //                 <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#d8ddea] text-[#18434e] font-bold text-lg">
  //                   Demo
  //                 </button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Work;
