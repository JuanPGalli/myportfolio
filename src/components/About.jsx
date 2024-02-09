import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#18434e] text-[#a1bdd0] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#d8ddea]">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Hi! I'm Juan, nice to meet you.
            </p>
          </div>
          <div>
            <p>
              {" "}
              {/* I am a junior full-stack web developer with experience in key
              technologies such as JavaScript, ReactJS, CSS, and HTML. My previous
              experience as a customer success specialist in web hosting has
              given me a unique perspective on development work. My focus on
              user experience ensures that I always keep the user's needs in
              mind. I am eager to gain new experiences and continue learning on
              innovative projects in the web development field. */}
              I am a Full Stack Developer and Public Accountant with extensive working experience in the banking industry. As a full-stack developer, my purpose is to build solutions to people's problems and contribute to creating a more fair and democratic world. I specialize in developing applications primarily as a backend developer, but I also have experience in frontend development.
            </p>
            <p>
              My work experience has been primarily in the corporate field, and I am proficient in JavaScript, NodeJS, Express, PostgreSQL & Sequelize, ReactJS & Redux, CSS, HTML, Git, and SCRUM methodology. I am passionate about analyzing code and its impact on social development. I am curious and interested in building and developing solutions to our daily problems, with a focus on human improvement and development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
