import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vritti — Scholarships, matched to you",
  description:
    "Vritti is a scholarship search engine for Indian students. Discover central, state and private scholarships, track deadlines, and apply in one place.",
  keywords: [
    "scholarships",
    "India",
    "student scholarships",
    "chhatravritti",
    "financial aid",
    "education",
  ],
  openGraph: {
    title: "Vritti — Scholarships, matched to you",
    description:
      "Discover central, state and private scholarships for Indian students. One profile, every opportunity.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
