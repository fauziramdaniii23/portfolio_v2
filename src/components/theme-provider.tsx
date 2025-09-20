"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from '@/app/js/nprogress';

export function ThemeProvider({children, ...props}: React.ComponentProps<typeof NextThemesProvider>) {
    const pathname = usePathname();

    useEffect(() => {
        NProgress.done();
    }, [pathname]);
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}