import React from "react";

export default function About() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./Ashish_S_Abraham_Resume.pdf";
        link.download = "Ashish_Abraham_Resume.pdf";
        link.click();
      };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ashish.
            <br className="hidden lg:inline-block" /> Software Engineer/ Tech Enthusiast!
          </h1>
          <p className="mb-8 leading-relaxed">
            Innovative and results-driven, I'm Ashish Sunny Abraham, a Computer Science graduate with a passion for technology and a knack for turning challenges into opportunities. Recently graduated with a Master's in Computer Science from the University of Florida, my journey has been marked by impactful contributions in the tech domain.
            <br/>   
            <br/>
            Currently seeking a challenging role. I am passionate about harnessing AI, Data Science and System Engineering to solve complex problems and drive innovations. I bring a strong foundation in machine learning, software development, and data analysis, coupled with a proactive approach to learning and a proven ability to think critically under pressure. 
            <br/>
            <br/>
            Let's connect to explore how my expertise can contribute to innovative projects and drive success in the software engineering landscape.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Work
            </a>
            <a
             onClick={handleDownload}
             className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
             Download Résumé
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./ashish_pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}