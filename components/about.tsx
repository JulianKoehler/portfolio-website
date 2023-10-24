"use client";

import SectionHeading from "@/components/section-heading";
import useSectionInView from "@/hooks/useSectionInView";
import { SectionNames } from "@/lib/types";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView(SectionNames.ABOUT)

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Business Administration</span>, I decided to pursue my passion for programming. I worked out a roadmap that would fit to my goals 
        and started my self taught journey in <span className="font-medium">frontend web development</span>. <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js and TailwindCSS</span>. I am also familiar with TypeScript and some Python. I am always looking to learn new technologies. I
        am currently looking for a <span className="font-medium">new challenge</span> as a frontend engineer.
      </p>

      <p>
        <span className="italic">When {"I'm"} not coding</span>, I enjoy playing video games, watching series or spending time with friends & family. I also enjoy{" "}
        <span className="font-medium">working out in the gym</span> to strenghten my physics and stay healthy. 
      </p>
    </motion.section>
  );
}
