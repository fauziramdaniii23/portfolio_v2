'use client'
import Link from "next/link"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {ExternalLink, ArrowLeft, Tag, Calendar} from "lucide-react"
import {useDetailProjectStore} from "@/store/detailProjectStore";
import DashboardLayout from "@/components/dashboard/Dashboard";
import SpotlightCard from "@/components/SpotlightCard"
import ShinyText from "@/components/ShinyText"
import GradientText from "@/components/GradientText"

export default function ProjectDetailPage() {
    const project = useDetailProjectStore(state => state.data)

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-background">
                <main>
                    {/* Hero */}
                    <section className="container mx-auto px-4 pt-8 pb-6 md:pt-12">
                        <div className="grid gap-6 md:grid-cols-5 md:items-start">
                            <div className="md:col-span-3 rounded-xl overflow-hidden bg-cover bg-center h-full" 
                                style={{backgroundImage: `url(${project.image || "/placeholder.svg"})`}}
                            >
                            </div>

                            <div className="md:col-span-2">
                                <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)">
                                    
                                    <div className="mb-3 flex items-center gap-2">
                                        <Badge variant="secondary" className="text-xs font-medium">
                                            {project.category}
                                        </Badge>
                                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5"/>{project.year}</span>
                                    </div>

                                    <ShinyText text={project.title} className="text-2xl md:text-3xl font-bold text-balance"/>
                                    <GradientText
                                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                        animationSpeed={10}
                                        showBorder={false}
                                    >{project.role}</GradientText>

                                    <div className="mt-5">
                                        <h3 className="mb-2 text-sm font-semibold text-foreground inline-flex items-center gap-2">
                                            <Tag className="h-4 w-4 text-accent"/>
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.logoTags.map((tag) => (
                                                <Badge
                                                key={tag.name}
                                                    variant="outline"
                                                    className="border-accent/30 bg-accent/10 text-accent-foreground"
                                                >
                                                    {tag.logo}
                                                    {tag.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-3">
                                        <Button asChild>
                                            <Link href="/projects" aria-label="Kembali ke daftar project">
                                                <ArrowLeft className="mr-2 h-4 w-4"/>
                                                Kembali
                                            </Link>
                                        </Button>

                                        {project.link && (
                                            <Button variant="secondary" asChild>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                   aria-label="Kunjungi project">
                                                    <ExternalLink className="mr-2 h-4 w-4"/>
                                                    Kunjungi Project
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                
                                </SpotlightCard>
                            </div>
                        </div>
                    </section>

                    {/* Details */}
                    <section className="container mx-auto px-4 pb-12">
                        <div className="grid gap-6 md:grid-cols-3">
                            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)" className="p-6 md:col-span-2">
                            
                                <ShinyText text="Ringkasan" className="text-xl font-bold"/>
                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                                <ul className="mt-4 list-disc pl-5 text-muted-foreground leading-relaxed">
                                    {project.summary.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </SpotlightCard>

                            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)">
                            
                                <ShinyText text="Informasi" className="text-xl font-bold"/>
                                <div className="mt-4 space-y-3 text-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Kategori</span>
                                        <span className="text-foreground">{project.category}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Role</span>
                                        <span className="text-foreground">{project.role}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Tahun</span>
                                        <span className="text-foreground">{project.year}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Mulai Pengerjaan</span>
                                        <span className="text-foreground">
                                        {project.startDate
                                            ? new Date(project.startDate).toLocaleDateString("id-ID", {
                                                month: "long",
                                                year: "numeric",
                                            })
                                            : "-"}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Selesai Pengerjaan</span>
                                        <span className="text-foreground">
                                        {project.endDate
                                            ? new Date(project.endDate).toLocaleDateString("id-ID", {
                                                month: "long",
                                                year: "numeric",
                                            })
                                            : project.status === "In Progress"
                                            ? "Sedang Berjalan"
                                            : "-"}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Jumlah Teknologi</span>
                                        <span className="text-foreground">{project.logoTags.length}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Status</span>
                                        <span className="text-foreground">{project.status}</span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </section>
                </main>
            </div>
        </DashboardLayout>
    )
}
