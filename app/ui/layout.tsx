
import { Figtree, Inter, Noto_Sans, Nunito_Sans } from "next/font/google"

import { cn } from "@/lib/utils"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/demo/[name]/blocks/sidebar/components/app-sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
})

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
})

export default async function UILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider
      defaultOpen={true}
      className={cn(
        "theme-container",
        inter.variable,
        notoSans.variable,
        nunitoSans.variable,
        figtree.variable
      )}
    >
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
