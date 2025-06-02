"use client";

import { useEffect, useRef } from "react";
import {
  FaHtml5, FaReact, FaPython, FaJava, FaGithub, FaDocker, FaFigma,
  FaBrain, FaComments, FaTools, FaJsSquare
} from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript,
  SiMongodb, SiExpress, SiVercel
} from "react-icons/si";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillSections = [
  {
    title: "Technical Skills",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaJsSquare /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "REST API", icon: <FaTools /> },
      { name: "Gemini API", icon: <FaBrain /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Machine Learning", icon: <FaBrain /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGithub /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaTools /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <FaBrain /> },
      { name: "Communication", icon: <FaComments /> },
      { name: "Creativity", icon: <FaTools /> },
      { name: "Collaboration", icon: <FaComments /> },
      { name: "Time Management", icon: <FaTools /> },
    ],
  },
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".skill-card") as HTMLElement[];

    cards.forEach((card, i) => {
      gsap.set(card, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${i * 100}vh top`,
          end: `${(i + 1) * 100}vh top`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(card, { opacity: 1, duration: 0.5 })
        .to(card, { opacity: 0, duration: 0.5 }, "+=2.5");
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white dark:bg-black">
      {skillSections.map((section, index) => (
        <div
          key={index}
          className="skill-card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6 dark:text-white">{section.title}</h2>
          <ul className="grid grid-cols-2 gap-4 text-lg text-black dark:text-white">
            {section.skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-3 justify-start">
                <span className="text-xl">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
