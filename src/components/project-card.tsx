"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import {TProject} from "@/types/type";
import {useNavigate} from "@/lib/navigate";
import {useDetailProjectStore} from "@/store/detailProjectStore";

interface ProjectCardProps {
  project: TProject
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const projectStore = useDetailProjectStore(state => state)

  const onDetailProject = (data : TProject) => {
    projectStore.setDetailProject(data)
    navigate('/projects/detail')
  }

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-90" : "opacity-60"
          }`}
        />

        {project.link && (
          <a
            onClick={() => onDetailProject(project)}
            className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-lg transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            aria-label="View project"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {project.category}
            </Badge>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3
              onClick={() => onDetailProject(project)}
              className="mb-2 text-xl font-bold text-card-foreground text-balance hover:underline underline-offset-4 decoration-accent hover:cursor-pointer">
              {project.title}
          </h3>

          <div
            className={`mt-4 flex flex-wrap gap-2 transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-accent/30 bg-accent/10 text-accent-foreground text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
