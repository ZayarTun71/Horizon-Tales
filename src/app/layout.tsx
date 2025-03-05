import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.scss";
import Preloader from "@/components/Preloader";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Horizon Tales",
  description: " Beautiful stories from the horizons of the world, crafted  by Ryan | Zay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Preloader />
        <Suspense fallback={<Preloader />}>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
