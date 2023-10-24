import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

// Very interesting syntax. Like this I can type every single object with the exact same string values by typing number as array index.
type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, links, tags, imageUrl }: ProjectProps) {
  const projectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  
  return (
    <motion.div
      ref={projectRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group last:mb-0 mb-3 sm:mb-8">
      <section className="rounded-xl sm:group-even:pl-8 bg-gray-100 dark:bg-white/10 max-w-[42rem] hover:bg-gray-200 dark:hover:bg-white/20  transition border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] dark:text-white">
        <div className="sm:group-even:ml-[18rem] pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <div className="mt-3 flex gap-2">
            {links.map(link => (
              <button>
                <a className="bg-white dark:bg-white/40 dark:text-gray-950 font-bold text-sm text-gray-800 hover:text-gray-950 py-2 px-4 flex items-center gap-2 rounded-full borderBlack hover:scale-110 active:scale-105 transition" href={link.href} target="_blank">{link.label}</a>
              </button>
            ))}
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="absolute hidden sm:block group-hover:-translate-x-3 group-hover:scale-105 transition group-hover:translate-y-3 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-even:group-hover:-translate-y-3 group-hover:-rotate-2 top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40"
          src={imageUrl}
          alt={"Project: " + title}
        />
      </section>
    </motion.div>
  );
}
