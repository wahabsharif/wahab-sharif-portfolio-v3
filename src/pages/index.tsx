import articles from "@/data/articles"; // Import article data
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";

const TimeTracker = dynamic(() => import("@/components/TimeTracker"), {
  ssr: true,
});
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const ArticleCard = dynamic(() => import("@/components/ArticleCard"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Project = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <NextSeo
        title="Wahab Sharif - Full Stack Developer"
        description="Learn more about Wahab Sharif, a dedicated Full Stack Developer with 4 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}`,
          title: "Learn About Wahab Sharif - Full Stack Developer",
          description:
            "Dive into the story of Wahab Sharif, a Full Stack Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
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
              "About Me, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development, Programming, Software Engineer, Coding, Developer, Web Design, UI/UX, TypeScript, Node.js, Next.js, Tailwind CSS, Git, GitHub, Version Control, Agile Development, Scrum, Responsive Design, Mobile Development, API Integration, RESTful Services, JSON, AJAX, ES6, Babel, Webpack, npm, Yarn, Frontend Frameworks, React Hooks, Redux, Context API, GraphQL, Apollo, Material-UI, Bootstrap, Sass, LESS, Styled Components, Jest, Enzyme, Cypress, Testing Library, Continuous Integration, Continuous Deployment, CI/CD, DevOps, AWS, Docker, Kubernetes, Microservices, Serverless, Lambda, Firebase, MongoDB, SQL, PostgreSQL, MySQL, SQLite, Authentication, Authorization, OAuth, JWT, Security, Encryption, Performance Optimization, SEO, Web Accessibility, WCAG, Lighthouse, Analytics, Google Analytics, Tag Manager, Digital Marketing, Content Management Systems, WordPress, Headless CMS, Jamstack, Gatsby, Eleventy, Netlify, Vercel, D3.js, Chart.js, Data Visualization, WebGL, Three.js, Game Development, PWA, Progressive Web Apps, Service Workers, Offline Support, Caching, Web Sockets, Real-time Communication, GraphQL Subscriptions, WebRTC, Video Streaming, Live Streaming, Blogging, Technical Writing",
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

      {/* Render ArticleCards */}
      <div className="px-6 overflow-hidden py-25 sm:px-14 md:px-20">
        <h2 className="mb-10 text-xl font-semibold sm:text-3xl">Articles</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              articleHref={`/articles/${article.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
