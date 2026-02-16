import { ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";

export default function Navbar() {
  return (
    <header className="bg-slate-950/85 backdrop-blur-md border-b border-sky-300/10 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl tracking-wide hover:text-teal-200 transition-colors">
          Ashish Sunny Abraham
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-sky-300/20 flex flex-wrap items-center text-base justify-center text-gray-300">
        <a href="#about" className="mr-5 hover:text-teal-200 transition-colors">
            About
          </a>
          <a href="#experience" className="mr-5 hover:text-teal-200 transition-colors">
            Journey
          </a>
          <a href="#skills" className="mr-5 hover:text-teal-200 transition-colors">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-teal-200 transition-colors">
            Projects
          </a>
        </nav>
        
        <a
          href="https://www.linkedin.com/in/ashish-s-abraham99/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center bg-sky-500/15 border border-sky-300/30 py-1 px-3 focus:outline-none hover:bg-sky-500/25 rounded text-base mt-4 md:mt-0 text-sky-100 transition-colors">
          LinkedIn
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
