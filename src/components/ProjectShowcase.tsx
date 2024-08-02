import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRight } from "@/components/Icons";
import ProjectShowcaseList, {
  ProjectShowcaseListProps,
} from "@/components/ProjectShowcaseList";

const generateImageData = (proj: ProjectShowcaseListProps[]) => {
  return proj.map((p) => p.image);
};

type TProjectShowcase = {
  projects: ProjectShowcaseListProps[];
};

export default function ProjectShowcase(props: TProjectShowcase) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  const handleAnimate = (index: number) => {
    if (index === currentImage) return;
    setCurrentImage(index);
  };

  return (
    <section className="px-6 py-32 overflow-hidden sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative top-0 right-0 hidden lg:block">
          <AnimatePresence>
            <motion.div
              key={props.projects[currentImage].title}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "55%",
                y: "50%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-0 right-0 -z-50"
            >
              <Image
                src={images[currentImage].LIGHT}
                unoptimized
                width={100}
                height={100}
                className="w-1/2 h-auto border rounded-lg shadow-lg border-zinc-300 dark:hidden dark:border-teal-400/50"
                alt={`project ${currentImage}`}
              />
              {images[currentImage].DARK !== undefined && (
                <Image
                  src={images[currentImage].DARK!}
                  unoptimized
                  width={100}
                  height={100}
                  className="hidden w-1/2 h-auto border rounded-lg shadow-lg border-zinc-300 dark:inline-block dark:border-teal-400/20 dark:shadow-lg dark:shadow-emerald-400/5"
                  alt={`project ${currentImage}`}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <h2 className="text-xl font-semibold sm:text-3xl">My projects</h2>
        <div className="flex-col hidden gap-6 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:flex">
          {props.projects.map((proj, index) => (
            <ProjectShowcaseList
              activeProject={currentImage}
              toggleList={handleAnimate}
              data={proj}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:hidden">
          {props.projects.map((proj) => (
            <Link
              key={proj.title}
              href={proj.href}
              className="flex flex-col gap-1"
            >
              <div className="flex gap-2">
                <span className="text-3xl font-semibold text-teal-600 transition-colors duration-300 dark:text-teal-400 sm:text-4xl md:text-5xl lg:hidden">
                  {proj.index + 1}.
                </span>
                <span
                  key={proj.title}
                  className="text-3xl font-semibold text-teal-600 underline transition-colors duration-300 -underline-offset-1 dark:text-teal-400 sm:text-4xl md:text-5xl lg:hidden"
                >
                  {proj.title}
                </span>
              </div>
              <p className="flex flex-wrap max-w-xl gap-2 text-base font-semibold text-zinc-800 dark:text-zinc-100 sm:text-lg">
                {proj.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="relative flex items-center gap-4 text-base font-semibold group max-w-max sm:text-lg md:text-xl"
        >
          <div className="relative max-w-max">
            <span>See more projects</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-teal-600 transition-[width] duration-300 group-hover:w-full dark:bg-teal-400"></span>
          </div>
          <div className="w-8 h-8">
            <ArrowTopRight className="rotate-45 text-teal-600 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1] dark:text-teal-400" />
          </div>
        </Link>
      </div>
    </section>
  );
}
