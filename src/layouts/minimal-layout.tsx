import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
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
            <LayoutProvider>
                <div>{children}</div>
            </LayoutProvider>
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}