import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import VantaBackground from "@/components/Vanta";
import ShinyText from "@/components/ShinyText";

type Props = {
    className?: string;
}

export default function MainDashboard({className}: Props) {
    return (
        <div className={className}>
            <div className=" overflow-hidden flex border border-2 rounded-2xl">
                <div className="w-1/2 p-6">
                    <div className="flex items-center mb-4">
                        <ShinyText text="Hi, I Am Fauzi Ramdani" className="text-xl font-bold"/>
                    </div>
                    <p className="text-neutral-200 text-sm">Bekerja sebagai Software Engineer dengan pengalaman lebih dari dua tahun dalam mengembangkan solusi perangkat lunak yang efisien, skalabel, dan ramah pengguna. Saat ini bekerja di PT. Akhdani Reka Solusi dan terbuka untuk pekerjaan jarak jauh, lepas, atau paruh waktu, serta peluang baru yang mendukung pertumbuhan profesional dan pengembangan karier jangka panjang.</p>
                </div>
                <div className="w-1/2 h-full">
                    <VantaBackground className="h-full" size={0.80} minWidth={50} color={0xcfcfcf} backgroundColor={0x0A0A0A}/>
                </div>
            </div>
        </div>
    )
}