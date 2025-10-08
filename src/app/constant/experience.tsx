import {TExperience} from "@/type/type";

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
        logo: "/logo/institutions/akhdani.png"
    },
    {
        id: "2",
        company: "PT Maksi Media Indonesia",
        role: "Backend Developer",
        period: "Oct 2022 — Jan 2023",
        location: "Bandung, ID",
        summary:
            "Mengembangkan fitur full-stack di aplikasi internal, termasuk pembuatan API dan integrasi dengan database.",
        achievements: [
            "Mendesain dan membangun 8+ endpoint API dengan praktik terbaik keamanan",
            "Meningkatkan stabilitas sistem melalui observability dan logging yang lebih baik",
        ],
        logo: "/logo/institutions/maksi.png"
    }
]