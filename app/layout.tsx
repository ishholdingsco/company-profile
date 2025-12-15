import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Merriweather, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { UNDER_CONSTRUCTION } from "./config";
import { UnderConstruction } from "@/components/under-construction";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ISH Technologies",
  description: "We are a consolidated technologies company, offering cutting-edge solutions at scale. Specializing in automation, computer vision, machine learning, and mining technology solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${merriweather.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {UNDER_CONSTRUCTION ? <UnderConstruction /> : children}
      </body>
    </html>
  );
}
