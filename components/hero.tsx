"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/Bewerbungsfoto.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { SectionNames } from "@/lib/types";
import useSectionInView from "@/hooks/useSectionInView";
import useClickIntoSectionView from "@/hooks/useClickIntoSectionView";

export default function Hero() {
  const { ref } = useSectionInView(SectionNames.HOME, 0.5);
  const { onSectionChange } = useClickIntoSectionView();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
            <Image
              src={heroImage}
              alt="Julian Köhler"
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              quality="95"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-10 left-0 text-4xl">
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5]">
        <span className="font-bold">Hey there, I&apos;m Julian.</span>
        <br />
        <span className="font-bold text-4xl">Frontend Developer.</span>
        <br />I enjoy building <span className="italic">web applications & websites</span>.<br /> My focus is <span className="underline">React</span>{" "}
        <BiLogoReact className="inline text-3xl" />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-col sm:flex-row gap-2 items-center justify-center px-4 text-lg font-medium">
        <button className="outline-none focus:scale-110 group">
          <Link
            href="#contact"
            onClick={onSectionChange(SectionNames.CONTACT)}
            className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </button>
        <button className="outline-none focus:scale-110 group">
          <a
            href="/CV.pdf"
            download
            className="bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full borderBlack focus:scale-110 hover:scale-110 active:scale-105 transition">
            Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
          </a>
        </button>
        <button className="outline-none focus:scale-110 group">
          <a
            href="https://www.linkedin.com/in/julian-k%C3%B6hler-b65964160/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-white/10 text-gray-700 dark:text-white/60 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full borderBlack hover:scale-110 active:scale-105 transition">
            <BsLinkedin />
          </a>
        </button>
        <button className="outline-none focus:scale-110 group">
          <a
            href="https://github.com/JulianKoehler"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-white/10 text-gray-700 dark:text-white/60 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.25rem] borderBlack hover:scale-110 active:scale-105 transition">
            <BsGithub />
          </a>
        </button>
      </motion.div>
    </section>
  );
}
