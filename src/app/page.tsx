'use client'
import Lanyard from "@/components/Lanyard"
import {SparklesPreview} from "@/components/Sparkles";
import {SparklesCore} from "@/components/ui/sparkles";
import SplashCursor from "@/components/SplashCursor";
import TextType from "@/components/TextType";
import StarBorder from "@/components/StarBorder";
import {useNavigate} from "@/lib/navigate";
import {geo} from "@/lib/font";

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="relative flex bg-black w-full lg:h-screen overflow-hidden">
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

            {/* Konten di atas background */}
            <div className="flex lg:flex-row-reverse w-full">
                <div className="relative hidden lg:block z-10 lg:w-1/2">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                </div>
                <div className="relative flex flex-col justify-center items-center h-screen z-10 w-full lg:w-1/2">
                    <SparklesPreview />
                    <div className="text-center lg:mt-10">
                        <TextType
                            text={["Welcome to my Portfolio", "I am a software engineer", "Build Something Amazing"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            textColors={["#c8c6c6"]}
                            className={`${geo.className} text-2xl`}
                        />
                    </div>
                    <div className="text-center mt-6">
                        <StarBorder
                            onClick={() => navigate("/dashboard")}
                            as="button"
                            className="hover:scale-110 transition-all duration-200 transform hover:cursor-pointer"
                            className2="bg-gradient-to-b from-black to-gray-900 border border-gray-800"
                            color="white"
                            speed="5s"
                        >
                            <button className="hover:cursor-pointer">My Dashboard</button>
                        </StarBorder>
                    </div>
                </div>
            </div>
        </main>
    )
}
