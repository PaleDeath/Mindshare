import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // strict mode double-invokes effects which breaks GSAP init
};

export default nextConfig;
