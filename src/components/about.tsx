"use client";
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



export function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1, // 1 means fully in view
    triggerOnce: true, // only animate once
  });
   useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='p-20 h-[80vh] w-[100vw] gap-10 flex flex-col items-start justify-center'>
      <div className='font-special text-2xl text-center'>ABOUT</div>

      <div className="flex flex-row gap-12 justify-between">
        {/* Left Side: Code + Terminal Unified */}
        <motion.div
         ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
         className="w-[40vw] h-[60vh] bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg font-mono overflow-hidden flex flex-col border border-neutral-700">
          
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-2  bg-white dark:bg-[#383737]">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          {/* Code Area */}
          <div className="p-6 text-neutral-800 dark:text-neutral-200 text-lg flex-1">
            <p><span className="text-pink-400">const</span> name = <span className="text-green-400">"Subhajit Mitra"</span>;</p>
            <p><span className="text-pink-400">const</span> degree = <span className="text-green-400">"B.Tech"</span>;</p>
            <p><span className="text-pink-400">const</span> university = <span className="text-green-400">"SRM University"</span>;</p>
            <p><span className="text-pink-400">const</span> gradYear = <span className="text-green-400">2027</span>;</p>
            <p><span className="text-pink-400">const</span> course = <span className="text-green-400">"Computer Sc. Engineering"</span>;</p>
          </div>

          {/* Terminal */}
          <div className=" bg-white dark:bg-black px-6 py-4 text-green-400 text-sm border-t border-neutral-700">
            <p className="mb-1">$ node about.js</p>
            <p>Compiling...</p>
            <p>Build successful</p>
          </div>
        </motion.div>

        {/* Right Side: Info About You */}
       {/* Right Side: Info About You */}
<div className="w-[50vw] h-[60vh] flex flex-col items-start justify-center font-special pl-8 relative">
  <motion.div
   ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
   className=" text-black text-3xl text-justify leading-relaxed pb-5 dark:text-white">
    I am a <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black">passionate</span> computer science student with a deep interest in <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black"> web development</span> and <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black">creative coding</span>. Currently exploring the world of <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black">React</span> and modern frameworks to build <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black">intuitive interfaces</span> that solve <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black">real problems.</span> My journey in <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black"> technology</span> is fueled by curiosity and the desire to create <span className="bg-[#c4e201] bg-opacity-100 px-1 font-medium text-black"> meaningful experiences</span> through code.
  </motion.div>
  
  {/* Straight line at the bottom */}
  <div className="mt-3 w-2/4 h-1 bg-white self-end"></div>
 
</div>
      </div>
    </div>
  );
}