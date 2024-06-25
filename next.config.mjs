/** @type {import('next').NextConfig} */

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
    images: {
        // Add the hostname of the images that the API use, for add optimizations.
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
            },
        ],
    },
};

if (process.env.NODE_ENV === "development") {
    await setupDevPlatform({
        persistent: true,
    });
}

export default nextConfig;
