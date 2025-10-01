import {CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import VantaBackground from "@/components/Vanta";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import {Braces, Library, PencilLine,} from "lucide-react";
import IconLogo from "@/components/logo/IconLogo";
import {FrameworkIconLogos, ProgrammingLanguageIconLogos, techLogos, ToolsIconLogos} from "@/app/constant/IconLogos";
import {Services} from "@/app/constant/constant";
import GradientText from "@/components/GradientText";
import LogoLoop from "@/components/LogoLoop";

type Props = {
    className?: string;
}

export default function Home({className}: Props) {
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
            <div className="my-5 border-b py-5">
                <ShinyText text="Expertise" className="text-2xl font-bold"/>
                <p className="mt-2">I have extensive experience working with a variety of technologies, including:</p>
                <div className="flex items-center gap-2 mt-4">
                    <Braces className="size-5"/>
                    <h1>Programming Language:</h1>
                </div>
                <div className="flex flex-wrap">
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
                <div className="flex border-t pt-8 items-center gap-2 mt-4">
                    <Library/>
                    <h1>Framework & Library:</h1>
                </div>
                <div className="flex flex-wrap">
                    {FrameworkIconLogos.map((data, index) => (
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
                <div className="flex border-t pt-8 items-center gap-2 mt-4">
                    <PencilLine/>
                    <h1>Tools:</h1>
                </div>
                <div className="flex flex-wrap">
                    {ToolsIconLogos.map((data, index) => (
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
            </div>
            <div className="my-5 border-b py-5">
                <ShinyText text="Services" className="text-2xl font-bold"/>
                <p className="mt-2">My key practices in the workplace</p>
                <div className="mt-4 grid grid-cols-4 gap-4">
                    {Services.map((data, index) => {
                        const Icon = data.icon;
                        return (
                            <div key={index}>
                                <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)" className="w-full h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 flex-col mb-2">
                                            <Icon className="h-6 w-6"/>
                                            <GradientText
                                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                animationSpeed={10}
                                                showBorder={false}
                                            >
                                                {data.title}
                                            </GradientText>
                                        </CardTitle>
                                        <CardDescription className="text-center">
                                            {data.description}
                                        </CardDescription>
                                    </CardHeader>
                                </SpotlightCard>
                            </div>
                        )
                    })}
                </div>
            </div>
            <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={28}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                ariaLabel="Technology partners"
            />
        </div>
    )
}