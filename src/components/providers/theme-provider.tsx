"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "@/lib/js/nprogress";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // hindari mismatch antara SSR dan client
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
