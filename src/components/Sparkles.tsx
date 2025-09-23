"use client";
import React from "react";
import {SparklesCore} from "@/components/ui/sparkles";
import ShinyText from "@/components/ShinyText";

export function SparklesPreview() {
    return (
        <div>
            <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <ShinyText
                text="Fauzi Ramdani"
                disabled={false}
                speed={10}
                className='custom-class text-4xl lg:text-6xl'
            />
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.8}
                    maxSize={1}
                    particleDensity={1500}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            </div>
        </div>
    );
}
