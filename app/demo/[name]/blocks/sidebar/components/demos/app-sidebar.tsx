"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  Boxes,
  FileText,
  Component,
} from "lucide-react"

import { NavUser } from "@/app/demo/[name]/blocks/sidebar/components/sidebar/nav-user"
import { NavMain } from "@/app/demo/[name]/blocks/sidebar/components/sidebar/nav-main"

import { TeamSwitcher } from "@/app/demo/[name]/blocks/sidebar/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  } from "@/components/ui/sidebar"
import registry from "@/registry.json"

// This is sample data.
const data = {
  user: {
    name: "LinderLabs UI",
    email: "hello@linderlabs.com",
    avatar: "/linderavatar.png",
  },
  teams: [
    {
      name: "LinderLabs",
      accent: "UI",
      avatar: "/orbs/orb-3.mp4",
      plan: "Free",
    },
  ],
  components: Object.values(registry)
    .filter((item: any) => item.type === "registry:ui")
    .concat([])
    .sort((a: any, b: any) => (a as any).name.localeCompare((b as any).name)),
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  return (
    <Sidebar side="left" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain type="registry:ui" label="Components" icon={Component} />
        <NavMain type="registry:block" label="Blocks" icon={Boxes} />
        <NavMain type="registry:page" label="Pages" icon={FileText} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
