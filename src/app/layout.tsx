import type { Metadata } from "next";
import LayoutProps from "next"
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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

const RootLayout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${robotoFlex.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
