import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let translateY = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    translateY = Math.min(1, scrollY / elContainer.clientHeight) * 20;
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      style={{ translateY: `${translateY}vh` }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text py-2 text-5xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl xl:text-8xl">
            Wahab Sharif
          </h1>
          <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            Full Stack developer
          </span>
          <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
            <span className="text-xl text-teal-600 dark:text-teal-300 sm:text-3xl">
              Hi
            </span>
            , I&apos;m
            <span className="text-teal-600 dark:text-teal-300"> Wahab Sharif</span>
            , Experienced Full Stack Developer proficient in TypeScript, JavaScript, React, Node.js, Next.js, and Three.js. Skilled in Tailwind CSS, SCSS, and collaborative problem-solving.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
