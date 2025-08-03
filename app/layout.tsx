import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';
import Footer from "@/components/Footer";
import AosConfig from "@/components/AosConfig";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Liceria - Premium Furniture Store in New Delhi | Shop Online",
  description: "Discover handcrafted furniture at Liceria, your leading furniture store in New Delhi. We offer a wide range of sofas, beds, dining sets, and more, blending quality with exquisite design. Shop online for home and office furniture solutions.",
  keywords: "Liceria furniture, New Delhi furniture, furniture store Delhi, online furniture India, buy sofa Delhi, modern furniture, wooden furniture, bespoke furniture, home decor Delhi, office furniture New Delhi, luxury furniture, affordable furniture",
  openGraph: {
    title: "Liceria - Premium Furniture Store in New Delhi | Shop Online",
    description: "Discover handcrafted furniture at Liceria, your leading furniture store in New Delhi. We offer a wide range of sofas, beds, dining sets, and more, blending quality with exquisite design. Shop online for home and office furniture solutions.",
    url: "https://liceria-xi.vercel.app/",
    siteName: "Liceria Furniture",
    type: "website",
  },
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
        <AosConfig />
        {children}
        <Footer />
      </body>
    </html>
  );
}
