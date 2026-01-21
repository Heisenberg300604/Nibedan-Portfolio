import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CustomCursor from "@/components/Common/CustomCursor";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nibedan Pati | Full Stack Developer & SIH Grand Finalist",
  description: "Portfolio of Nibedan Pati - 5x Hackathon Winner, Smart India Hackathon Grand Finalist, Full Stack Developer specializing in Web Development, Mobile Development, and DevOps. Expert in React, Next.js, React Native & AWS. BTech IT student at BPIT.",
  keywords: [
    "Nibedan Pati",
    "Full Stack Developer",
    "SIH Grand Finalist",
    "Smart India Hackathon",
    "Hackathon Winner",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Mobile Developer",
    "React Native",
    "DevOps",
    "AWS",
    "Web Developer India",
    "BTech Developer",
    "BPIT",
    "Software Engineer"
  ],
  authors: [{ name: "Nibedan Pati", url: "https://github.com/Heisenberg300604" }],
  creator: "Nibedan Pati",
  publisher: "Nibedan Pati",
  openGraph: {
    title: "Nibedan Pati | Full Stack Developer & SIH Grand Finalist",
    description: "5x Hackathon Winner | Smart India Hackathon Grand Finalist | Full Stack Developer specializing in Web, Mobile & DevOps",
    url: "https://nibedan-portfolio.vercel.app",
    siteName: "Nibedan Pati Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nibedan Pati | Full Stack Developer & SIH Grand Finalist",
    description: "5x Hackathon Winner | SIH Grand Finalist | Full Stack Developer",
    creator: "@nibedan",
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
  icons: {
    icon: "/Nibedan.svg",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/Nibedan.svg" type="image/svg+xml" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <CustomCursor />
        <Toaster position="top-center" richColors />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      <Analytics />
      </body>
    </html>
  );
}
