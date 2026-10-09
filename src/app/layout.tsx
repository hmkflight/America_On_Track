import type { Metadata } from "next";
import "@fontsource-variable/unbounded";
import "@fontsource-variable/public-sans";
import "./globals.css";
import { Shell } from "@/components/shell";
export const metadata: Metadata = {
  title: {
    default: "America On Track — The whole picture",
    template: "%s · America On Track",
  },
  description:
    "Every side of growing up. Youth leadership, mentoring and community health in Orange County since 1995.",
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
