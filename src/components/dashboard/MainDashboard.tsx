import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import VantaBackground from "@/components/Vanta";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import {Braces, MonitorCog} from "lucide-react";
import IconLogo from "@/components/logo/IconLogo";
import {ProgrammingLanguageIconLogos} from "@/app/constant/IconLogos";

type Props = {
    className?: string;
}

export default function MainDashboard({className}: Props) {
    return (
        <div className={className}>
            <div className="overflow-hidden flex border-2 rounded-2xl">
                <div className="w-1/2 p-6">
                    <div className="flex items-center mb-4">
                        <ShinyText text="Hi, I Am Fauzi Ramdani" className="text-xl font-bold"/>
                    </div>
                    <p className="text-foreground text-sm">Saya Seorang Software Engineer dengan pengalaman lebih dari dua tahun dalam mengembangkan solusi perangkat lunak yang efisien, skalabel, dan ramah pengguna. Saat ini bekerja di PT. Akhdani Reka Solusi dan terbuka untuk pekerjaan jarak jauh, lepas, atau paruh waktu, serta peluang baru yang mendukung pertumbuhan profesional dan pengembangan karier jangka panjang.</p>
                </div>
                <div className="w-1/2 h-full">
                    <VantaBackground className="h-full" size={0.80} minWidth={50} color={0xcfcfcf} backgroundColor={0x0A0A0A}/>
                </div>
            </div>
            <div className="mt-10">
                <ShinyText text="Expertise" className="text-xl font-bold"/>
                <p className="mt-2">I have extensive experience working with a variety of technologies, including:</p>
                <div className="flex items-center gap-2 mt-4">
                    <Braces className="size-5"/>
                    <h1>Programming Language:</h1>
                </div>
                <div className="flex">
                    {ProgrammingLanguageIconLogos.map((data, index) => (
                        <IconLogo
                            key={index}
                            name={data.name}
                            color={data.color}
                            pathLogo={data.pathLogo}
                            width={data.width}
                            height={data.height}
                        />
                    ))}
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)">
                        <div>

                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    )
}