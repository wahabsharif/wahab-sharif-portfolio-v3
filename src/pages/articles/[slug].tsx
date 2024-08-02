import { Article, getAllArticles, getArticleBySlug } from "@/data/articles";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import { ArticleIcon } from "@/components/Icons";
import Link from "next/link";

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      />
      <NextSeo
        title={`${article.title} - By Wahab Sharif`}
        description={article.description}
        canonical={`https://wahabsharif.me/articles/${article.slug}`}
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
