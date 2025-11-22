import { getActiveStyle } from "@/lib/styles"

import {
    CommandIcon,
    LayoutListIcon,
    SearchIcon,
    SmartphoneIcon,
} from "lucide-react"

import { CommandDemo } from "@/components/demos/command/command-demo"
import { CommandDialogDemo } from "@/components/demos/command/command-dialog"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "command-demo",
    path: "command/command-demo",
    icon: <SearchIcon />,
    component: CommandDemo,
  },
  {
    name: "command-dialog",
    path: "command/command-dialog",
    icon: <LayoutListIcon />,
    component: CommandDialogDemo,
  }
]

export default async function CommandPage() {
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