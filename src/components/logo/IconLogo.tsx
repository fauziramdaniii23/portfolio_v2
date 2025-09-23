"use client"

import { useState } from "react"
import Image from "next/image"
import {IconLogos} from "@/app/type/type";

export default function IconLogo({name, color, pathLogo, width, height }: IconLogos) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative w-fit m-7 flex items-center justify-center">
            <div className={`relative transition-all duration-500 cursor-pointer select-none`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`absolute inset-0 rounded-4xl transition-all duration-700 ${color} blur-xl ${
                        isHovered
                            ? "scale-150"
                            : ""
                    }`}
                />

                <div className={`relative transition-all duration-500 ${isHovered ? "scale-110" : "scale-100 rotate-0"}`}>
                    <Image
                        src={pathLogo}
                        alt="Logo"
                        width={width ? width : 50}
                        height={height ? height : 50}
                        className={`transition-all duration-300 ${isHovered ? "drop-shadow-2xl" : "drop-shadow-lg"}`}
                    />
                </div>

                <div className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-400 z-10 ${
                        isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                    }`}
                >
                    <div className={`${color} text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-xl` }>
                        <div className="flex items-center gap-2">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
