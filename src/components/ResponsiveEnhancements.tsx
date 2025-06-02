"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ModeToggle from "@/components/ui/darkmode-toggle";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import ButtonCon from "@/components/ui/button-connect";
import Marquee from "react-fast-marquee";
import { BentoGridThirdDemo } from "@/components/BentoGrid";
import { FloatingDockDemo } from "@/components/Dock";
import FooterVector from "../../public/vectorFooter.png"; 

import {
  FaHtml5, FaReact, FaPython, FaJava, FaGithub, FaDocker, FaFigma, FaBrain,
  FaComments, FaTools, FaUsers, FaSyncAlt, FaJsSquare, FaLinux, FaLayerGroup, FaPalette,
} from "react-icons/fa";
import {
  SiMongodb, SiCplusplus, SiTailwindcss, SiNextdotjs,
  SiTypescript, SiGnubash, SiCss3, SiVsco,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });

         const texts = gsap.utils.toArray(".texts").filter(el => el instanceof HTMLElement) as HTMLElement[];
     const photos = gsap.utils.toArray(".photo").filter(el => el instanceof HTMLElement) as HTMLElement[];
     

      photos.forEach((photo, i) => {
        gsap.set(photo, { opacity: i === 0 ? 1 : 0 });
      });

      texts.forEach((textEl, i) => {
        ScrollTrigger.create({
          trigger: textEl,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onToggle: (self) => {
            if (self.isActive) {
              photos.forEach((photo, j) => {
                gsap.to(photo, {
                  opacity: j === i ? 1 : 0,
                  duration: 0.5,
                  overwrite: true,
                });
              });
            }
          },
        });
      });

      ScrollTrigger.create({
        trigger: ".skills",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };

  return (
    <main className=" relative overflow-x-hidden">
      <div ref={bgRef} className="relative h-screen w-full z-0">
        <AuroraBackground className="absolute top-0 left-0 w-full h-full -z-10">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col gap-4 items-center justify-center h-screen"
          >
         

            <div className="relative w-[100vw] max-w-[100vw] h-[515px] flex items-center justify-center p-0 overflow-hidden">
              <div
                className="absolute w-[130vw] h-[80px] -rotate-6 z-0 shadow-lg"
                style={{ top: "228px", backgroundColor: "#c4e201" }}
              >
                <Marquee
                  speed={50}
                  gradient={false}
                  pauseOnHover
                  autoFill
                  className="cursor-pointer text-3xl md:text-5xl h-[80px] flex font-special items-center justify-evenly font-bold italic text-black dark:text-black gap-10"
                >
                  <span className="mx-8">MINIMALIST</span>
                  <span className="mx-8">ENGINEER</span>
                  <span className="mx-8">PROGRAMMER</span>
                  <span className="mx-8">DESIGNER</span>
                  <span className="mx-8">CREATOR</span>
                  <span className="mx-8">INNOVATOR</span>
                </Marquee>
              </div>

              <Image
                src="/profile_img.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-xl z-1 w-[250px] md:w-[400px] h-[250px] md:h-[400px] shadow-md object-cover brightness-75"
              />

              <div className="absolute z-0 mb-100 dark:text-white font-special font-[400] italic text-4xl md:text-9xl text-center px-4">
                <Typewriter
                  words={["Engineer", "Programmer", "Designer", "Prob. Solver"]}
                  loop
                  cursor
                />
              </div>
              <div className="absolute w-[100vw] bottom-[2vh] flex flex-col items-center ">

              <div className=" font-special mt-10 z-10 text-left text-xl md:text-2xl text-black dark:text-white">
                Subhajit Mitra
              </div>

              <div className=" mt-11  z-10">
                <div className="flex justify-center text-center">
                  <ButtonCon />
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>

      <div className="relative z-10 min-h-screen bg-white dark:bg-black pt-20">
        <section className="min-h-screen flex flex-col items-center" id="about">
          <div className="font-special text-4xl pb-2">ABOUT</div>
           <div className='p-20 h-[81vh] w-[100vw] flex flex-col items-center justify-center'>
     

      <div className="absolute flex flex-col gap-12 justify-center items-center">
        {/* Left Side: Code + Terminal Unified */}
        <div className="w-[80vw] h-[80vh] bg-[#1e1e1e] rounded-xl shadow-lg font-mono  overflow-hidden flex flex-col border border-neutral-700">
          
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#2e2e2e]">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          {/* Code Area */}
          <div className="p-6 text-neutral-200 text-lg flex-1">
            <p><span className="text-pink-400">const</span> name = <span className="text-green-400">"Subhajit Mitra"</span>;</p>
            <p><span className="text-pink-400">const</span> degree = <span className="text-green-400">"B.Tech"</span>;</p>
            <p><span className="text-pink-400">const</span> university = <span className="text-green-400">"SRM University"</span>;</p>
            <p><span className="text-pink-400">const</span> gradYear = <span className="text-green-400">2027</span>;</p>
            <p><span className="text-pink-400">const</span> course = <span className="text-green-400">"Computer Sc. Engineering"</span>;</p>
          </div>

          {/* Terminal */}
          <div className="bg-[#0d0d0d] px-6 py-4 h-[13vh] text-green-400 text-sm border-t border-neutral-700">
            <p className="mb-1">$ node about.js</p>
            <p>Compiling...</p>
            <p>Build successful</p>
          </div>
        </div>

        {/* Right Side: Info About You */}

      </div>
    </div>
        </section>
        
        <section className="skills flex flex-col md:flex-row flex-wrap px-[5vw] py-10 gap-10 text-white font-special" id="skills">
  {[
    {
      label: "LANGUAGES",
      skills: [
        [<FaHtml5 />, "HTML5"],
        [<FaJsSquare />, "JavaScript"],
        [<FaPython />, "Python"],
        [<FaJava />, "Java"],
        [<SiCplusplus />, "C++"],
        [<SiTypescript />, "TypeScript"],
        [<SiGnubash />, "C"],
      ],
    },
    {
      label: "FRAMEWORKS",
      skills: [
        [<FaReact />, "React"],
        [<SiNextdotjs />, "Next.js"],
        [<FaJsSquare />, "Express.js"],
        [<SiTailwindcss />, "Tailwind CSS"],
        [<FaJsSquare />, "Node.js"],
        [<FaLayerGroup />, "ShadCN UI"],
        [<FaPalette />, "Aceternity UI"],
      ],
    },
    {
      label: "TOOLS",
      skills: [
        [<FaGithub />, "GitHub"],
        [<FaDocker />, "Docker"],
        [<FaFigma />, "Figma"],
        [<SiVsco />, "VS Code"],
        [<FaTools />, "Postman"],
        [<FaLinux />, "Linux"],
        [<SiMongodb />, "MongoDB"],
      ],
    },
    {
      label: "SOFT SKILLS",
      skills: [
        [<FaBrain />, "Critical Thinking"],
        [<FaComments />, "Public Speaking"],
        [<GiArtificialIntelligence />, "Problem Solving"],
        [<FaUsers />, "Teamwork"],
        [<FaSyncAlt />, "Adaptability"],
      ],
    },
  ].map((section, index) => (
    <div
      key={index}
      className="w-full md:w-[45%] lg:w-[40%] xl:w-[30%] bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-lime-400 text-[7vw] md:text-[3vw] mb-4">{section.label}</h2>
      <div className="flex flex-wrap gap-4">
        {section.skills.map(([Icon, label], i) => (
          <div key={i} className="flex items-center gap-2 text-base md:text-xl">
            <span className="text-white">{Icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>

        {/* Skills Section */}
        
        <section className="min-h-screen flex flex-col items-center justify-center px-4" id="projects">
          <h1 className="text-5xl md:text-9xl font-special text-center mb-10 px-8">PROJECT<span className="text-lime-400">S</span></h1>
          <BentoGridThirdDemo />
        </section>

        <section className="h-screen flex flex-col md:flex-row items-center justify-evenly px-4" id="info">
          <div className="relative w-full md:w-[60vh] h-[40vh] md:h-[60vh] mb-10 md:mb-0">
            <Image
              src={FooterVector}
              alt="Footer Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-white">
            <h1 className="font-special text-4xl md:text-6xl">Let's Connect</h1>
            <FloatingDockDemo />
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-10">© Designed by Subhajit Mitra. All rights reserved</footer>
      </div>
    </main>
  );
}
