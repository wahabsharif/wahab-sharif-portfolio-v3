import Image from "next/image";
import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  // SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  GithubIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "HTML",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="html logo" src="/icons/html.svg" fill />
      </span>
    ),
  },
  {
    name: "CSS",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="css logo" src="/icons/css.svg" fill />
      </span>
    ),
  },
  {
    name: "SASS",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="sass logo" src="/icons/sass.svg" fill />
      </span>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="javascript logo" src="/icons/javascript.svg" fill />
      </span>
    ),
  },
  {
    name: "Typescript",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="typescript logo" src="/icons/typescript.svg" fill />
      </span>
    ),
  },
  // {
  //   name: "Python",
  //   icon: (
  //     <span className="relative w-5 h-5 sm:h-8 sm:w-8">
  //       <Image alt="python logo" src="/icons/python.svg" fill />
  //     </span>
  //   ),
  // },
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "React.js",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />
      </span>
    ),
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Vue.js",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="VueJs logo" src="/icons/vue-js-icon.png" fill />
      </span>
    ),
  },
  {
    name: "Nuxt.js",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="NuxtJs logo" src="/icons/nuxt-js-icon.png" fill />
      </span>
    ),
  },
  {
    name: "React-router-dom",
    icon: <ReactRouterDomIcon className="w-5 h-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Redux",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="redux logo" src="/icons/redux.svg" fill />
      </span>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="tailwindcss logo" src="/icons/tailwindcss.svg" fill />
      </span>
    ),
  },
  {
    name: "MUI",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="mui logo" src="/icons/mui.svg" fill />
      </span>
    ),
  },
  {
    name: "Framer motion",
    icon: <FramerMotionIcon className="w-5 h-5 sm:h-8 sm:w-8" />,
  },
  // {
  //   name: "Vite",
  //   icon: (
  //     <span className="relative w-5 h-5 sm:h-8 sm:w-8">
  //       <Image alt="vite logo" src="/icons/vite.svg" fill />
  //     </span>
  //   ),
  // },
  // {
  //   name: "Vite pwa",
  //   icon: <VitePwaIcon className="w-5 h-5 sm:h-8 sm:w-8" />,
  // },
];

export const BACKEND_PILL: SkillPillProps[] = [
  {
    name: "Node.js",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="nodejs logo" src="/icons/nodejs.svg" fill />
      </span>
    ),
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-5 h-5 sm:h-8 sm:w-8" />,
  },
  // {
  //   name: "Socket.io",
  //   icon: <SiSocketdotio className="w-5 h-5 sm:h-8 sm:w-8" />,
  // },
  // {
  //   name: "Flask",
  //   icon: <SiFlask className="w-5 h-5 sm:h-8 sm:w-8" />,
  // },
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "MongoDB",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="mongodb logo" src="/icons/mongodb.svg" fill />
      </span>
    ),
  },
  {
    name: "GraphQl",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="graphql logo" src="/icons/graphql.svg" fill />
      </span>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="postgresql logo" src="/icons/postgresql.svg" fill />
      </span>
    ),
  },
  {
    name: "Prisma",
    icon: (
      <SiPrisma className="h-5 w-5 fill-[#2d3748] dark:fill-zinc-100 sm:h-8 sm:w-8" />
    ),
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Git",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="git logo" src="/icons/git.svg" fill />
      </span>
    ),
  },
  {
    name: "Github",
    icon: <GithubIcon className="w-5 h-5 sm:h-8 sm:w-8" />,
  },
  // {
  //   name: "Docker",
  //   icon: (
  //     <span className="relative w-5 h-5 sm:h-8 sm:w-8">
  //       <Image alt="docker logo" src="/icons/docker.svg" fill />
  //     </span>
  //   ),
  // },
  {
    name: "Postman",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/postman.svg" fill />
      </span>
    ),
  },
  {
    name: "Vscode",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="vscode logo" src="/icons/vscode.svg" fill />
      </span>
    ),
  },
];

export const HEADLESS_CMS: SkillPillProps[] = [
  {
    name: "Strapi",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="strapi logo" src="/icons/strapi.svg" fill />
      </span>
    ),
  },
  {
    name: "Contentful",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="Contentful Logo" src="/icons/contentful.svg" fill />
      </span>
    ),
  },
  {
    name: "Sanity",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="sanity logo" src="/icons/sanity.svg" fill />
      </span>
    ),
  },
  {
    name: "Dato",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="dato logo" src="/icons/dato.svg" fill />
      </span>
    ),
  },
  {
    name: "Prismic",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="prismic logo" src="/icons/prismic.svg" fill />
      </span>
    ),
  },
  {
    name: "Wordpress",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="wordpres logo" src="/icons/wordpress.svg" fill />
      </span>
    ),
  },
  {
    name: "Magento",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="magento logo" src="/icons/magento.svg" fill />
      </span>
    ),
  },
  {
    name: "Netlify",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="netlify logo" src="/icons/netlify.svg" fill />
      </span>
    ),
  },
];
export const OTHER_TROLLINGS: SkillPillProps[] = [
  {
    name: "Linux",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="linux logo" src="/icons/linux.svg" fill />
      </span>
    ),
  },
  {
    name: "Kali Linux",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="linux logo" src="/icons/kali-linux.svg" fill />
      </span>
    ),
  },
  {
    name: "Ubuntu",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="ubuntu logo" src="/icons/ubuntu.svg" fill />
      </span>
    ),
  },
  {
    name: "Adobe Photoshop",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="photoshop logo" src="/icons/adobe-photoshop.svg" fill />
      </span>
    ),
  },
  {
    name: "Adobe Illustrator",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="illustrator logo" src="/icons/adobe-illustrator.svg" fill />
      </span>
    ),
  },
  {
    name: "Figma",
    icon: (
      <span className="relative w-5 h-5 sm:h-8 sm:w-8">
        <Image alt="figma logo" src="/icons/figma.svg" fill />
      </span>
    ),
  },
];
