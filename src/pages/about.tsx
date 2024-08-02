import FadeRight from "@/animation/FadeRight";
import FadeUp from "@/animation/FadeUp";
import ShowCaseList from "@/components/ShowCaseList";
import { EXPERIENCE } from "@/data/experience";
import { AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
// import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import heroProfileImg from "@/public/images/wahab-pic-neon-1.png";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Wahab Sharif | React and Frontend Developer"
        description="Learn more about Wahab Sharif, a dedicated React and Frontend Developer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Wahab Sharif - React and Frontend Developer",
          description:
            "Dive into the story of Wahab Sharif, a React and Frontend Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Wahab Sharif - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <div className="flex flex-col items-center gap-6 px-6 pt-20 mx-auto mt-0 text-center max-w-7xl sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.6}>
              <Image
                src={heroProfileImg}
                width={100}
                height={100}
                className="w-full h-auto px-0 xl:px-16"
                alt="hero image"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="w-full mt-10 sm:1/2 lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting" duration={0.6}>
              <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text dark:from-teal-200 dark:to-teal-500 sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
                Hi, I&apos;m Wahab Sharif
              </h1>
            </FadeUp>
            <FadeUp key="description-1" duration={0.6} delay={0.2}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                I transform ideas into tangible digital experiences through
                coding. Whether it's a website or any digital product, I bring a
                dedicated focus on design quality and user-centric principles to
                each project I undertake.
              </p>
            </FadeUp>
            <FadeUp key="description-2" duration={0.6} delay={0.4}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Discover my most recent projects demonstrating my proficiency in
                React.js, Next.js, JavaScript, TypeScript, and web development.
              </p>
            </FadeUp>
            <FadeRight
              key="hero-location"
              duration={0.6}
              delay={0.8}
              className="flex items-center justify-center gap-4 mt-8 mr-0 lg:mr-8 lg:justify-end"
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="w-full h-full bg-no-repeat bg-cover -z-10"
                  alt="Indian flag"
                  src="https://flagcdn.com/pk.svg"
                  width={15}
                  height={15}
                />
              </div>
              <span className="text-lg font-medium">Islamabad, Pakistan.</span>
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>
      <ShowCaseList title="Experience" details={EXPERIENCE} />
      {/* <ShowCaseList title="Education" details={EDUCATION} /> */}
    </>
  );
}
