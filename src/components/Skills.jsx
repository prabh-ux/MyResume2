import React, { useState } from "react";
import { easeIn, motion } from 'framer-motion';
const tech = [
  { name: "React", pct: 95 },
  { name: "Node.js", pct: 92 },
  { name: "MongoDB", pct: 90 },
  { name: "Express.js", pct: 89 },
  { name: "Tailwind CSS", pct: 93 },
  { name: "REST APIs", pct: 91 },
  { name: "JWT Auth", pct: 88 },
  { name: "Redux / Context", pct: 87 },
  { name: "Git / GitHub", pct: 85 },
  { name: "Figma (UI/UX)", pct: 90 },
];

const tools = [
  "React",
  "Tailwind CSS",
  "Responsive Design",
  "CSS Animations & Transitions",
  "Redux / Context API",
  "State Management",
  "Node.js",
  "Express.js",
  "MongoDB / Mongoose",
  "RESTful APIs",
  "JWT Authentication",
  "File Handling / Uploads",
  "Cloud Storage",
  "Component Architecture",
  "Performance Optimization",
  "Image Editing Logic",
  "Custom Filters / Effects",
  "Canvas Manipulation",
  "Figma / UI Designing",
  "Wireframing & Prototyping",
  "Postman",
  "Agile Workflow",
  "Git / GitHub",
  "CI/CD Basics",
  "CRUD Operations",
];



export default function Skills() {
  const [isInView, setIsInView] = useState(false);
  return (
    <section id="skills" className="py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
        Skills & Tech
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Core */}
        <div
          className="rounded-2xl p-6 sm:p-8 shadow-lg
                     bg-white/5  backdrop-blur-sm border border-white/10"
        >
          <h3 className="font-semibold text-lg mb-4">Core MERN & Web</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            I build full-stack apps with focus on clean UI, API performance and
            scalable MongoDB schemas.
          </p>

          <div className="space-y-5 bg-">
            {tech.map((t) => (
              <div key={t.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm sm:text-base">
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-400">{t.pct}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-tealsoft to-indigo-500 transition-all duration-700"
                    initial={{ width: 0 }}
                    animate={isInView?{ width: `${t.pct}%` }:{ width: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onViewportEnter={()=>setIsInView(true)}
                    onViewportLeave={()=>setIsInView(false)}
                    viewport={{amount:0.2}}


                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div
          className="rounded-2xl p-6 sm:p-8 shadow-lg
                     bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <h3 className="font-semibold text-lg mb-4">Tools & Practices</h3>

          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-200">
            {tools.map((x) => (
              <li
                key={x}
                className="px-3 py-2 flex items-center rounded-md cursor-default bg-gray-800/40 hover:bg-gray-800/60 transition"
              >
                {x}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h4 className="font-medium mb-2 text-sm sm:text-base">
              Want a breakdown?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Explore the architecture & decisions behind my projects on my{" "}
              <a
                className="font-bold text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/prabh-ux"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
