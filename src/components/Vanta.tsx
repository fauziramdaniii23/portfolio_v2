'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null)
    const [vantaEffect, setVantaEffect] = useState<any>(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            const effect = GLOBE({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x696972,
                backgroundColor: 0x90909,
            })

            setVantaEffect(effect)
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy()
            }
        }
    }, [vantaEffect])

    return <div ref={vantaRef} className="w-full h-screen"></div>
}