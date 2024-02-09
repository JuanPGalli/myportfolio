import React from "react";
import JavaScript from "../assets/javascript.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import Redux from "../assets/redux.png";
import PostgreSQL from "../assets/postgresql.png";
//import Wordpress from "../assets/wordpress_icon.png"
import Git from "../assets/git.png"

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#18434e] text-[#a1bdd0] pt-40">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#d8ddea]">
            Skills
          </p>
          <p className="py-4 ">
            These are some of the technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="JavaScript icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={PostgreSQL}
              alt="JavaScript icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Git}
              alt="Git icon"
            />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="JavaScript icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="JavaScript icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={ReactImg}
              alt="JavaScript icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Redux} alt="JavaScript icon" />
            <p className="my-4">Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
