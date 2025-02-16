import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AcademicCapIcon, BriefcaseIcon, FlagIcon } from "@heroicons/react/solid";
import timelineElements from "./timelineElements";

export default function Experience() {
  // 1️⃣ Ensure all dates are parsed correctly for sorting
  const sortedTimeline = [...timelineElements].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* Section Title with Icon */}
        <div className="flex flex-col w-full mb-20">
          <FlagIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Journey
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Education and Professional Experience
          </p>
        </div>

        {/* Timeline Section */}
        <div className="experience w-full p-4">
          <VerticalTimeline lineColor="#FFF">
            {sortedTimeline.map((element, index) => (
              <VerticalTimelineElement
              key={element.id}
              className={`vertical-timeline-element--${element.icon === "school" ? "education" : "experience"}`}
              date={<span className={element.icon === "school" ? "text-left block" : "text-right block"}>{element.date}</span>}
              position={element.icon === "school" ? "left" : "right"} // Left for Education, Right for Experience
              icon={
                element.icon === "school" ? (
                  <AcademicCapIcon className="text-white w-6 h-6" />
                ) : (
                  <BriefcaseIcon className="text-white w-6 h-6" />
                )
              }
              iconStyle={{ background: "rgba(16, 185, 129, var(--tw-bg-opacity))", color: "#fff" }}
              contentStyle={{backgroundColor: "rgb(31 41 55)", // Equivalent to bg-gray-800
                alignItems: "center",
                borderRadius: "8px",}}
              contentArrowStyle={{ borderRight: "7px solid rgba(16, 185, 129, var(--tw-bg-opacity))" }}
            >
              <h3 className="text-lg font-semibold">{element.title}</h3>
              <p className="text-sm text-gray-300">{element.description}</p>
            </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}