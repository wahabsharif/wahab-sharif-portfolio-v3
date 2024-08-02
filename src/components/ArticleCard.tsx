import { Article } from "@/data/articles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
  articleHref: string;
}

export default function ArticleCard({
  article,
  articleHref,
}: ArticleCardProps) {
  return (
    <article>
      <Link href={articleHref} legacyBehavior>
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 0.4,
          }}
          className="relative w-full overflow-hidden transition-shadow duration-150 bg-white border rounded-lg cursor-pointer border-zinc-500/30 hover:shadow-md dark:border-teal-200/10 dark:bg-zinc-800 dark:hover:shadow-sm dark:hover:shadow-teal-200/50"
          style={{ height: "400px" }}
        >
          {article.thumbnail && (
            <div className="relative w-full h-48 overflow-hidden">
              <div className="h-full overflow-hidden">
                <Image
                  src={article.thumbnail}
                  alt="article thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-between h-full p-3 sm:p-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{article.title}</span>
              </div>
              <div className="mt-3">
                <p className="text-xs line-clamp-4 md:text-sm">
                  {article.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </article>
  );
}
