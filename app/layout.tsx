import type { Metadata } from "next";

import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oscar Castaneda | Software Engineer",
  description:
    "Oscar Castaneda is a software engineer who develops financial software with an emphasis on visual design. Explore his portfolio, projects, and experience.",
  keywords: [
    "Oscar Castaneda",
    "Software Engineer",
    "Financial Software",
    "Frontend Developer",
    "UI Design",
    "Visual Design",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable}  antialiased`}>
        <div className="w-full">
          <div className="container px-5 md:px-6 mx-auto">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
