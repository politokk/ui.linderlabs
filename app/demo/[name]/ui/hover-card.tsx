import { getActiveStyle } from "@/lib/styles"

import { FormInputIcon } from "lucide-react"

import { HoverCardDemo } from "@/components/demos/hover-card/hover-card-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "hover-card/hover-card-demo",
    icon: <FormInputIcon />,
    component: HoverCardDemo,
  },
]

export default async function HoverCardPage() {
  const activeStyle = await getActiveStyle()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 mt-15">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <ComponentDisplay
            key={comp.name}
            path={comp.name}
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