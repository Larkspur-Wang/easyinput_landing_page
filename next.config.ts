import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/easyinput_landing_page',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
