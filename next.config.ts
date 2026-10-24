import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Firebase Hosting (separate from main maqsad.sa App Hosting).
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
