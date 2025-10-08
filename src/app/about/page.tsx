'use client'

import DashboardLayout from "@/components/dashboard/Dashboard";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";
import {BriefcaseBusiness, GraduationCap} from "lucide-react";
import {experiences} from "@/app/constant/experience";
import {Timeline, TimelineEducations} from "@/components/common/Timeline";
import {educations} from "@/app/constant/educations";

export default function About() {
    return (
        <DashboardLayout>
            <ShinyText text="About Me" className="text-2xl font-bold mb-4"/>
            <div className="mx-4">
                <StarBorder className="text-left" className2="overflow-hidden flex border-2 rounded-2xl">
                        <div className=" p-6">
                            <p className="text-foreground text-sm">Thank you for visiting my personal website. I'm Fauzi Ramdani, A Software Engineer with over two years of experience in developing efficient, scalable, and user-friendly software solutions. Currently working at PT. Akhdani Reka Solusi and open to remote, freelance, or part-time, as well as new opportunities that support professional growth and long-term career development. Skilled in identifying and fixing software bugs. Proficient in developing web-based applications, desktop applications, and data processing systems. Experienced in building and consuming APIs, managing databases, implementing state management, configuring authentication mechanisms including Single Sign-On (SSO), and optimizing application performance. Able to adapt quickly to new technologies, and collaborative in team environments</p>
                        </div>
                </StarBorder>
            </div>
            <div className="my-5 flex">
                <BriefcaseBusiness/>
                <h1 className="ml-2 text-lg font-semibold">Work Experience</h1>
            </div>
            {
                experiences.map((experience, idx) => (
                    <Timeline key={idx} experience={experience}/>
                ))
            }
            <div className="my-5 flex">
                <GraduationCap/>
                <h1 className="ml-2 text-lg font-semibold">Educations</h1>
            </div>
            {
                educations.map((education, idx) => (
                    <TimelineEducations key={idx} education={education}/>
                ))
            }
        </DashboardLayout>
    )
}