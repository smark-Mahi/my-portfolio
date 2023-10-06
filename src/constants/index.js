import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  kmzee,
  git,
  starbucks,
  simpleSocial,
  threejs,
} from "../assets/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Technical Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer intern",
    company_name: "Teenvisor",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      "Maintained the landing page built with NextJS.",
      "Utilized Tailwind CSS to enhance web page styles and improve UI by 30.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Provided suggestions for UX improvements to enhance the overall user experience.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "kmzee Holding",
    icon: kmzee,
    iconBg: "#ffdfe5",
    date: "May 2023 - Present",
    points: [
      "Mantained websites for kmzee holding's tech division and daveloped a dashboard for car dealer client.",
      "Added subscription functonality to a dashboard, enhancing user engagement.",
      "Developed a dashboard for a leasing aggregator client from scratch, improving data visualization and user experience.",
      "Designed the homepage for a leasing aggregator website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Simple Social",
    description:
      "Web-based platform that allows users to create profile,add post,chat privately with anyone, like,get notifications, and comment post , providing a convenient and efficient solution for user to share there thoughts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
      {
        name: "Web Sockets",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Phython",
        color: "green-text-gradient",
      },
    ],
    image: simpleSocial,
    source_code_link: "https://github.com/smark-Mahi//Simple-Social-media",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
