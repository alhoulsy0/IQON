import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAgent from "@/components/FloatingAgent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qertex | Intelligence. Switched On.",
  description: "Deep-Tech Architecture & Enterprise Engineering. Leading the industry in Software Quality, AI Technology, Cybersecurity, and Strategic Staffing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
        {/* <FloatingAgent /> */}
      </body>
    </html>
  );
}
