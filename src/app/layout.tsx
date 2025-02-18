import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="flex flex-col flex-grow bg-background">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
