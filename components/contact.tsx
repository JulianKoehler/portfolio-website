"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { SectionNames } from "@/lib/types";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import toast from "react-hot-toast"
import submitContactForm from "@/server/actions/submit-contact-form";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView(SectionNames.CONTACT);

  async function onSubmit(formData: FormData) {
    const { isError, message } = await submitContactForm(formData);

    if (isError) {
      toast.error(message);
      return;
    }

    toast.success(message)
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">Contact me directly via LinkedIn, email or preferably through this form.</p>

      <form
        action={onSubmit}
        className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-amber-400 dark:bg-white dark:outline-none dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={100}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 outline-amber-400 dark:bg-white dark:outline-none dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
