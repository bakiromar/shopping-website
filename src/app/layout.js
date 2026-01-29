import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bakr Omnify",
  description: "Shopping App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      
      >
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
