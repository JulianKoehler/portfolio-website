"use client";

import { SectionNames } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import { createContext, useContext } from "react";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionProviderProps = { children: React.ReactNode };

interface IActiveSectionContext {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<IActiveSectionContext | null>(null);

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>(SectionNames.HOME);
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //We need to keep track of this to disable the intersection observer temporarily to prevent some weird back and forth bouncing when clicking the nav link.

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) throw new Error("useActiveSectionContext must be used within ActiveSectionProvider");

  return context;
};
