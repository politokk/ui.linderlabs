import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { ActiveThemeProvider } from "@/components/themes/active-theme"
import { TailwindIndicator } from "@/components/themes/tailwind-indicator"
import { ThemeProvider } from "@/components/themes/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Linderlabs UI",
  description: "Linderlabs UI is a collection of components and tools for your projects.",
  icons: [{ rel: "icon", url: "/favicon.ico", type: "image/svg+xml" }],
};

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
    suppressHydrationWarning
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
      suppressHydrationWarning
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body suppressHydrationWarning className="text-foreground group/body theme-default overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]">
        <ThemeProvider>
          <TooltipProvider>
            <ActiveThemeProvider initialTheme="default">
              {children}
              <TailwindIndicator />
            </ActiveThemeProvider>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
