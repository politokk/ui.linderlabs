import { getActiveStyle } from "@/lib/styles"

import {
  MessageSquareIcon,
  Share2Icon,
  ScrollTextIcon,
  PanelBottomIcon,
} from "lucide-react"

import { DialogDemo } from "@/components/demos/dialog/dialog-demo"
import { DialogCloseButtonDemo } from "@/components/demos/dialog/dialog-close-button"
import { DialogScrollableDemo } from "@/components/demos/dialog/dialog-scrollable-demo"
import { DialogStickyFooterDemo } from "@/components/demos/dialog/dialog-sticky-footer-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "dialog-demo",
    path: "dialog/dialog-demo",
    icon: <MessageSquareIcon />,
    component: DialogDemo,
  },
  {
    name: "dialog-close-button",
    path: "dialog/dialog-close-button",
    icon: <Share2Icon />,
    component: DialogCloseButtonDemo,
  },
  {
    name: "dialog-scrollable-demo",
    path: "dialog/dialog-scrollable-demo",
    icon: <ScrollTextIcon />,
    component: DialogScrollableDemo,
  },
  {
    name: "dialog-sticky-footer-demo",
    path: "dialog/dialog-sticky-footer-demo",
    icon: <PanelBottomIcon />,
    component: DialogStickyFooterDemo,
  },
]

export default async function DialogPage() {
  const activeStyle = await getActiveStyle()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 mt-15">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <ComponentDisplay
            key={comp.name}
            path={comp.path}
            icon={comp.icon}
            className="w-full max-w-md mx-auto py-0"
          >
            <comp.component />
          </ComponentDisplay>
        ))}
      </div>
    </div>
  )
}