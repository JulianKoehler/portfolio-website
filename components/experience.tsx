"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { SectionNames } from "@/lib/types";
import useSectionInView from "@/hooks/useSectionInView";
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView(SectionNames.EXPERIENCE);
  const { theme } = useThemeContext();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>my experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((job, idx) => (
          <React.Fragment key={idx}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgb(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgb(255,255,255, 0.5)",
              }}
              date={job.date}
              icon={job.icon}
              iconStyle={{
                background: theme == "light" ? "white" : "rgb(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}>
              <h3 className="font-semibold capitalize">{job.title}</h3>
              <p className="font-normal !mt-0">{job.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{job.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
