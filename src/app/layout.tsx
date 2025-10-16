import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Full-Stack Developer & Web3 Enthusiast`,
    template: `%s | ${DATA.name}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.jpg",
  },
  description: "Portfolio of Ayush Jain, a third-year Computer Science student and 5x patent holder specializing in Generative AI, Web3, and Full-Stack Development with experience in React, Node.js, and blockchain technologies.",
  keywords: [
    "Ayush Jain",
    "Full-Stack Developer", 
    "Web3",
    "Generative AI",
    "React",
    "Node.js",
    "Blockchain",
    "Portfolio",
    "Computer Science",
    "Patent Holder",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Solidity",
    "ABES Engineering College"
  ],
  authors: [{ name: "Ayush Jain" }],
  creator: "Ayush Jain",
  openGraph: {
    title: `${DATA.name} | Full-Stack Developer & Web3 Enthusiast`,
    description: "Portfolio of Ayush Jain, a third-year Computer Science student and 5x patent holder specializing in Generative AI, Web3, and Full-Stack Development with experience in React, Node.js, and blockchain technologies.",
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ayu.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Jain - Full-Stack Developer & Web3 Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Full-Stack Developer & Web3 Enthusiast`,
    description: "Portfolio of Ayush Jain, a third-year Computer Science student and 5x patent holder specializing in Generative AI, Web3, and Full-Stack Development.",
    images: ["/ayu.jpg"],
    creator: "@urayushjain",
    site: "@urayushjain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add your Google Search Console verification code here
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}