import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

export default function useClickIntoSectionView() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  function onSectionChange(sectionName: (typeof links)[number]["name"]) {
    return () => {
      setActiveSection(sectionName);
      setTimeOfLastClick(Date.now());
    };
  }

  return { activeSection, onSectionChange };
}
