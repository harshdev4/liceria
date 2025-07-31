import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Project 1",
  description: "Project 1 to showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Navbar></Navbar>
        <div className="h-[65px]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
