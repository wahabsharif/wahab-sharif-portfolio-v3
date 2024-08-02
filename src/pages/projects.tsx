import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Wahab Sharif - Full Stack Developer"
        description="Explore a collection of projects by Wahab Sharif, a seasoned Full Stack Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Wahab Sharif - Full Stack Developer",
          description:
            "Explore a showcase of projects crafted by Wahab Sharif, a Full Stack Developer. Witness the fusion of creativity and technology in web development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}/${siteMetadata.twitterImage}`,
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
              "About Me, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development, Programming, Software Engineer, Coding, Developer, Web Design, UI/UX, TypeScript, Node.js, Next.js, Tailwind CSS, Git, GitHub, Version Control, Agile Development, Scrum, Responsive Design, Mobile Development, API Integration, RESTful Services, JSON, AJAX, ES6, Babel, Webpack, npm, Yarn, Frontend Frameworks, React Hooks, Redux, Context API, GraphQL, Apollo, Material-UI, Bootstrap, Sass, LESS, Styled Components, Jest, Enzyme, Cypress, Testing Library, Continuous Integration, Continuous Deployment, CI/CD, DevOps, AWS, Docker, Kubernetes, Microservices, Serverless, Lambda, Firebase, MongoDB, SQL, PostgreSQL, MySQL, SQLite, Authentication, Authorization, OAuth, JWT, Security, Encryption, Performance Optimization, SEO, Web Accessibility, WCAG, Lighthouse, Analytics, Google Analytics, Tag Manager, Digital Marketing, Content Management Systems, WordPress, Headless CMS, Jamstack, Gatsby, Eleventy, Netlify, Vercel, D3.js, Chart.js, Data Visualization, WebGL, Three.js, Game Development, PWA, Progressive Web Apps, Service Workers, Offline Support, Caching, Web Sockets, Real-time Communication, GraphQL Subscriptions, WebRTC, Video Streaming, Live Streaming, Blogging, Technical Writing",
          },
        ]}
      />
      <section className="w-full gap-20 px-6 mx-auto mt-6 mb-40 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold md:text-4xl">Projects</h1>
          <div className="my-2">
            <span className="text-sm">
              Here are a few projects I'd like to showcase.
            </span>
          </div>
          <div className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="max-w-5xl mx-auto mt-16 text-center md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Currently, I'm constructing new projects and bolstering my backend
              development expertise to broaden my skill set beyond frontend
              development.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="text-3xl font-extrabold underline text-tera-500 underline-offset-2 hover:text-teal-600 dark:text-teal-400"
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
