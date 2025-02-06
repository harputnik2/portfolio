import type { NextConfig } from "next";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/karor",
};

export default nextConfig;
