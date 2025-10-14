import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { ThemeProvider } from "@/components/providers/theme-provider";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fauzi Ramdani | Portfolio",
  description: "Personal portfolio website of Fauzi Ramdani",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${robotoFlex.className} antialiased`}
      >
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
