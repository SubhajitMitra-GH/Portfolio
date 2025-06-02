import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconBrandBehance,
  IconBrandGithub,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/subhajit-mitra-96941422a/",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/subhajit.gg/",
  },
  {
    title: "X",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/_SubhajitMitra_",
  },
  {
    title: "Mail",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:msubhojit182004@gmail.com",
  },
  {
    title: "Behance",
    icon: (
      <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.behance.net/technicaltimes1",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/SubhajitMitra-GH",
  },
];

  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
