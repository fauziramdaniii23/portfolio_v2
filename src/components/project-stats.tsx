"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface Stat {
  label: string
  value: number
  suffix?: string
}

const stats: Stat[] = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 35, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
]

export function ProjectStats() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = stats.map((stat) => stat.value / steps)

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCounts(stats.map((stat, index) => Math.min(Math.floor(increment[index] * currentStep), stat.value)))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
        >
          <div className="mb-2 text-4xl font-bold text-accent">
            {counts[index]}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </Card>
      ))}
    </div>
  )
}
