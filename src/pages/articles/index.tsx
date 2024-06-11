import { Article, getAllArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import { motion } from "framer-motion";

export default function ArticlesPage({ articles }: { articles: Article[] }) {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Articles by Wahab Sharif"
        description="Explore our collection of articles covering various topics."
        canonical="https://wahabsharif.me/articles"
      />
      <motion.div
        className="container mx-auto p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="mb-6 text-center text-4xl font-bold">Articles</h1>
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
