'use client'

import DashboardLayout from "@/components/dashboard/Dashboard";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";
import {BriefcaseBusiness, Download, GraduationCap} from "lucide-react";
import {experiences} from "@/constant/experience";
import {Timeline, TimelineEducations} from "@/components/common/Timeline";
import {educations} from "@/constant/educations";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('AboutPage');
    const descriptionLines = t.raw('description') as string[];
    const [loadDownloadCV, setLoadDownloadCV] = useState(false);

    const handleDownloadCV = async () => {
        setLoadDownloadCV(true);
        try {
            const response = await fetch('/cv/Fauzi-Ramdani.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Fauzi-Ramdani.pdf');
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
        } catch (error) {
            console.error("Failed to download CV:", error);
        } finally {
            setLoadDownloadCV(false);
        }
    };
    return (
        <DashboardLayout>
            <ShinyText text={t("title")} className="text-2xl font-bold mb-4"/>
            <div className="mx-4">
                <StarBorder as="div" className="text-left" className2="p-6 overflow-hidden border-2 rounded-2xl">
                    <ShinyText text={t("greeting")} className="text-xl font-bold mb-2"/>
                    <div className="border-b pb-4">
                        {descriptionLines.map((line, idx) => (
                            <p key={idx} className="text-foreground text-sm py-2">{line}</p>
                        ))}
                    </div>
                    <StarBorder
                        onClick={handleDownloadCV}
                        className="hover:scale-105 transition-all duration-300 transform hover:cursor-pointer mt-4"
                        className2="border px-6"
                        color="white"
                        speed="5s"
                        >
                        <p className="hover:cursor-pointer flex items-center justify-center gap-2">{loadDownloadCV ? <Spinner className="text-primary"/> : <Download size={16} className="text-primary"/>}{t("downloadCV")}</p>
                    </StarBorder>
                </StarBorder>
            </div>
            <div className="my-5 flex">
                <BriefcaseBusiness/>
                <h1 className="ml-2 text-lg font-semibold">{t("Experience.Work.title")}</h1>
            </div>
            {
                experiences.map((experience, idx) => (
                    <Timeline key={idx} experience={experience}/>
                ))
            }
            <div className="my-5 flex">
                <GraduationCap/>
                <h1 className="ml-2 text-lg font-semibold">{t("Experience.Educations.title")}</h1>
            </div>
            {
                educations.map((education, idx) => (
                    <TimelineEducations key={idx} education={education}/>
                ))
            }
        </DashboardLayout>
    )
}