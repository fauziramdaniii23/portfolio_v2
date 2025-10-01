import {TExperience} from "@/app/type/type";

export const experiences: TExperience[] = [
    {
        id: "1",
        company: "PT Akhdani Reka Solusi",
        role: "Software Engineer",
        period: "May 2024 — Present",
        location: "Bandung, ID",
        summary:
            "Membangun antarmuka web responsif dengan React dan shadcn/ui, berfokus pada aksesibilitas, performa, dan konsistensi desain.",
        achievements: [
            "Mengimplementasikan sistem design token yang menurunkan inkonsistensi UI sebesar 40%",
            "Mengurangi waktu muat halaman utama ~30% melalui optimasi bundling dan code-splitting",
            "Berkolaborasi lintas tim untuk merancang alur onboarding pengguna baru",
        ],
        skills: ["React", "TypeScript", "Next.js", "shadcn/ui", "SWR", "Tailwind CSS"],
    },
    {
        id: "2",
        company: "Inovasi Karya Mandiri",
        role: "Software Engineer",
        period: "Sep 2021 — Des 2022",
        location: "Bandung, ID",
        summary:
            "Mengembangkan fitur full-stack di aplikasi internal, termasuk pembuatan API dan integrasi dengan database.",
        achievements: [
            "Mendesain dan membangun 8+ endpoint API dengan praktik terbaik keamanan",
            "Meningkatkan stabilitas sistem melalui observability dan logging yang lebih baik",
        ],
        skills: ["Node.js", "REST API", "PostgreSQL", "Testing"],
    },
    {
        id: "3",
        company: "Freelance",
        role: "Web Developer",
        period: "2019 — 2021",
        summary:
            "Mengerjakan proyek website landing page dan dashboard ringan untuk UKM, fokus pada UX dan kemudahan perawatan.",
        achievements: [
            "Membuat komponen reusable yang mempercepat waktu pengembangan proyek berikutnya",
            "Menerapkan praktik aksesibilitas dasar: struktur semantik, fokus yang jelas, dan kontras warna",
        ],
        skills: ["React", "CSS", "Aksesibilitas", "UI/UX"],
    },
]