import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { Article } from "@/data/articles"; // Import Article type

interface ArticleCardProps {
  article: Article;
  articleHref: string; // Ensure articleHref is included in props
}

export default function ArticleCard({
  article,
  articleHref,
}: ArticleCardProps) {
  return (
    <section>
      {" "}
      <Link href={articleHref} legacyBehavior>
        <a>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 0.4,
            }}
            className="relative w-full overflow-hidden rounded-lg border border-zinc-500/30 bg-white transition-shadow duration-150 hover:shadow-md dark:border-teal-200/10 dark:bg-zinc-800 dark:hover:shadow-sm dark:hover:shadow-teal-200/50"
          >
            {/* Check if thumbnail is defined */}
            {article.thumbnail && (
              <div className="aspect-w-16 aspect-h-9 relative">
                {/* Ensure correct import of Image component */}
                <Image
                  src={article.thumbnail}
                  alt="article thumbnail"
                  width={500}
                  height={0}
                />
              </div>
            )}
            <div className="flex h-full flex-col justify-between p-3 sm:p-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold">{article.title}</span>
                </div>
                <div className="mt-3">
                  <p className="text-xs md:text-sm">{article.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-6">
                <FiExternalLink className="h-5 w-5" />
                Read More
              </div>
            </div>
          </motion.div>
        </a>
      </Link>
    </section>
  );
}
