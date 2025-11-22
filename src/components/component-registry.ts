import { AlertCircleIcon, ComponentIcon, FolderIcon, LayoutDashboardIcon, SidebarIcon, WandIcon } from "lucide-react"
import { FileTextIcon, MessageCircleIcon } from "lucide-react"

// Category configuration with icons
export const categoryConfig: Record<
  string,
  { icon: React.FC; label?: string }
> = {
  ai: { icon: WandIcon, label: "AI" },
  ui: { icon: ComponentIcon, label: "UI" },
  sidebar: { icon: SidebarIcon, label: "Sidebar" },
  dashboards: { icon: LayoutDashboardIcon, label: "Dashboards" },
  chat: { icon: MessageCircleIcon, label: "Chat" },
  page: { icon: FileTextIcon, label: "Page" },
}

import { AccordionDemo } from "@/components/demos/accordion-demo"
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo"

type ComponentConfig = {
  name: string
  component: React.ComponentType
  className?: string
  type: "registry:ui" | "registry:page" | "registry:block"
  href: string
  label?: string
  icon?: React.FC
  category?: string
}

export const componentRegistry: Record<string, ComponentConfig> = {
  accordion: {
    name: "Accordion",
    component: AccordionDemo,
    type: "registry:ui",
    href: "/sidebar/accordion",
    icon: FolderIcon,
    category: "ui",
  },
  "alert-dialog": {
    name: "Alert Dialog",
    component: AlertDialogDemo,
    type: "registry:ui",
    href: "/sink/alert-dialog",
    icon: AlertCircleIcon,
    category: "ui",
  },
}
export type ComponentKey = keyof typeof componentRegistry
