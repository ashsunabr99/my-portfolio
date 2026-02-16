import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-300 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] body-font relative overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="container px-5 py-12 mx-auto text-center lg:px-40 relative">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-sky-300" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
My project contributions
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.image}
              className="sm:w-1/2 w-full p-4 project-pop group">
              <div className="flex relative min-h-[320px] rounded-xl overflow-hidden border border-sky-300/20 shadow-lg shadow-slate-950/40 transition duration-300 bg-slate-950/50">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 project-image"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/35 z-10" />
                <div className="project-overlay px-6 py-6 md:px-8 md:py-8 relative z-20 w-full border-4 border-slate-800/80 bg-slate-950/96 opacity-100 md:opacity-0 transition duration-300 flex flex-col justify-end">
                  <h2 className="tracking-widest text-sm title-font font-semibold text-sky-200 mb-1 project-text">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-white mb-3 project-text">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-100 project-text">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
