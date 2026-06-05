import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fauza Lutfia Portfolio",
  description:
    "Explore Fauza Lutfia's portfolio featuring web, mobile, and UI/UX projects built with clean interfaces, structured systems, Next.js, and Tailwind CSS.",
  icons: {
    icon: [
      {
        url: "/logo-fl.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo-fl.png",
    apple: "/logo-fl.png",
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
        className={`${inter.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col bg-[#FAF8F0] text-[#111111] antialiased transition-colors dark:bg-[#0B0B0C] dark:text-[#F5F5F5]`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}