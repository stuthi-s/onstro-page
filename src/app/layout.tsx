import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Onstro",
  description: "About Onstro - A Global Software Solutions Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.icomoon.io/66078/OnstroWordpress/style.css?6t5vdn" />
      </head>
      <body className="bg-white text-[#0D1C42] font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
}