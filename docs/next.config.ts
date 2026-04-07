import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;
