import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase the limit (adjust as needed)
    },
  },
};

export default nextConfig;
