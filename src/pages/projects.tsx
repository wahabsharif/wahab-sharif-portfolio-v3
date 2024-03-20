import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";

export default function Projects() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Projects by Wahab Sharif - React and Frontend Developer Portfolio"
        description="Explore a collection of projects by Wahab Sharif, a seasoned React and Frontend Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title:
            "Discover Projects by Wahab Sharif - React and Frontend Developer",
          description:
            "Explore a showcase of projects crafted by Wahab Sharif, a React and Frontend Developer. Witness the fusion of creativity and technology in web development.",
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
              "Projects, Portfolio, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold md:text-4xl">Projects</h1>
          <div className="my-2">
            <span className="text-sm">
              Here are a few projects I'd like to showcase.
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Currently, I'm constructing new projects and bolstering my backend development expertise to broaden my skill set beyond frontend development.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-medium text-tera-500 underline underline-offset-2 hover:text-teal-600 dark:text-teal-400"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
