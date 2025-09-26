'use client'

import DashboardLayout from "@/components/dashboard/Dashboard";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";

export default function About() {
    return (
        <DashboardLayout>
            <ShinyText text="About Me" className="text-2xl font-bold mb-4"/>
            <div className="">
                <StarBorder className="text-left border">
                    <p className="leading-loose">Thank you for visiting my personal website. I'm Fauzi Ramdani, A Software Engineer with over two years of experience in developing efficient, scalable, and user-friendly software
                        solutions. Currently working at PT. Akhdani Reka Solusi and open to remote, freelance, or part-time, as well as new
                        opportunities that support professional growth and long-term career development. Skilled in identifying and fixing
                        software bugs. Proficient in developing web-based applications, desktop applications, and data processing systems.
                        Experienced in building and consuming APIs, managing databases, implementing state management, configuring
                        authentication mechanisms including Single Sign-On (SSO), and optimizing application performance. Able to adapt
                        quickly to new technologies, and collaborative in team environments</p>
                </StarBorder>

            </div>

        </DashboardLayout>
    )
}