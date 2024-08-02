import ArticleCard from "@/components/ArticleCard";
import { Article, getAllArticles } from "@/data/articles";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function ArticlesPage({ articles }: { articles: Article[] }) {
  return (
    <>
      <NextSeo
        title="Articles by Wahab Sharif - Full Stack Developer"
        description="Explore a collection of Articles by Wahab Sharif, a seasoned Full Stack Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/articles`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/articles`,
          title: "Discover Articles by Wahab Sharif - Full Stack Developer",
          description:
            "Explore a showcase of Articles crafted by Wahab Sharif, a Full Stack Developer. Witness the fusion of creativity and technology in web development.",
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
      <motion.div
        className="container p-4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="mb-6 text-4xl font-bold text-center">Articles</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: Article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              articleHref={`/articles/${article.slug}`}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const articles = getAllArticles(); // Implement this function to fetch all articles
  return {
    props: {
      articles,
    },
  };
}
