'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

interface VantaBackgroundProps {
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

export default function VantaBackground({
    className = "w-full",
    color = 0x696972,
    color2 = 0xffffff,
    backgroundColor = 0x090909,
    minHeight = 200.00,
    minWidth = 200.00,
    mouseControls = true,
    touchControls = true,
    scale = 1.00,
    size = 1.00,
}: VantaBackgroundProps) {
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