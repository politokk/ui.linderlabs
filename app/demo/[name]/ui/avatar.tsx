import { getActiveStyle } from "@/lib/styles"

import {
  UserCircleIcon,
} from "lucide-react"

import { AvatarDemo } from "@/components/demos/avatar/avatar-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "avatar-demo",
    path: "avatar/avatar-demo",
    icon: <UserCircleIcon />,
    component: AvatarDemo,
  },
]

export default async function AvatarPage() {
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