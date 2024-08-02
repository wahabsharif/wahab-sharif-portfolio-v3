import { JSX } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import {
  BACKEND_PILL,
  DATABASE_ORM_PILL,
  LANGUAGES,
  LIBRARY_FRAMEWORK,
  TOOLS_TECHNOLOGIES,
  OTHER_TROLLINGS,
  HEADLESS_CMS,
} from "@/data/skills";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

const FadeRight = dynamic(() => import("@/animation/FadeRight"), { ssr: true });

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  return (
    <div className="flex items-center gap-2 px-4 py-3 overflow-hidden text-sm bg-white border rounded-lg shadow-sm w-max border-tera-500/20 dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  return (
    <section className="px-6 py-32 overflow-hidden sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold sm:text-4xl">Skills</h2>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">Languages</span>
            <div className="flex flex-wrap gap-4 mt-2 text-xl dark:text-zinc-100">
              {LANGUAGES.map((pill, index) => (
                <FadeRight
                  key={`lang-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Libraries and frameworks
            </span>
            <div className="flex flex-wrap gap-4 mt-2 text-xl dark:text-zinc-100">
              {LIBRARY_FRAMEWORK.map((pill, index) => (
                <FadeRight
                  key={`lib-frame-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">Backend</span>
            <div className="flex flex-wrap gap-3 mt-2">
              {BACKEND_PILL.map((pill, index) => (
                <FadeRight
                  key={`backend-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Databases and ORMs
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {DATABASE_ORM_PILL.map((pill, index) => (
                <FadeRight
                  key={`database-orm-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Tools and technologies
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {TOOLS_TECHNOLOGIES.map((pill, index) => (
                <FadeRight
                  key={`tools-techs-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Headless CMS
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {HEADLESS_CMS.map((pill, index) => (
                <FadeRight
                  key={`tools-techs-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Other Trollings
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {OTHER_TROLLINGS.map((pill, index) => (
                <FadeRight
                  key={`tools-techs-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView={!isMobileDebonced}
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
