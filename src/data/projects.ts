import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Step By Step",
    href: "/projects",
    tags: ["Next Js", "Node Js", "Express Js", "Mongo db", "Vercel"],
    image: {
      LIGHT: "/images/projects/step-by-step/step-by-step-home-banner.png",
      DARK: "/images/projects/step-by-step/step-by-step-home-banner.png",
    },
  },
  {
    index: 1,
    title: "Istikhara Qalandar",
    href: "/projects",
    tags: ["Next Js", "Node Js", "SCSS", "Vercel"],
    image: {
      LIGHT: "/images/projects/istikhara-qalandar/istikhara-qalandar.png",
      DARK: "/images/projects/istikhara-qalandar/istikhara-qalandar.png",
    },
  },
  {
    index: 2,
    title: "Castle Marketing",
    href: "/projects",
    tags: ["NextJs", "CSS", "NodeJs", "Vercel"],
    image: {
      LIGHT: "/images/projects/castle-marketing/castle-marketing-banner.webp",
      DARK: "/images/projects/castle-marketing/castle-marketing-banner.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Step By Step",
    favicon: "/images/projects/logos/step-by-step-icon-white.ico",
    imageUrl: [
      "/images/projects/step-by-step/step-by-step-home-banner.png",
      "/images/projects/step-by-step/step-by-step-web-image-1.png",
      "/images/projects/step-by-step/step-by-step-image-2.png",
      "/images/projects/step-by-step/step-by-step-image-3.png",
    ],
    description:
      "Step By Step is a comprehensive full-stack web application designed for users to book their desired services. With an intuitive interface and seamless functionality, it provides a convenient and efficient platform for scheduling a variety of services to meet users' needs.",
    sourceCodeHref: "https://github.com/wahabsharif/step-by-step-v2",
    liveWebsiteHref: "https://step-by-step-v2.vercel.app/",
  },
  {
    name: "Istikhara Qalandar",
    favicon: "/images/projects/logos/istikhara-qalandar-icon.ico",
    imageUrl: [
      "/images/projects/istikhara-qalandar/istikhara-qalandar.png",
      "/images/projects/istikhara-qalandar/istikhara-qalandar-web-image-1.png",
      "/images/projects/istikhara-qalandar/istikhara-qalandar-web-image-2.png",
      "/images/projects/istikhara-qalandar/istikhara-qalandar-web-image-3.png",
    ],
    description:
      "Istikhara Qalandar is a website offering users access to their horoscope, numerology insights, and detailed information about Istikhara and Wazaif. It serves as a comprehensive platform for those seeking spiritual guidance and knowledge in these areas.",
    sourceCodeHref: "https://github.com/wahabsharif/istikhara-qalandar",
    liveWebsiteHref: "https://istikhara-qalandar.vercel.app/",
  },
  {
    name: "My Previous Portfolio",
    favicon: "/images/projects/logos/wahab-sharif-v2.ico",
    imageUrl: [
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-banner.webp",
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-skills.webp",
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-projects.webp",
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-contact.webp",
    ],
    description:
      "Employing Next.js, Three.js, Node.js, and CSS, I've meticulously developed my personal portfolio. This platform serves as a testament to my proficiency in web development, featuring dynamic and visually stunning designs that highlight my skills and creativity, ensuring an engaging user experience for visitors and potential clients alike.",
    sourceCodeHref: "https://github.com/wahabsharif/wahab-sharif-v2-gallaxy",
    liveWebsiteHref: "https://wahab-sharif-v2.vercel.app",
  },
  {
    name: "Castle Marketing",
    favicon: "/images/projects/logos/castle-marketing.ico",
    imageUrl: [
      "/images/projects/castle-marketing/castle-marketing-banner.webp",
      "/images/projects/castle-marketing/castle-marketing-investment.webp",
      "/images/projects/castle-marketing/castle-marketing-contact.webp",
      "/images/projects/castle-marketing/castle-marketing-footer.webp",
    ],
    description:
      "A portfolio for a real estate company specializing in housing societies and commercial projects. This comprehensive showcase highlights their diverse range of properties, emphasizing their expertise in both residential and commercial developments, catering to the varied needs of clients seeking quality housing and investment opportunities.",
    sourceCodeHref: "https://github.com/wahabsharif/castle-marketing-next-1.0",
    liveWebsiteHref: "https://castlemarketing.pk/",
  },
  {
    name: "Beacon Techh",
    favicon: "/images/projects/logos/beacontechh.ico",
    imageUrl: [
      "/images/projects/beacontechh/beacon-techh-services.webp",
      "/images/projects/beacontechh/beacon-techh-banner.webp",
      "/images/projects/beacontechh/beacon-techh-footer.webp",
    ],
    description:
      "A digital agency provides a range of services including software development, video production, and graphic design, among others. With a focus on innovation and expertise, it meets diverse digital requirements, delivering quality solutions tailored to clients' specific needs, ensuring excellence in every aspect of their digital endeavors.",
    sourceCodeHref: "https://github.com/wahabsharif/beacontech-react-1.0",
    liveWebsiteHref: "https://beacontechh.com/",
  },
  {
    name: "Aeon Marketing",
    favicon: "/images/projects/logos/aeon-marketing.ico",
    imageUrl: [
      "/images/projects/aeon-marketing/aeon-marketing-banner.webp",
      "/images/projects/aeon-marketing/aeon-marketing-intro.webp",
      "/images/projects/aeon-marketing/aeon-marketing-gallary.webp",
      "/images/projects/aeon-marketing/aeon-marketing-footer.webp",
    ],
    description:
      "A real estate company portfolio focuses on housing societies and commercial projects, showcasing a wide array of properties. It underscores their proficiency in both residential and commercial developments, meeting the diverse needs of clients seeking top-tier housing and investment prospects.",
    sourceCodeHref: "https://github.com/wahabsharif/Aeon-Marketing-Next-js-1.0",
    liveWebsiteHref: "https://www.aeonmarketing.com.pk/",
  },
];
