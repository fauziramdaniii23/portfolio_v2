'use client'

import DashboardLayout from "@/components/dashboard/Dashboard";
import {useState} from "react";
import {categories, projects} from "@/app/constant/projects";
import ShinyText from "@/components/ShinyText";
import { ProjectFilter } from "@/components/project/ProjectFilter";
import { ProjectCard } from "@/components/project/ProjectCard";

export default function Project() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredProjects =
        activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-background">
                <ShinyText text="Projects" className="text-2xl font-bold mb-4"/>
                <div className="mb-8 border-b pb-4">
                    Saya telah berkontribusi dalam berbagai proyek, baik dalam lingkup pemeliharaan maupun pengembangan sistem. Selain itu, saya juga memiliki beberapa proyek independen yang saya kembangkan secara mandiri untuk mengasah kemampuan dan memperluas wawasan teknis.
                </div>

                {/* Filter Section */}
                <section className="container mx-auto px-4 pb-8">
                    <ProjectFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
                </section>

                {/* Projects Grid */}
                <section className="container mx-auto px-4 pb-24">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
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