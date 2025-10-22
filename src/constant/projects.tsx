import { TProject } from "@/types/type";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiKotlin,
  SiMysql,
  SiQuasar,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiDotnet,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiSqlalchemy,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiPostman,
  SiJetbrains,
  SiDbeaver,
  SiVuedotjs,
  SiSpring,
  SiMui,
  SiAxios,
  SiShadcnui,
  SiPrisma,
  SiPostgresql,
  SiVite,
  SiApachemaven,
} from "react-icons/si";
import { PiTornadoDuotone } from "react-icons/pi";
import { GiPineapple } from "react-icons/gi";
import { FaJava } from "react-icons/fa";

export const projects: TProject[] = [
  {
    id: "1",
    title: "Portfolio Web App V2",category: "Web App",
    role: "Fullstack Developer",
    year: "2023",
    image: "/projects/portfolio_v2.png",
    logoTags: [
      {
        name: "Typescript",
        logo: <SiTypescript size={20} color="#3178C6" />,
      },
      {
        name: "Next.js",
        logo: <SiNextdotjs size={20} color="#000000" />,
      },
      {
        name: "Tailwind CSS",
        logo: <SiTailwindcss size={20} color="#06B6D4" />,
      },
      {
        name: "Shadcn UI",
        logo: <SiShadcnui size={20} color="#000000" />,
      },
      {
        name: "Prisma",
        logo: <SiPrisma size={20} color="#0C344B" />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql size={20} color="#336791" />,
      },
      {
        name: "Git",
        logo: <SiGit size={20} color="#F05032" />,
      },
    ],
    link: "https://portfolio-v2.vercel.app/",
    status: "Completed",
    startDate: "2023-12-01",
    endDate: "2024-02-15",
  },
  {
    id: "2",
    title: "Restaurant App",
    category: "Web App",
    role: "Fullstack Developer",
    year: "2023",
    image: "/projects/resto.png",
    logoTags: [
      {
        name: "Typescript",
        logo: <SiTypescript size={20} color="#3178C6" />,
      },
      {
        name: "React.js",
        logo: <SiReact size={20} color="#61DAFB" />,
      },
      {
        name: "Tailwind CSS",
        logo: <SiTailwindcss size={20} color="#06B6D4" />,
      },
      {
        name: "Material UI",
        logo: <SiMui size={20} color="#007FFF" />,
      },
      {
        name: "Laravel",
        logo: <SiLaravel size={20} color="#FF2D20" />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql size={20} color="#336791" />,
      },
    ],
    link: "https://restaurant-app-psi.vercel.app/",
    status: "Completed",
    startDate: "2023-12-01",
    endDate: "2024-02-15",
  },
  {
    id: "3",
    title: "DX Trade",
    category: "Dekstop App",
    role: "Frontend Developer",
    year: "2024",
    image: "/projects/dxtrade.png",
    logoTags: [
      {
        name: "Kotlin",
        logo: <SiKotlin size={20} color="#7F52FF" />,
      },
      {
        name: "Tornado FX",
        logo: <PiTornadoDuotone size={20} color="#FF3D00" />,
      },
      {
        name: "Maven",
        logo: <SiApachemaven size={20} color="#007396" />,
      },
      {
        name: "Git",
        logo: <SiGit size={20} color="#F05032" />,
      },
    ],
    link: "#",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "",
  },
  {
    id: "4",
    title: "VHS Pertamina",
    category: "Web App",
    role: "Fullstack Developer",
    year: "2024",
    image: "/projects/vhs.png",
    logoTags: [
      {
        name: "Dotnet",
        logo: <SiDotnet size={20} color="#7F52FF" />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql size={20} color="#336791" />,
      },
      {
        name: "JavaScript",
        logo: <SiJavascript size={20} color="#F7DF1E" />,
      },
      {
        name: "JQuery",
        logo: <SiJquery size={20} color="#0769AD" />,
      },
      {
        name: "Git",
        logo: <SiGit size={20} color="#F05032" />,
      },
    ],
    link: "#",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "",
  },
  {
    id: "5",
    title: "PLN",
    category: "Backend & Data System",
    role: "Data Engineer",
    year: "2024",
    image: "/projects/data.png",
    logoTags: [
      {
        name: "Python",
        logo: <SiPython size={20} color="#3776AB" />,
      },
      {
        name: "SQLAlchemy",
        logo: <SiSqlalchemy size={20} color="#21628C" />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql size={20} color="#336791" />,
      },
      {
        name: "DBeaver",
        logo: <SiDbeaver size={20} color="#000000" />,
      },
      {
        name: "Git",
        logo: <SiGit size={20} color="#F05032" />,
      },
    ],
    link: "#",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "",
  },
  {
    id: "6",
    title: "DJKN - Kinerja Badan Usaha",
    category: "Web App",
    role: "Frontend Developer",
    year: "2023",
    image: "/projects/kbu.jpg",
    logoTags: [
      {
        name: "Typescript",
        logo: <SiTypescript size={20} color="#3178C6" />,
      },
      {
        name: "Vue.js",
        logo: <SiVuedotjs size={20} color="#4FC08D" />,
      },
      {
        name: "Quasar",
        logo: <SiQuasar size={20} color="#1976D2" />,
      },
      {
        name: "Axios",
        logo: <SiAxios size={20} color="#5A29E4" />,
      },
      {
        name: "Pinia",
        logo: <GiPineapple size={20} color="#FFB300" />,
      },
      {
        name: "Vite",
        logo: <SiVite size={20} color="#646CFF" />,
      },
      {
        name: "Github",
        logo: <SiGithub size={20} color="#181717" />,
      },
    ],
    link: "#",
    status: "Completed",
    startDate: "2024-05-01",
    endDate: "2024-12-15",
  },
  {
    id: "7",
    title: "Telenofilm",
    category: "Web App",
    role: "Fullstack Developer",
    year: "2023",
    image: "/projects/telenofilm.png",
    logoTags: [
      {
        name: "PHP",
        logo: <SiPhp size={20} color="#777BB4" />,
      },
      {
        name: "Laravel",
        logo: <SiLaravel size={20} color="#FF2D20" />,
      },
      {
        name: "MySQL",
        logo: <SiMysql size={20} color="#4479A1" />,
      },
    ],
    link: "#",
    status: "Completed",
    startDate: "2023-06-01",
    endDate: "2023-12-15",
  },
  {
    id: "8",
    title: "Kampoeng Ciherang",
    category: "Web App",
    role: "Fullstack Developer",
    year: "2023",
    image: "/projects/ciherang.png",
    logoTags: [
      {
        name: "PHP",
        logo: <SiPhp size={20} color="#777BB4" />,
      },
      {
        name: "Laravel",
        logo: <SiLaravel size={20} color="#FF2D20" />,
      },
      {
        name: "MySQL",
        logo: <SiMysql size={20} color="#4479A1" />,
      },
    ],
    link: "#",
    status: "Completed",
    startDate: "2023-01-15",
    endDate: "2023-05-30",
  },
  {
    id: "9",
    title: "Portfolio Web App V1",
    category: "Web App",
    role: "Frontend Developer",
    year: "2023",
    image: "/projects/portfolio_v1.png",
    logoTags: [
      {
        name: "Html",
        logo: <SiHtml5 size={20} color="#E34F26" />,
      },
      {
        name: "Tailwind CSS",
        logo: <SiTailwindcss size={20} color="#38B2AC" />,
      },
      {
        name: "JavaScript",
        logo: <SiJavascript size={20} color="#F7DF1E" />,
      },
    ],
    link: "https://my-portofolio-ten-rho.vercel.app/",
    status: "Completed",
    startDate: "2023-01-15",
    endDate: "2023-05-30",
  },
  {
    id: "10",
    title: "Maximple",
    category: "Backend & Data System",
    role: "Backend Developer",
    year: "2023",
    image: "/projects/maximple.png",
    logoTags: [
      {
        name: "Java",
        logo: <FaJava size={20} color="#007396" />,
      },
      {
        name: "Spring Boot",
        logo: <SiSpring size={20} color="#6DB33F" />,
      },
      {
        name: "Postman",
        logo: <SiPostman size={20} color="#FF6C37" />,
      },
    ],
    link: "#",
    status: "Completed",
    startDate: "2023-01-15",
    endDate: "2023-05-30",
  },
];

export const categories = [
  "All",
  "Web App",
  "Dekstop App",
  "Backend & Data System",
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];
