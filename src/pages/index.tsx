// pages/index.tsx
import ArticleCard from "@/components/ArticleCard"; // Import ArticleCard component
import Hero from "@/components/Hero";
import articles from "@/data/articles"; // Import article data
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";

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
      <NextSeo
      // Seo configuration
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
