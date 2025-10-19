import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: false
};

export default withNextIntl(nextConfig);
