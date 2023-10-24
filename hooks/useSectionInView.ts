import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionNames } from "@/lib/types";

function useSectionInView(section: SectionNames, threshold = 0.90) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(section);
  }, [inView, timeOfLastClick]);

  return { ref }
}

export default useSectionInView;
