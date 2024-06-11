export type Article = {
  title: string;
  thumbnail: string;
  description: string;
  content: string[]; // Change content to an array of strings
  body: string[];
  slug: string;
};

const articles: Article[] = [
  {
    title: "Essential VS Code Extensions for Front-End Development in 2024",
    slug: "essential-vs-code-extensions-for-front-end-development-in-2024",
    thumbnail: "/images/articles/vs-code-ext.webp",
    description:
      "Discover key VS Code extensions for front-end developers, enhancing productivity and advancing development workflows in this insightful article.",
    content: [
      "Live Server: Live Server is a must-have extension that allows you to launch a local development server and automatically refresh the browser whenever you make changes to your HTML, CSS, or JavaScript files.",
      "Markdown All in One: If you frequently work with Markdown files, this extension is a game-changer. It provides shortcuts, syntax highlighting, and preview functionality, making it easier to create and edit Markdown documents.",
      "GitLens: GitLens is a powerful extension that enhances your Git experience within VS Code. It seamlessly integrates with your Git repositories and provides valuable insights, such as blame annotations and a visual representation of code changes.",
      "Polacode: Polacode allows you to capture beautiful screenshots of your code. It creates a stylized image with a customizable background, perfect for sharing code snippets on social media or in documentation.",
      "Error Lens: Error Lens helps you quickly identify and fix errors in your code. It highlights errors and warnings inline, allowing you to catch mistakes as you type and avoid costly bugs.",
    ],
    body: [
      "These are just a few of the many extensions available for VS Code. By leveraging the power of these tools, you can streamline your development process and focus on what you do best: building amazing front-end experiences.",
    ],
  },
  {
    title: "10 Project Ideas From Beginner to Advanced",
    slug: "10-project-ideas-from-beginner-to-advanced",
    thumbnail: "/images/articles/10-projects-ideas.avif",
    description:
      "Creating a thread with project ideas aims to inspire beginners, reducing common questions about what to do with programming languages.",
    content: [
      "Web Scraper #scraper",
      "File encryptor #filetool",
      "URL Shorthener #urltool",
      "CLI Chat App #chat",
      "RESTFull API #api",
      "Image Recognition #ml #dl",
      "Stock Market Analysis #stock #market",
      "Markdown to HTML Converter #converter",
      "PDF Generator #generator",
      "Social Media Analytics #analytics",
    ],
    body: [""],
  },
  {
    title: "Apple partners with OpenAI to bring ChatGPT to iPhones",
    slug: "apple-partners-with-openai-to-bring-chatgpt-to-iphones",
    thumbnail:
      "/images/articles/apple-partners-with-openai-to-bring-chatgpt-to-iphones.webp",
    description:
      "Apple, in its much-awaited Worldwide Developers Conference on Monday, unveiled a series of features, including a partnership with OpenAI, BBC reported.",
    content: [],
    body: [
      "As the tech giant company races to match up with its rivals in the artificial intelligence race, it announced a new personalised AI system, called Apple Intelligence, which is designed to assist users navigate Apple devices more easily.",
      "In the event, Apple announced that Siri will be able to access ChatGPT directly into iOS 18, iPadOS 18, and macOS Sequoia to provide better responses in relevant situations.",
      "The integration of Open AI will enable ‌Siri to leverage ChatGPT's image- and text-understanding capabilities with no need to jump between tools.",
      "Before forwarding a query to ChatGPT, Siri will ask for permission from the user.",
      "ChatGPT assistance will also be available in Apple apps such as its Writing Tools and Compose Music video editor.",
      "According to Apple, users can access it for free without creating an account, and ChatGPT subscribers can connect their accounts and access paid features right from these experiences.",
      "Apple Intelligence will be made available for users starting this year, while some features may roll out over the course of next year.",
    ],
  },
  {
    title:
      "CachyOS June 2024 release makes it easy to say goodbye to Microsoft Windows 11 and hello to Linux",
    slug: "cachyos-june-2024-release-makes-it-easy-to-say-goodbye-to-microsoft-windows-11-and-hello-to-linux",
    thumbnail:
      "/images/articles/cachyos-june-2024-release-makes-it-easy-to-say-goodbye-to-microsoft-windows-11-and-hello-to-linux.webp",
    description:
      "CachyOS unveils its seventh update of the year, boasting enhanced features and broader device support, ideal for Windows 11 switchers.",
    content: [],
    body: [
      "CachyOS has announced the release of its seventh update of the year, bringing a range of new features and improvements. This latest version (download here) is noteworthy for users looking to switch from Microsoft Windows 11, offering robust support for various devices, including the T2 MacBook and handheld gaming devices.",
      "The June 2024 release adds support for the MacBooks with a T2 security chip. While Wi-Fi and Bluetooth do not work out of the box due to proprietary firmware from Apple, CachyOS provides detailed instructions to get these features working post-installation. This makes it an appealing option for Mac users transitioning to a more open-source platform while still using their existing hardware.",
      "The new release includes the “cachy-chroot” script, which guides users through the chroot process and properly mounts partitions, particularly beneficial for BTRFS users. This script helps detect subvolumes, making the installation process smoother and more intuitive. Additionally, the ISO now uses the mkinitcpio microcode hook and supports copytoram, improving overall speed and performance during installation.",
      "For those using NVIDIA graphics cards, the latest update ensures better support and functionality. Services are now enabled by default to prevent graphical corruption when using sleep mode on Wayland, and the new 555 Driver includes explicit sync support, significantly enhancing the Wayland experience.",
      "CachyOS has made BTRFS the default file system, citing its superior performance and flexibility. Users can still choose other file systems like XFS during installation. Additionally, UFW has replaced Firewalld as the default firewall, providing an easier setup experience for most users.",
      "The Handheld Edition of CachyOS, now considered stable, includes several updates to improve compatibility and performance on devices like the Steam Deck, Legion Go, and Rog Ally. This edition features specialized hardware detection and configuration, ensuring a seamless experience on supported handheld gaming devices.",
    ],
  },
  {
    title: "Microsoft Windows addresses security concerns in new AI feature",
    slug: "microsoft-windows-addresses-security-concerns-in-new-ai-feature",
    thumbnail:
      "/images/articles/microsoft-windows-addresses-security-concerns-in-new-ai-feature.jpg",
    description:
      "Micosoft has addressed security concerns in its new AI feature for Windows, called RECALL, regarding which the company received much criticism by tech experts",
    content: [],
    body: [
      "The feature, which was announced at the Microsoft Build 2024 developer conference in Seattle, would enable users to search through the history on the PC and find anything from a document or a message.",
      "The new feature saves images of your desktop every few seconds, scan and analyse them with the help of AI, then make that data searchable using natural language, according to Tom's Guide.",
      "Following the announcement, experts raised concerns that this feature may jeopardise the users’ security.",
      "Therefore, Microsoft is making some changes before this feature is rolled out with Copilot Plus PCs, set to be launched on June 18. ",
      "Microsoft had originally planned to turn Recall on by default, but the company now says it will offer the ability to disable the controversial AI-powered feature during the setup process of new Copilot Plus PCs.",
    ],
  },
  {
    title:
      "Firefox 127 With 32-bit x86 Linux Pretending To Be x86_64 To Reduce Fingerprinting",
    slug: "firefox-127-with-32-bit-x86-linux-pretending-to-be-x86-64-to-reduce-fingerprinting",
    thumbnail:
      "/images/articles/firefox-127-with-32-bit-x86-linux-pretending-to-be-x86-64-to-reduce-fingerprinting.webp",
    description:
      "Mozilla Firefox 127.0 binaries are out ahead of the official announcement, featuring updates and a shift in reporting for 32-bit Linux.",
    content: [],
    body: [
      "Mozilla Firefox 127.0 binaries are available for download today ahead of tomorrow's official announcement. Firefox 127 brings a few nice changes for this month's feature update.",
      "Given the diminishing number of Linux x86 32-bit installations, Mozilla is now reporting 32-bit x86 Linux builds via the HTTP user string as... x86_64. Firefox 32-bit x86 builds continue to be made and supported but for reducing fingerprinting risks with x86 32-bit use on the decline, Firefox is now reporting them as x86_64 to websites. This x86 32-bit reporting as x86_64 is for the HTTP user agent string as well as the navigator.platform and navigator.oscpu Web APIs.",
      "Firefox 127.0 also now honors the rel= dns-prefetch link hint for DNS pre-fetching for HTTPS documents to help with optimized load times, the option to close all duplicate tabs in a window, and the Firefox Screenshots feature has seen a big update. Firefox's screenshot tool can now take screenshots of SVG and XML files as well as various other types. There is also keyboard shortcuts, theme compatibility, and high contrast mode support. Capturing large screenshots is also now faster.",
      "Ahead of tomorrow's official release announcement, the Firefox 127.0 binaries can be downloaded now from ftp.mozilla.org. Additional developer related changes for Firefox 127 are noted on developer.mozilla.org.",
    ],
  },
];

export const getAllArticles = () => {
  return articles;
};

export const getArticleBySlug = (slug: string) => {
  return articles.find((article) => article.slug === slug);
};

export default articles;
