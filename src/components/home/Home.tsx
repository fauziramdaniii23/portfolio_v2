import {CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import {Braces, Library, PencilLine,} from "lucide-react";
import IconLogo from "@/components/logo/IconLogo";
import {FrameworkIconLogos, ProgrammingLanguageIconLogos, techLogos, ToolsIconLogos} from "@/constant/IconLogos";
import {Services} from "@/constant/constant";
import GradientText from "@/components/GradientText";
import LogoLoop from "@/components/LogoLoop";
import {VantaGlobe} from "@/components/Vanta";
import { useTranslations } from "next-intl";

type Props = {
    className?: string;
}

export default function Home({className}: Props) {
    const t = useTranslations("HomePage");
    return (
        <div className={className}>
            <div className="overflow-hidden flex border-2 rounded-2xl">
                <div className="flex-1 py-4 pl-6">
                    <div className="flex items-center mb-2">
                        <ShinyText text={t("greeting")} className="text-xl font-bold"/>
                    </div>
                    <p className="text-foreground text-sm">
                        {t("description")}
                    </p>
                </div>
                <div className="w-1/2 h-full">
                    <VantaGlobe className="h-full" size={0.80} minWidth={50} color={0xcfcfcf} backgroundColor={0x0A0A0A}/>
                </div>
            </div>
            <div className="my-5 border-b py-5">
                <ShinyText text={t("expertise.title")} className="text-2xl font-bold"/>
                <p className="mt-2">{t("expertise.description")}</p>
                <div className="flex items-center gap-2 mt-4">
                    <Braces className="size-5"/>
                    <h1>{t("expertise.programmingLanguages")}</h1>
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
                    <h1>{t("expertise.frameworksLibraries")}</h1>
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
                    <h1>{t("expertise.tools")}</h1>
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
                <ShinyText text={t("services.title")} className="text-2xl font-bold"/>
                <p className="mt-2">{t("services.description")}</p>
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
                                                {t(`services.serviceList.${data.id}.title`)}
                                            </GradientText>
                                        </CardTitle>
                                        <CardDescription className="text-center">
                                            {t(`services.serviceList.${data.id}.description`)}
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