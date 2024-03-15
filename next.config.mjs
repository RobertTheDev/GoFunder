/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfigured = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzerConfigured({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
});

export default nextConfig;
