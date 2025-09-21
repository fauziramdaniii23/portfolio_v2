'use client'
import Lanyard from "@/components/Lanyard"
import {SparklesPreview} from "@/components/Sparkles";
import {SparklesCore} from "@/components/ui/sparkles";
import SplashCursor from "@/components/SplashCursor";
import TextType from "@/components/TextType";
import StarBorder from "@/components/StarBorder";
import {useNavigate} from "@/lib/navigate";

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="relative flex bg-black w-full h-screen overflow-hidden">
            <SplashCursor/>
            {/* SparklesCore jadi background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={60}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className=""></div>

            {/* Konten di atas background */}
            <div className="relative z-10 w-1/2">
                <SparklesPreview />
                <div className="ml-44">
                    <TextType
                        text={["Welcome to my Portfolio", "I am a software engineer", "Build Something Amazing"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        textColors={["#c8c6c6"]}
                    />
                </div>
                <div className="ml-44 mt-6">
                    <StarBorder
                        onClick={() => navigate("/dashboard")}
                        as="button"
                        className="hover:scale-110 transition-all duration-200 transform hover:cursor-pointer"
                        color="white"
                        speed="5s"
                    >
                        <button className="hover:cursor-pointer">My Dashboard</button>
                    </StarBorder>
                </div>

            </div>

            <div className="relative z-10 w-1/2">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
        </main>
    )
}
