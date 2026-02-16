import React from "react";

export default function About() {
    const profileImage = `${process.env.PUBLIC_URL}/ashish_pic.jpg`;
    const resumePath = `${process.env.PUBLIC_URL}/AshishSunny_Abraham_Resume.pdf`;
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resumePath;
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
            Innovative and results-driven, I’m Ashish Sunny Abraham, a Software Engineer with a passion for building scalable systems and solving complex technical challenges. With a Master’s in Computer Science from the University of Florida, I have honed my expertise in software development, AI, data science, and system engineering.
            <br/>   
            <br/>
            Currently, I’m working at Thomson Reuters as part of the Tax and Accounting technology team, where I contribute to building high-performance applications and optimizing infrastructure. My experience spans machine learning, distributed systems, and data-driven solutions, and I thrive in fast-paced environments that demand critical thinking and innovation. 
            <br/>
            <br/>
            Let’s connect to explore opportunities where I can leverage my skills to drive impactful solutions in the ever-evolving tech landscape.
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
            <button
              type="button"
              onClick={handleDownload}
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
              Download Resume
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profileImage}
          />
        </div>
      </div>
    </section>
  );
}
