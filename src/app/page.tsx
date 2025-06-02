"use client";

import React, { useEffect, useRef,useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import ButtonCon from "@/components/ui/button-connect";
import Marquee from "react-fast-marquee";
import { About } from "@/components/about";
import { NavbarDemo } from "@/components/navbar";
import FooterVector from "../../public/vectorFooter.png"; 
import ResponsiveEnhancements from "@/components/ResponsiveEnhancements";
import useIsMobile from '@/hooks/useIsMobile';


import {
  FaHtml5,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
  FaDocker,
  FaFigma,
  FaBrain,
  FaComments,
  FaTools,
  FaUsers,
  FaSyncAlt,
  FaJsSquare,
  FaLinux,
  FaLayerGroup,
  FaPalette
} from "react-icons/fa";
import {
  SiMongodb,
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGnubash,

  SiGnubash as SiGsap,
  SiVsco,
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";
import { BentoGridThirdDemo } from "@/components/BentoGrid";
import { FloatingDockDemo } from "@/components/Dock";


gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const bgRef = useRef(null);
   const isMobile = useIsMobile();
  

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

   
    <main>
      
      <NavbarDemo /> 
        
      {!isMobile&&
      
      <div className="relative overflow-x-hidden">
      
 
      <div ref={bgRef} className="relative h-screen w-full z-0" id="#">
        <AuroraBackground className="absolute top-0 left-0 w-full h-full -z-10">
         
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-4 items-center justify-center h-screen"
          >
            {/* <ModeToggle className="absolute top-4 right-4 z-50" /> */}

            <div className="relative w-[100vw] h-[508px] flex items-center justify-center p-0">
              <div
                className="absolute w-[130vw] h-[80px] -rotate-6 z-0 shadow-lg"
                style={{ top: "228px", backgroundColor: "#c4e201" }}
              >
                <Marquee
                  speed={50}
                  gradient={false}
                  pauseOnHover
                  autoFill
                  className="cursor-pointer text-5xl h-[80px] flex font-special items-center justify-evenly font-bold italic text-black dark:text-black gap-10"
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
                className="rounded-xl z-1 w-[400px] h-[400px] shadow-md object-cover brightness-75"
              />

              <div className="absolute z-0 mb-120 dark:text-white font-special font-[900] italic text-9xl">
                <Typewriter
                  words={["Engineer", "Programmer", "Designer", "Problem Solver"]}
                  loop
                  cursor
                />
              </div>

              <div className="absolute font-special mt-10 top-[420px] left-[calc(50%-200px)] z-10 w-[40px] text-left text-xl text-black dark:text-white">
                Subhajit Mitra
              </div>

              <div className="absolute mt-11 top-[420px] left-[calc(50%+62px)] z-10">
                <div className="flex justify-center text-center">
                  <ButtonCon/>
                </div>
              </div>
            </div>
          </motion.div>
          
         
        </AuroraBackground>
      </div>

      <div className="relative z-10 min-h-[100vh] bg-white dark:bg-black pt-20">
        <section className="min-h-[100vh] flex items-center" id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section className="skills flex" id="skills">
         <div className="left w-[50%] pl-[3vw] items-center justify-center">
  <div className="texts gap-15 h-[100vh] w-[100%] flex flex-col text-[#c4e201] font-special justify-center items-start text-[5vw] relative">
  <h1>LANGUAGES</h1>
  <p className="dark:text-white text-black text-[1.3vw] mt-4 w-[90%] text-justify leading-relaxed">
    Languages and core technologies I work with. These are my dices. From scripting with JavaScript and Python to developing robust systems with Java, C++, and C, each language enhances my ability to solve problems, build applications, and create scalable, maintainable code. These foundations help me adapt quickly across tech stacks and projects.
  </p>
  <div className="absolute w-64 h-64 rounded-full bg-lime-500 blur-3xl opacity-20 -z-10 top-1/3 left-1/3"></div>
</div>

<div className="texts h-[100vh] gap-15 flex flex-col text-[#c4e201] font-special items-start justify-center w-[100%] text-[5vw] relative">
  <h1>FRAMEWORKS</h1>
  <p className="dark:text-white text-black text-[1.3vw] mt-4 w-[90%] text-justify leading-relaxed">
    Libraries and tools I use for building modern UIs and APIs. These frameworks—like React, Next.js, and Tailwind—enable me to craft sleek, responsive interfaces and handle routing, state, and styling efficiently. They reduce boilerplate, improve developer experience, and make scalable design systems possible.
  </p>
  <div className="absolute w-64 h-64 rounded-full bg-lime-500 blur-3xl opacity-20 -z-10 top-1/3 left-1/3"></div>
</div>

<div className="texts h-[100vh] gap-15 flex flex-col text-[#c4e201] font-special items-start justify-center w-[100%] text-[5vw] relative">
  <h1>TOOLS</h1>
  <p className="dark:text-white text-black text-[1.3vw] mt-4 w-[90%] text-justify leading-relaxed">
    Development tools and platforms I use to streamline workflows. These include GitHub for version control, Docker for containerized development, Postman for API testing, and VS Code for efficient coding. These tools empower me to work faster, collaborate better, and deploy with confidence.
  </p>
  <div className="absolute w-64 h-64 rounded-full bg-lime-500 blur-3xl opacity-20 -z-10 top-1/3 left-1/3"></div>
</div>

<div className="texts h-[100vh] gap-15 flex flex-col text-[#c4e201] font-special items-start justify-center w-[100%] text-[5vw] relative">
  <h1>SOFT SKILLS</h1>
  <p className="dark:text-white text-black text-[1.3vw] mt-4 w-[90%] text-justify leading-relaxed">
    Personal strengths that support effective collaboration and growth. My soft skills include communication, teamwork, adaptability, and critical thinking. These qualities help me collaborate with diverse teams, handle feedback constructively, and continuously learn in fast-paced environments.
  </p>
  <div className="absolute w-64 h-64 rounded-full bg-lime-500 blur-3xl opacity-20 -z-10 top-1/3 left-1/3"></div>
</div>

</div>


          {/* Right Side */}
          <div className="right w-[50%] h-[100vh] flex flex-col items-center  justify-center">
            <div className="w-[30vw] h-[40rem] relative text-xl font-semibold dark:text-white text-black">
              {/* Cards */}
              {[
                {
                  label: "LANGUAGES",
                  skills: [
                    [<FaHtml5 className="text-white  " />, "HTML5"],
                    [<FaJsSquare className="text-white " />, "JavaScript"],
                    [<FaPython className="text-white" />, "Python"],
                    [<FaJava className="text-white" />, "Java"],
                    [<SiCplusplus className="text-white" />, "C++"],
                    [<SiTypescript className="text-white" />, "TypeScript"],
                                        [<SiGnubash className="text-white" />, "C"],
                  ],
                },
                {
                  label: "FRAMEWORKS",
                  skills: [
                    [<FaReact className="text-white" />, "React"],
                    [<SiNextdotjs className="text-white" />, "Next.js"],
                    [<FaJsSquare className="text-white" />, "Express.js"],
                    [<SiTailwindcss className="text-white" />, "Tailwind CSS"],
                    [<SiGsap className="text-white" />, "GSAP"],
                    [<FaJsSquare className="text-white" />, "Node.js"],
                      [<FaLayerGroup className="text-white" />, "ShadCN UI"], // fallback icon
  [<FaPalette className="text-white" />, "Aceternity UI"]
                  ],
                },
                {
                  label: "TOOLS",
                  skills: [
                    [<FaGithub className="text-white" />, "GitHub"],
                    [<FaDocker className="text-white" />, "Docker"],
                    [<FaFigma className="text-white" />, "Figma"],
                    [<SiVsco className="text-white" />, "VS Code"],
                    [<FaTools className="text-white" />, "Postman"],
                     [<FaLinux className="text-white" />, "Linux"],
  [<SiMongodb className="text-white" />, "MongoDB"],
                  ],
                },
                {
                  label: "SOFT SKILLS",
                  skills: [
                     [<FaBrain className="text-white" />, "Critical Thinking"],
  [<FaComments className="text-white" />, "Public Speaking"],
  [<GiArtificialIntelligence className="text-white" />, "Problem Solving"],
  [<FaUsers className="text-white" />, "Teamwork"],
  [<FaSyncAlt className="text-white" />, "Adaptability"],
                  ],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="photo absolute rounded-4xl w-full h-full flex flex-col justify-center p-8 gap-5"
                  style={glassStyle}
                >
                  {section.skills.map(([Icon, label], i) => (
                    <div key={i} className="flex items-center gap-4 text-3xl">
                      {Icon}
                      {label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="h-[100vh] w-[100vw] flex items-center justify-evenly" id="projects">
          <div className="rotate-270 w-[6rem] flex font-special justify-center"><h1 className="text-[8rem]">PROJECT<span className="text-lime-400">S</span></h1></div>
         
    <BentoGridThirdDemo />
  
       

        </section>
 <section className="h-[100vh] w-[100vw] flex items-center justify-evenly" id="info">
  <div className="relative flex flex-col w-[60vh] h-[60vh]">
    <Image
      src={FooterVector}
      alt="Footer Background"
      layout="fill"
      objectFit="cover"
      quality={100}
      priority
    />
  
  </div>
    <div className="flex flex-col items-center justify-center gap-10 dark:text-white text-black"><h1 className="font-special text-6xl h-[8vh]">Lets Connect</h1>
    <FloatingDockDemo/></div>
</section>

<footer className="text-center">© Designed by Subhajit Mitra. All rights reserved</footer>

      </div>
     </div>}
    
  {isMobile && <ResponsiveEnhancements />}
 

    </main>
  
    
  );
}
