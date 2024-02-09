import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Videogames from "../assets/videogames.png";
import Promanitas from "../assets/promanitas.jpg";
import Dogs from "../assets/dogs.jpg";
import Nomadeando from "../assets/nomadeando.jpg";
import Oddi from "../assets/oddi.jpg";

function WorkCarousel() {
  const slides = [
    { url: Nomadeando },
    { url: Dogs },
    { url: Videogames },
    { url: Promanitas },
    { url: Oddi },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //dots to go to slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1000px] h-[780px] py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`, // image
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left arrow */}

      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
       
      >
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>

      {/* Right arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
        
      >
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>

      {/* Dots */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkCarousel;
