import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kanbanImg from "@/public/kanban.png";
import audiophileImg from "@/public/audiophile.png";
import entertainifyImg from "@/public/entertainify.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Digital Cuisine, Hannover",
    description: "Developing frontend solutions for differenct clients with React & Typescript and MS PowerApps",
    icon: React.createElement(FaReact),
    date: "since 07/2023",
  },
  {
    title: "Learning web development self taught",
    location: "Hannover",
    description: "I dedicted my entire free time 10-20 hours a day to make my dream of becoming a software developer come true",
    icon: React.createElement(LuGraduationCap),
    date: "06/2022 - 05/2023",
  },
  {
    title: "Business Administration",
    location: "Clarios, Hannover",
    description:
      "Before I became a developer I was working in the field of economics in different areas like procurement, sales and supply chain management. Please refer to my CV if you are interested in the details.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2017 - 06/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Kanban Board",
    description: "A fully fleshed task management web app with authentication. Demo Credentials available in the Readme",
    links: [
      {
        label: "Code",
        href: "https://github.com/JulianKoehler/Kanban-Board",
      },
      {
        label: "Live Version",
        href: "https://kanban-board-jet.vercel.app"
      },
    ],
    tags: ["React", "Next.js", "Typescript", "Firebase", "Tailwind", "Redux"],
    imageUrl: kanbanImg,
  },
  {
    title: "Audiophile",
    description: "Online shop with some dummy data. Offers cart and checkout functionality.",
    links: [
      {
        label: "Code",
        href: "https://github.com/JulianKoehler/audiophile",
      },
      {
        label: "Live Version",
        href: "https://audiophile-now.netlify.app/"
      },
    ],
    tags: ["React", "TypeScript", "Redux", "Chakra UI"],
    imageUrl: audiophileImg,
  },
  {
    title: "Entertainify",
    description: "Possible UI solution for a entertainment streaming service. ",
    links: [
      {
        label: "Code",
        href: "https://github.com/JulianKoehler/Entertainify",
      },
      {
        label: "Live Version",
        href: "https://entertainify.netlify.app/"
      },
    ],
    tags: ["React", "Typescript", "Firebase", "Styled Components"],
    imageUrl: entertainifyImg,
  },
] as const;

export const skillsData = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Framer Motion", "Redux", "Python", "GraphQL", "RESTful", "Git"] as const;
