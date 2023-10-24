import { cn } from "@/utils/combineStyles";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julian | Personal Portfolio",
  description: "Hi! I am Julian, Frontend Developer. Take a look around my portfolio!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="!scroll-smooth">
      <body className={cn(inter.className, "bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-36 overflow-x-hidden")}>
        <div className="bg-[#fbe2e4] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28remm] xl:right-[-15rem] 2xl:right-[-5rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28remm] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
          </ActiveSectionProvider>
          <Footer />
          <Toaster position="bottom-right" />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
