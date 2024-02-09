import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import {useTypingText} from "../hooks/typingEffect"

const Home = () => {

  const { word } = useTypingText(
    ["I'm a Full Stack Developer"],
    200,
    5
  );

  return (
    <div name="home" className="w-full h-screen bg-[#18434e]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#d8ddea]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#78949f]">
          Juan Pablo Galli
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a1bdd0]">
          {word}
        </h2>
        <p className="text-[#a1bdd0] py-4 max-w-[700px]">
          I'm a junior full-stack web developer skilled in JavaScript, NodeJS, ReactJS,
          CSS, and HTML. I'm an enthusiastic and dedicated developer ideal for
          any innovative web development project.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#d8ddea] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#78949f] hover:border-[#78949f]">
              View work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
