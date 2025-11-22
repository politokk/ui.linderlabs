

import {
  PanelBottomIcon,
  ScrollTextIcon,
  MoveIcon,
} from "lucide-react"

import { DrawerDemo } from "@/components/demos/drawer/drawer-demo"
import { DrawerScrollableDemo } from "@/components/demos/drawer/drawer-scrollable-demo"
import { DrawerDirectionsDemo } from "@/components/demos/drawer/drawer-directions-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "drawer-demo",
    path: "drawer/drawer-demo",
    icon: <PanelBottomIcon />,
    component: DrawerDemo,
  },
  {
    name: "drawer-scrollable-demo",
    path: "drawer/drawer-scrollable-demo",
    icon: <ScrollTextIcon />,
    component: DrawerScrollableDemo,
  },
  {
    name: "drawer-directions-demo",
    path: "drawer/drawer-directions-demo",
    icon: <MoveIcon />,
    component: DrawerDirectionsDemo,
  },
]

export default async function DrawerPage() {
  

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