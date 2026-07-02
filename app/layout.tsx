import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { websiteSchema } from "@/components/seo/website-schema";
import { personSchema } from "@/components/seo/person-schema";
import JsonLd from "@/components/seo/JsonLd";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Manish Rai | Full Stack Developer in Nepal | Software Engineer",
    template: "%s | Manish Rai",
  },

  description:
    "Manish Rai is a Full Stack Developer in Nepal with 4+ years building scalable apps using Node.js, Next.js, TypeScript, PostgreSQL, Docker.",
  keywords: [
    "Manish Rai",
    "Full Stack Developer",
    "Full Stack Developer in Nepal",
    "Nepal Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Docker",
    "REST API",
    "Backend Developer",
    "Frontend Developer",
    "MERN Stack",
    "Software Engineer",
    "Web Developer Nepal",
  ],
  authors: [{ name: "Manish Rai" }],
  creator: "Manish Rai",
  publisher: "Manish Rai",
  applicationName: "Manish Rai Portfolio",
  category: "Technology",
  metadataBase: new URL("https://raimanish.com.np"),

  openGraph: {
    title: "Manish Rai | Full Stack Developer",
    description:
      "Full Stack Developer from Nepal with 4+ years of experience specializing in Node.js, React, Next.js, TypeScript, and scalable web application development.",
    url: "https://raimanish.com.np",
    siteName: "Manish Rai Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manish Rai - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Manish Rai | Full Stack Developer",
    description:
      "4+ years of experience building modern web applications with Node.js, React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://raimanish.com.np",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", jetBrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}
