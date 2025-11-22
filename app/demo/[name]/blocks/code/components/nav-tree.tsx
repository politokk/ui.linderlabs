import * as React from "react"
import { ChevronRight, File, Folder } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar"

type TreeItem = string | TreeItem[]

interface NavTreeProps {
  item: TreeItem
  activeFile?: string
}

export function NavTree({ item, activeFile = "button.tsx" }: NavTreeProps) {
  const [name, ...items] = Array.isArray(item) ? item : [item]

  if (!items.length) {
    return (
      <SidebarMenuButton isActive={name === activeFile}>
        <File />
        {name}
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <NavTree key={index} item={subItem} activeFile={activeFile} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
