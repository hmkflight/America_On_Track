import type { NextConfig } from "next";
import legacyRoutes from "./src/lib/legacy-routes.json";
const config: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(legacyRoutes).map(([path, destination]) => ({ source: `/${path}`, destination, permanent: true })),
      { source: "/wp-content/uploads/2026/03/Schedule-Location-of-The-Huntington-Club-2026.pdf", destination: "/documents/golf-schedule-2026.pdf", permanent: true },
    ];
  },
  devIndicators: false,
  turbopack: { root: process.cwd() },
  images: { formats: ["image/avif", "image/webp"] },
};
export default config;
