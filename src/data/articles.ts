// data/articles.ts

export type Article = {
  title: string;
  thumbnail: string;
  description: string;
  content: string[]; // Change content to an array of strings
  body: string;
  slug: string;
};

const articles: Article[] = [
  {
    title: "Essential VS Code Extensions for Front-End Development in 2024",
    thumbnail: "/images/articles/vs-code-ext.webp",
    description:
      "As a front-end developer, having the right set of tools can greatly improve your productivity. In this article, we will explore some essential VS Code extensions that can take your development workflow to the next level.",
    content: [
      "Live Server: Live Server is a must-have extension that allows you to launch a local development server and automatically refresh the browser whenever you make changes to your HTML, CSS, or JavaScript files.",
      "Markdown All in One: If you frequently work with Markdown files, this extension is a game-changer. It provides shortcuts, syntax highlighting, and preview functionality, making it easier to create and edit Markdown documents.",
      "GitLens: GitLens is a powerful extension that enhances your Git experience within VS Code. It seamlessly integrates with your Git repositories and provides valuable insights, such as blame annotations and a visual representation of code changes.",
      "Polacode: Polacode allows you to capture beautiful screenshots of your code. It creates a stylized image with a customizable background, perfect for sharing code snippets on social media or in documentation.",
      "Error Lens: Error Lens helps you quickly identify and fix errors in your code. It highlights errors and warnings inline, allowing you to catch mistakes as you type and avoid costly bugs.",
      // Add more paragraphs as needed
    ],
    body: "These are just a few of the many extensions available for VS Code. By leveraging the power of these tools, you can streamline your development process and focus on what you do best: building amazing front-end experiences.",
    slug: "essential-vs-code-extensions-for-front-end-development-in-2024",
  },
];

export const getAllArticles = () => {
  return articles;
};

export const getArticleBySlug = (slug: string) => {
  return articles.find((article) => article.slug === slug);
};

export default articles;
