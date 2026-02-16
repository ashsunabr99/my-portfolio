import {
  BadgeCheckIcon,
  ChipIcon,
  CodeIcon,
  DatabaseIcon,
  CloudIcon,
  CogIcon,
} from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { tools } from "../data";

export default function Skills() {
  const spotlightSkills = [
    "Full Stack Development",
    "Objective-Oriented Programming",
    "Data Structures & Algorithms",
    "Database Design & Management",
    "AI & Machine Learning"
  ];
  const groupedSections = [
    {
      title: "Core Engineering",
      icon: <CodeIcon className="w-5 h-5" />,
      items: skills.filter((skill) =>
        [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Bootstrap",
          "Java",
          "Python",
          "C#",
          ".NET",
          "Spring Boot",
          "Flask",
          "PyTest",
          "REST APIs",
          "ODATA APIs"
        ].includes(skill)
      ),
      cardTone:
        "from-teal-400/20 to-slate-900/40 border-teal-300/30",
    },
    {
      title: "Data and AI",
      icon: <DatabaseIcon className="w-5 h-5" />,
      items: skills.filter((skill) =>
        [
          "PostgreSQL",
          "MySQL",
          "MS SQL Server",
          "BigQuery",
          "Redis",
          "Scikit-learn",
          "LangChain",
          "TensorFlow",
          "PyTorch",
          "Vector Databases",
          "LLMs",
          "MCP Servers",
          "RAG Models",
          "Prompt Engineering"
        ].includes(skill)
      ),
      cardTone: "from-sky-400/20 to-slate-900/40 border-sky-300/30",
    },
    {
      title: "Cloud and Delivery",
      icon: <CloudIcon className="w-5 h-5" />,
      items: tools.filter((tool) =>
        [
          "AWS S3",
          "AWS ECS",
          "AWS Bedrock",
          "AWS SQS",
          "AWS Lambda",
          "Google Cloud Platform",
          "CI/CD",
          "Docker",
          "Kubernetes"
        ].includes(tool)
      ),
      cardTone:
        "from-blue-400/20 to-slate-900/40 border-blue-300/30",
    },
    {
      title: "Collaboration and Tools",
      icon: <CogIcon className="w-5 h-5" />,
      items: tools.filter((tool) =>
        [
          "GitHub",
          "Jira",
          "Power BI",
          "Tableau",
          "VS Code",
          "Visual Studio",
          "IntelliJ IDEA",
          "Postman",
        ].includes(tool)
      ),
      cardTone:
        "from-blue-400/20 to-slate-900/40 border-blue-300/30",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#111827] to-[#0f172a]"
    >
      <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="container px-5 py-16 mx-auto relative">
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block mb-4 text-teal-300" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>

        <div className="mb-10">
          <h2 className="text-sm uppercase tracking-widest text-sky-300 mb-4 text-center">
            Spotlight Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {spotlightSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-sky-300/30 bg-sky-500/10 text-sky-100 text-sm font-medium shadow-lg shadow-sky-500/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groupedSections.map((section) => (
            <div
              key={section.title}
              className={`rounded-2xl border p-5 bg-gradient-to-br ${section.cardTone} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2 mb-4 text-white">
                {section.icon}
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="bg-slate-950/60 border border-white/10 rounded-lg px-3 py-2 flex items-center transition-transform duration-200 hover:-translate-y-0.5 hover:border-teal-300/40"
                  >
                    <BadgeCheckIcon className="text-teal-300 w-5 h-5 flex-shrink-0 mr-3" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
