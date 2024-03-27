import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import FadeRight from "@/animation/FadeRight";

export default function TimeTracker(): JSX.Element {
  const [totalTime, setTotalTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2020-01-01T00:00:00");
    const interval = setInterval(() => {
      const currentTime = new Date();
      const elapsedTime = Math.floor(
        (currentTime.getTime() - startDate.getTime()) / 1000,
      ); // Total elapsed seconds
      const years = currentTime.getFullYear() - startDate.getFullYear();
      const months = currentTime.getMonth() - startDate.getMonth() + 12 * years;
      const days = Math.floor(elapsedTime / (3600 * 24));
      const hours = Math.floor((elapsedTime % (3600 * 24)) / 3600);
      const minutes = Math.floor((elapsedTime % 3600) / 60);
      const seconds = elapsedTime % 60;
      setTotalTime({ years, months, days, hours, minutes, seconds });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="text-center">
        <h4 className="mb-6 text-3xl font-semibold sm:text-4xl md:text-5xl xl:text-6xl">
          Duration Engaged in Coding
        </h4>
        <AnimatePresence>
          <FadeRight
            key="time-tracker"
            duration={0.4}
            delay={0.1}
            className="-z-20"
          >
            <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-teal-600 dark:text-teal-300">
              <span className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
                {totalTime.years} years
              </span>
              <span className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
                {totalTime.months} months
              </span>
              <span className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
                {totalTime.days} days
              </span>
              <span className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
                {totalTime.hours} hours
              </span>
              <span className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
                {totalTime.minutes} minutes
              </span>
              <span className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
                {totalTime.seconds} seconds
              </span>
            </div>
          </FadeRight>
        </AnimatePresence>
      </div>
    </section>
  );
}
