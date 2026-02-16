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
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#111827] to-[#0f172a]"
    >
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="container mx-auto flex px-5 md:px-10 py-12 md:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
            Hi, I'm Ashish.
            <br className="hidden lg:inline-block" /> Software Engineer/ Tech Enthusiast!
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            I’m Ashish Abraham, a Software Engineer with 3.5+ years of experience building scalable, production-grade systems. I hold a Master’s degree in Computer Science from the University of Florida and currently work at Thomson Reuters on the Tax and Accounting professionals team.
            <br/>   
            <br/>
            My work focuses on backend development, APIs, cloud-native services, and CI/CD pipelines, with a strong emphasis on performance, reliability, and clean system design. I’ve collaborated with US-based teams in agile environments to deliver high-impact solutions used in production.
            <br/>
            <br/>
           Alongside core engineering, I actively engage with AI and machine learning through applied projects, coursework, and experimentation, particularly where intelligent systems intersect with backend platforms and data pipelines. I’m interested in Software Engineering roles that blend strong systems engineering with AI-driven problem solving.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 rounded text-lg shadow-lg shadow-teal-500/20">
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-sky-100 bg-sky-500/15 border border-sky-300/30 py-2 px-6 focus:outline-none hover:bg-sky-500/25 hover:text-white rounded text-lg">
              See My Work
            </a>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 hover:text-white rounded text-lg shadow-lg shadow-teal-500/20">
              Download Resume
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
            className="object-cover object-center rounded-xl border border-sky-300/20 shadow-2xl shadow-sky-900/40"
            alt="hero"
            src={profileImage}
          />
        </div>
      </div>
    </section>
  );
}
