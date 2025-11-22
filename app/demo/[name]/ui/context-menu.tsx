

import {
    MoreHorizontalIcon,
} from "lucide-react"

import { ComponentDisplay } from "@/components/display/component-display"
import { ContextMenuDemo } from "@/components/demos/context/context-menu-demo"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "context-menu-demo",
    path: "context/context-menu-demo",
    icon: <MoreHorizontalIcon />,
    component: ContextMenuDemo,
  },
]

export default async function ContextMenuPage() {
  

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