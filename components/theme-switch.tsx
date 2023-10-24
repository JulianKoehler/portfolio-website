"use client";

import { useThemeContext } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center  bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
