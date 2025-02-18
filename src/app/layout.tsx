import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where Jesus Walked - 360° Immersive Theater Experience",
  description:
    "Experience the life of Jesus in a groundbreaking 360° immersive theater production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <main className="flex-grow bg-background">
          <MainNav />
          {children}
        </main>
        <footer className="bg-secondary text-secondary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Where Jesus Walked. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
