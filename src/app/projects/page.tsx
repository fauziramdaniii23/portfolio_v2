'use client'

import DashboardLayout from "@/components/dashboard/Dashboard";
import {useState} from "react";
import {categories, projects} from "@/constant/projects";
import ShinyText from "@/components/ShinyText";
import { ProjectFilter } from "@/components/project/ProjectFilter";
import { ProjectCard } from "@/components/project/ProjectCard";
import { useTranslations } from "next-intl";
import StarBorder from "@/components/StarBorder";

export default function Project() {
    const [query, setQuery] = useState("All");
    const filteredProjects = query === "All" ? projects : projects.filter((project) =>
    project.category.toLowerCase().includes(query.toLowerCase()) ||
    project.role.toLowerCase().includes(query.toLowerCase()));

    const t = useTranslations("projectPage");

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-background">
                <ShinyText text={t("title")} className="text-2xl font-bold mb-4"/>
                <StarBorder
                    as="div"
                    className="text-left"
                    className2="p-6 overflow-hidden border-2 rounded-2xl"
                    >
                        {t("description")}
                </StarBorder>                               

                {/* Filter Section */}
                <section className="container mx-auto px-4 py-8">
                    <ProjectFilter categories={categories} activeCategory={query} onCategoryChange={setQuery} />
                </section>

                {/* Projects Grid */}
                <section className="container mx-auto px-4 pb-24">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="py-16 text-center">
                            <p className="text-lg text-muted-foreground">Tidak ada project dalam kategori ini.</p>
                        </div>
                    )}
                </section>
            </div>
        </DashboardLayout>
    )
}