import { ArticleIcon } from "@/components/Icons";
import { Article, getAllArticles, getArticleBySlug } from "@/data/articles";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import Image from "next/image";
import Link from "next/link";

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <>
      <NextSeo
        title={`${article.title} - By Wahab Sharif  - Full Stack Developer`}
        description={article.description}
        canonical={`${siteMetadata.siteUrl}/articles/${article.slug}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/articles/${article.slug}`,
          title: `${article.title} - By Wahab Sharif  - Full Stack Developer`,
          description: `${article.description}`,
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
      <div className="container flex flex-col items-center p-20 mx-auto">
        <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
        {article.thumbnail && (
          <div className="relative mt-5">
            <Image
              src={article.thumbnail}
              alt="article thumbnail"
              width={800}
              height={0}
            />
          </div>
        )}
        <div className="mt-5 text-left">
          {" "}
          {/* Added text-left class here */}
          <p className="text-2xl font-bold">{article.description}</p>
        </div>
        <div className="mt-6 text-left">
          {" "}
          {/* Added text-left class here */}
          {article.content.map((paragraph, index) => (
            <p className="mt-4 text-xs md:text-sm" key={index}>
              {index + 1}. {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-4 text-left">
          {" "}
          {/* Added text-left class here */}
          {article.body.map((paragraph, index) => (
            <p className="mt-5 text-lg md:text-lg" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-teal-600 transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-white">
            <span className="block w-6 h-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9">
              <ArticleIcon />
            </span>
            <span className="text-base font-semibold sm:text-lg lg:text-xl">
              <Link href="/articles">View All Articles</Link>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles();
  const paths = articles.map((article) => ({ params: { slug: article.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const article = getArticleBySlug(slug);
  return {
    props: {
      article,
    },
  };
};
