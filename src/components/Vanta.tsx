'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'
import DOTS from 'vanta/dist/vanta.dots.min'
import NET from 'vanta/dist/vanta.net.min'

interface VantaGlobeProps {
    className?: string;
    color?: number;
    color2?: number;
    backgroundColor?: number;
    minHeight?: number;
    minWidth?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    scale?: number;
    size?: number;
}

export function VantaGlobe({
    className = "w-full h-full",
    color = 0x696972,
    color2 = 0xffffff,
    backgroundColor = 0x090909,
    minHeight = 200.00,
    minWidth = 200.00,
    mouseControls = true,
    touchControls = true,
    scale = 1.00,
    size = 1.00,
}: VantaGlobeProps) {
    const vantaRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            const effect = GLOBE({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls,
                touchControls,
                gyroControls: false,
                minHeight: minHeight,
                minWidth: minWidth,
                scale: scale,
                scaleMobile: scale,
                color: color,
                color2: color2,
                backgroundColor : backgroundColor,
                size: size,
            })

            setVantaEffect(effect)
        }
    }, [vantaEffect, color, backgroundColor, mouseControls, touchControls, scale])

    return (
        <div
            ref={vantaRef}
            className={className}
        />
    )
}

interface VantaDotsProps {
    className?: string;
    color?: number;
    color2?: number;
    backgroundColor?: number;
    minHeight?: number;
    minWidth?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    scale?: number;
    size?: number;
    spacing?: number;
}

export function VantaDots({
   className = "w-full h-full",
   color = 0x696972,
   color2 = 0xffffff,
   backgroundColor = 0x090909,
   minHeight = 200.00,
   minWidth = 200.00,
   mouseControls = true,
   touchControls = true,
   scale = 1.00,
   size = 1.00,
    spacing= 20.00,
}: VantaDotsProps) {
    const vantaRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            const effect = DOTS({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls,
                touchControls,
                gyroControls: false,
                minHeight: minHeight,
                minWidth: minWidth,
                scale: scale,
                scaleMobile: scale,
                color: color,
                color2: color2,
                backgroundColor : backgroundColor,
                size: size,
                spacing: spacing,
            })

            setVantaEffect(effect)
        }
    }, [vantaEffect, color, backgroundColor, mouseControls, touchControls, scale])

    return (
        <div
            ref={vantaRef}
            className={className}
        />
    )
}
interface VantaNetProps {
    className?: string;
    color?: number;
    color2?: number;
    backgroundColor?: number;
    minHeight?: number;
    minWidth?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    scale?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
}

export function VantaNet({
   className = "w-full h-full",
   color = 0x696972,
   backgroundColor = 0x090909,
   minHeight = 250.00,
   minWidth = 200.00,
   mouseControls = true,
   touchControls = true,
   scale = 1.00,
   points = 10.00,
    maxDistance = 20.00,
    spacing= 20.00,
}: VantaNetProps) {
    const vantaRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            const effect = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls,
                touchControls,
                gyroControls: false,
                minHeight: minHeight,
                minWidth: minWidth,
                scale: scale,
                scaleMobile: scale,
                color: color,
                backgroundColor : backgroundColor,
                points: points,
                maxDistance: maxDistance,
                spacing: spacing,
            })

            setVantaEffect(effect)
        }
    }, [vantaEffect, color, backgroundColor, mouseControls, touchControls, scale])

    return (
        <div
            ref={vantaRef}
            className={className}
        />
    )
}