"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { SectionNames } from "@/lib/types";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView(SectionNames.PROJECTS, 0.5)

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28">
      <SectionHeading>my projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
