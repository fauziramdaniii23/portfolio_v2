'use client';

import { Lobster, Alumni_Sans, Geo } from 'next/font/google'
export const lobster = Lobster({
    subsets: ['latin'],
    weight: '400',
})
export const alumniSans = Alumni_Sans({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-alumni-sans',
})
export const geo = Geo({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-geo',
})
