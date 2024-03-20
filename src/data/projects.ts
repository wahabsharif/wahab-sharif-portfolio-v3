import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Castle Marketing",
    href: "/projects",
    tags: ["NextJs", "CSS", "NodeJs","Vercel"],
    image: {
      LIGHT: "/images/projects/castle-marketing/castle-marketing-banner.png",
      DARK: "/images/projects/castle-marketing/castle-marketing-banner.png",
    },
  },
  {
    index: 1,
    title: "Aeon Marketing",
    href: "/projects",
    tags: [
      "ReactJs",
      "NodeJs",
      "NextJs",
      "CSS",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/aeon-marketing/aeon-marketing-banner.png",
      DARK: "/images/projects/aeon-marketing/aeon-marketing-banner.png",
    },
  },
  {
    index: 2,
    title: "Wahab Sharif",
    href: "/projects",
    tags: ["NextJs", "ThreeJs","NodeJs", "CSS", "Vercel"],
    image: {
      LIGHT: "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-banner.png",
      DARK: "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-banner.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "My Previous Portfolio",
    favicon: "/images/projects/logos/wahab-sharif-v2.ico",
    imageUrl: [
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-banner.png",
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-skills.png",
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-projects.png",
      "/images/projects/wahab-sharif-galaxy/wahab-sharif-v2-contact.png",
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
      "/images/projects/castle-marketing/castle-marketing-banner.png",
      "/images/projects/castle-marketing/castle-marketing-investment.png",
      "/images/projects/castle-marketing/castle-marketing-contact.png",
      "/images/projects/castle-marketing/castle-marketing-footer.png",
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
      "/images/projects/beacontechh/beacon-techh-services.png",
      "/images/projects/beacontechh/beacon-techh-banner.png",
      "/images/projects/beacontechh/beacon-techh-footer.png",
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
      "/images/projects/aeon-marketing/aeon-marketing-banner.png",
      "/images/projects/aeon-marketing/aeon-marketing-intro.png",
      "/images/projects/aeon-marketing/aeon-marketing-gallary.png",
      "/images/projects/aeon-marketing/aeon-marketing-footer.png",
    ],
    description:
      "A real estate company portfolio focuses on housing societies and commercial projects, showcasing a wide array of properties. It underscores their proficiency in both residential and commercial developments, meeting the diverse needs of clients seeking top-tier housing and investment prospects.",
    sourceCodeHref: "https://github.com/wahabsharif/Aeon-Marketing-Next-js-1.0",
    liveWebsiteHref: "https://www.aeonmarketing.com.pk/",
  },
  // {
  //   name: "Covid Tracker",
  //   favicon: "/images/projects/logos/covidtracker.ico",
  //   imageUrl: [
  //     "/images/projects/covidTracker.webp",
  //     "/images/projects/covidTrackerMap.webp",
  //     "/images/projects/covidTrackerTable.webp",
  //   ],
  //   description:
  //     "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
  //   liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  // },
  // {
  //   name: "Stock predictor",
  //   favicon: "/images/projects/logos/stockpredictor.ico",
  //   imageUrl: [
  //     "/images/projects/stockPredictor.webp",
  //     "/images/projects/stockPredictorCandleChart.webp",
  //     "/images/projects/stockPredictorCompareChart.webp",
  //     "/images/projects/stockPredictorLineChart.webp",
  //   ],
  //   description:
  //     "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
  //   sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  // },
];
