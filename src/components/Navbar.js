import { ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";

export default function Navbar() {
  // const handleClick = () => {
  //   //window.open("www.linkedin.com/in/ashish-s-abraham99");
  //   <Link to={{ pathname: "https://herewecode.io/" }} target="_blank"> Click to open HereWeCode (new tab)</Link>
  // };
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
          Ashish Sunny Abraham
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            Journey
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
        </nav>
        
        <a
          href="https://www.linkedin.com/in/ashish-s-abraham99/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          LinkedIn
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}