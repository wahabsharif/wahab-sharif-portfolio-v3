import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/Hero";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const TimeTracker = dynamic(() => import("@/components/TimeTracker"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Project = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Wahab Sharif | Full Stack Developer"
        description="Explore the professional portfolio of Wahab Sharif, a skilled Full Stack Developer with 4 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Wahab Sharif - Full Stack Developer",
          description:
            "Dive into the world of web development with Wahab Sharif. Discover a React and Frontend Developer with 4 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
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
              "React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design,Full Stack Developer, web development, front-end, back-end, programming languages, user-friendly websites, applications, databases, integration, web solutions, next js, node js, react js, scss, css, tailwind, bootstrap, javascript, typescript, react, react native, vue js, vue.",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <Hero />
      <TimeTracker />
      <Skills />
      <Project projects={PROJECT_SHOWCASE} />
    </>
  );
}
