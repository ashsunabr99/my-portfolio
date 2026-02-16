import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AcademicCapIcon, BriefcaseIcon, FlagIcon } from "@heroicons/react/solid";
import timelineElements from "../timelineElements";

function parseRangeStart(range) {
  const [start] = range.split("-");
  const [month, year] = start.trim().split("/");
  return new Date(Number(year), Number(month) - 1, 1).getTime();
}

export default function Experience() {
  const sortedTimeline = [...timelineElements].sort(
    (a, b) => parseRangeStart(a.date) - parseRangeStart(b.date)
  );

  return (
    <section
      id="experience"
      className="text-gray-300 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1220] body-font relative overflow-hidden"
    >
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="container px-5 py-12 mx-auto text-center lg:px-40 relative">
        <div className="flex flex-col w-full mb-20">
          <FlagIcon className="mx-auto inline-block w-10 mb-4 text-sky-300" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-white">
            My Journey
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Education and Professional Experience
          </p>
        </div>

        <div className="experience w-full p-4">
          <VerticalTimeline lineColor="rgba(125, 211, 252, 0.35)">
            {sortedTimeline.map((element) => {
              const isSchool = element.icon === "school";
              const accentColor = isSchool ? "rgba(56, 189, 248, 1)" : "rgba(20, 184, 166, 1)";
              return (
              <VerticalTimelineElement
                  key={element.id}
                  className={`vertical-timeline-element--${isSchool ? "education" : "experience"} timeline-pop`}
                  date={<span className={`${isSchool ? "text-left" : "text-right"} block text-sky-100 font-medium`}>{element.date}</span>}
                  position={isSchool ? "left" : "right"}
                  icon={
                    isSchool ? (
                      <AcademicCapIcon className="text-white w-6 h-6" />
                    ) : (
                      <BriefcaseIcon className="text-white w-6 h-6" />
                    )
                  }
                  iconStyle={{ background: accentColor, color: "#fff" }}
                  contentStyle={{
                    backgroundColor: "rgba(2, 6, 23, 0.85)",
                    border: `1px solid ${accentColor}`,
                    borderRadius: "12px",
                    boxShadow: "0 14px 35px rgba(2, 6, 23, 0.55)",
                    transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  }}
                  contentArrowStyle={{ borderRight: `7px solid ${accentColor}` }}
                >
                  <h3 className="text-lg font-semibold text-white">{element.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-sky-200 mt-1 mb-2">{element.location}</p>
                  <p className="text-sm text-gray-300">{element.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
