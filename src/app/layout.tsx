import { TailwindIndicator } from "@/components/custom/TailwindIndicator";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientThemeProvider from "./theme-provider";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import AnalyticsWrapper from "@/components/custom/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Gannon",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <head />
      <body
        className={`${inter.className} flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen`}
      >
        <ClientThemeProvider>
          {/* <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div> */}
          <div className="relative">
            <Header />
            <main>{children}</main>
            <AnalyticsWrapper />
            <Footer />
            <TailwindIndicator />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
