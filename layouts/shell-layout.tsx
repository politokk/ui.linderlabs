import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/hooks/use-layout";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { ActiveThemeProvider } from "@/components/themes/active-theme";

import "@/app/globals.css";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <body
        suppressHydrationWarning
        className={cn(
          "bg-background text-foreground antialiased",
        )}
      >
        <ThemeProvider>
          <ActiveThemeProvider initialTheme="default">
        <SidebarProvider>
          <BrandHeader />
          <BrandSidebar />
          <main className="mt-16 flex w-full justify-center">
            <div className="container">
              <LayoutProvider>
                {children}
              </LayoutProvider>
            </div>
          </main>
          <Toaster />
        </SidebarProvider>
        </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
