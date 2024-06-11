import { Article, getAllArticles, getArticleBySlug } from "@/data/articles";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import { motion } from "framer-motion";

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={`https://wahabsharif.me/articles/${article.slug}`}
      />
      <div className="container mx-auto flex flex-col items-center p-4">
        <h1 className="mb-4 text-2xl font-bold">{article.title}</h1>
        {article.thumbnail && (
          <div className="relative">
            {/* Correctly use the next/image component */}
            <Image
              src={article.thumbnail}
              alt="article thumbnail"
              width={800}
              height={0} // Set the height based on the aspect ratio of your image
              // layout="responsive" // Use responsive layout for the image
            />
          </div>
        )}
        <div className="mt-3">
          <p className="text-xs md:text-sm">{article.description}</p>
        </div>
        <div className="mt-6">
          {/* Map through the content array and render each paragraph with numbering */}
          {article.content.map((paragraph, index) => (
            <p className="mt-5 text-xs md:text-sm" key={index}>
              {index + 1}. {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{article.body}</p>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(); // Use getAllArticles function
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
