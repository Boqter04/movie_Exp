import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //domains: ["image.tmdb.org"],
     remotePatterns: [
    {
      protocol: "https",
      hostname: "image.tmdb.org",
    },
  ],
  },
};

export default nextConfig;

