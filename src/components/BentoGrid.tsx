"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {motion} from "motion/react";

export function BentoGridThirdDemo() {
  return (
    
    <BentoGrid className=" w-full max-w-7xl px-4 mx-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[24rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          
          title={item.title}
          description={item.description}
          header={item.header}
          
          className={cn("[&>p:text-lg]  ", item.className)}
          onClick={() => {
      if (item.src) {
        window.open(item.src, "_blank"); 
      }
    }}
          
          
       
         
        />
      )
      )}
    </BentoGrid>
    
  );
}

const StaticImageHeader = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative w-full h-full min-h-[6rem] overflow-hidden rounded-lg group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just like to code a structured website.
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Design
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2721/2721296.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Looking forward for writing efficient code.
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Engineering
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I believe AI should not be feared it must be embraced.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Optimist
        </p>
      </motion.div>
    </motion.div>
  );
};


const items = [
  {
    title: "WriteAI",
    description: (
      <span className="text-sm">
        It will give you information about a topic according your level and type.
      </span>
    ),
    src: "https://subhajitmitra-gh.github.io/TopicAI/",
    header: <StaticImageHeader imageUrl="/WriteAI.png" />,
    className: "md:col-span-1",
  },
  {
    title: "Weather App",
    description: (
      <span className="text-sm">
        It tells you the weather of a place which was searched, with its details.
      </span>
    ),
    src:"https://subhajitmitra-gh.github.io/Weather-web/",
    header: <StaticImageHeader imageUrl="/WeatherApp.png" />,
    className: "md:col-span-1",
  },
  {
    title: "manageAI",
    description: (
      <span className="text-sm">
        It could be used as a task manager and also will tell how you can complete a task.
      </span>
    ),
    src:"https://managerai.onrender.com/",
    header: <StaticImageHeader imageUrl="/manageAI.jpeg" />,
    className: "md:col-span-1",
  },
  {
    title: "Ideology",
    description: (
      <span className="text-sm">
        The opinions that I align myself with and my ideologies.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },
  {
    title: "Pomodoro Timer",
    description: (
      <span className="text-sm">
       It is a  timer which follows pomodoro technique with notification.
      </span>
    ),
    src:"https://autopomodoro.netlify.app/",
    header: <StaticImageHeader imageUrl="/Pomodoro.png" />,
    className: "md:col-span-1",
  },
];
