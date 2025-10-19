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
    title: "Portfolio Web App V2",
    description:
      "Situs web portfolio pribadi versi kedua yang menampilkan proyek, pengalaman, dan keterampilan saya sebagai pengembang perangkat lunak dengan desain dan fitur yang ditingkatkan.",
    category: "Web App",
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
    summary: [
      "Desain yang lebih modern dan interaktif",
      "Fitur yang ditingkatkan",
      "Pengalaman pengembangan perangkat lunak",
    ],
    link: "https://portfolio-v2.vercel.app/",
    status: "Completed",
    startDate: "2023-12-01",
    endDate: "2024-02-15",
  },
  {
    title: "Restaurant App",
    description:
      "Aplikasi web untuk menampilkan informasi tentang restoran, menu, dan layanan yang tersedia.",
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
    summary: [
      "Desain yang lebih modern dan interaktif",
      "Fitur yang ditingkatkan",
      "Pengalaman pengembangan perangkat lunak",
    ],
    link: "https://restaurant-app-psi.vercel.app/",
    status: "Completed",
    startDate: "2023-12-01",
    endDate: "2024-02-15",
  },
  {
    title: "DX Trade",
    description:
      "DX Trade adalah aplikasi desktop yang dikembangkan untuk memfasilitasi aktivitas perdagangan aset digital dan saham secara real-time. Aplikasi ini menyediakan fitur analisis pasar, manajemen portofolio, serta eksekusi transaksi yang cepat dan aman, dengan antarmuka yang intuitif dan responsif.",
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
    summary: [
      "Fitur analisis pasar",
      "Manajemen portofolio",
      "Eksekusi transaksi yang cepat dan aman",
      "Antarmuka yang intuitif dan responsif",
    ],
    link: "#",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "",
  },
  {
    title: "VHS Pertamina",
    description:
      "VHS Pertamina adalah aplikasi web yang dirancang untuk mendukung proses digitalisasi dan efisiensi operasional di lingkungan Pertamina. Platform ini memfasilitasi pengelolaan data, pemantauan aktivitas, serta pelaporan secara terintegrasi, dengan fokus pada keamanan, kecepatan, dan kemudahan penggunaan.",
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
    summary: [
      "Pengelolaan data",
      "Pemantauan aktivitas",
      "Pelaporan secara terintegrasi",
      "Fokus pada keamanan, kecepatan, dan kemudahan penggunaan",
    ],
    link: "#",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "",
  },
  {
    title: "PLN",
    description:
      "proyek data engineering yang berfokus pada pembangunan pipeline data untuk mengintegrasikan dan memproses data operasional dari berbagai sumber internal PLN. Proyek ini bertujuan untuk meningkatkan efisiensi analisis, mendukung pengambilan keputusan berbasis data, serta memastikan ketersediaan data yang akurat dan terstruktur.",
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
    summary: [
      "Pembangunan pipeline data",
      "Integrasikan dan memproses data operasional",
      "Efisiensi analisis",
      "Pengambilan keputusan berbasis data",
      "Ketersediaan data yang akurat dan terstruktur",
    ],
    link: "#",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "",
  },
  {
    title: "DJKN - Kinerja Badan Usaha",
    description:
      "DJKN – Kinerja Badan Usaha adalah aplikasi web yang dikembangkan untuk memantau dan mengevaluasi kinerja badan usaha di bawah pengelolaan Direktorat Jenderal Kekayaan Negara (DJKN). Platform ini menyediakan fitur pelaporan, analisis data keuangan, serta visualisasi kinerja secara interaktif untuk mendukung pengambilan keputusan strategis.",
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
    summary: [
      "Pelaporan",
      "Analisis data keuangan",
      "Visualisasi kinerja secara interaktif",
      "Pengambilan keputusan strategis",
    ],
    link: "#",
    status: "Completed",
    startDate: "2024-05-01",
    endDate: "2024-12-15",
  },
  {
    title: "Telenofilm",
    description: "Aplikasi management pengelolaan jasa studio photografi",
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
    summary: [
      "Pengelolaan jasa studio",
      "Pengelolaan data pelanggan",
      "Pengelolaan data studio",
      "Pengelolaan data transaksi",
    ],
    link: "#",
    status: "Completed",
    startDate: "2023-06-01",
    endDate: "2023-12-15",
  },
  {
    title: "Kampoeng Ciherang",
    description:
      "Sistem informasi managemen pengelolaan tempat wisata kampoeng ciherang",
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
    summary: [
      "Pengelolaan data wisata",
      "Pengelolaan data pengunjung",
      "Pengelolaan data transaksi",
      "Pengelolaan data keuangan",
    ],
    link: "#",
    status: "Completed",
    startDate: "2023-01-15",
    endDate: "2023-05-30",
  },
  {
    title: "Portfolio Web App V1",
    description:
      "Situs web portfolio pribadi yang menampilkan proyek, pengalaman, dan keterampilan saya sebagai pengembang perangkat lunak.",
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
    summary: [
      "Menampilkan proyek-proyek",
      "Menampilkan pengalaman kerja",
      "Menampilkan keterampilan teknis",
      "Menampilkan informasi kontak",
    ],
    link: "https://my-portofolio-ten-rho.vercel.app/",
    status: "Completed",
    startDate: "2023-01-15",
    endDate: "2023-05-30",
  },
  {
    title: "Maximple",
    description:
      "Maximple merupakan produk atau software dari Maksi yang berfungsi untuk mempermudah import data excel ke accurate hanya dengan 1 kali klik.",
    category: "Web App",
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
    summary: [
      "Parsing data dari file excel",
      "Pengelolaan data transaksi",
      "Pengelolaan data keuangan",
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
