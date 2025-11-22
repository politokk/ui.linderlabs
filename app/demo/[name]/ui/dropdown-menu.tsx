import { getActiveStyle } from "@/lib/styles"

import {
  MenuIcon,
  CheckSquareIcon,
  CircleDotIcon,
  UserCircle2Icon,
  UserCircleIcon,
  PaletteIcon,
} from "lucide-react"

import { DropdownMenuSimpleDemo } from "@/components/demos/dropdown-menu/dropdown-menu-simple-demo"
import { DropdownMenuCheckboxesDemo } from "@/components/demos/dropdown-menu/dropdown-menu-checkboxes-demo"
import { DropdownMenuRadioGroupDemo } from "@/components/demos/dropdown-menu/dropdown-menu-radio-group-demo"
import { DropdownMenuAvatarDemo } from "@/components/demos/dropdown-menu/dropdown-menu-avatar-demo"
import { DropdownMenuAvatarOnlyDemo } from "@/components/demos/dropdown-menu/dropdown-menu-avatar-only-demo"
import { DropdownMenuIconColorDemo } from "@/components/demos/dropdown-menu/dropdown-menu-icon-color-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "dropdown-menu-simple-demo",
    path: "dropdown-menu/dropdown-menu-simple-demo",
    icon: <MenuIcon />,
    component: DropdownMenuSimpleDemo,
  },
  {
    name: "dropdown-menu-checkboxes-demo",
    path: "dropdown-menu/dropdown-menu-checkboxes-demo",
    icon: <CheckSquareIcon />,
    component: DropdownMenuCheckboxesDemo,
  },
  {
    name: "dropdown-menu-radio-group-demo",
    path: "dropdown-menu/dropdown-menu-radio-group-demo",
    icon: <CircleDotIcon />,
    component: DropdownMenuRadioGroupDemo,
  },
  {
    name: "dropdown-menu-avatar-demo",
    path: "dropdown-menu/dropdown-menu-avatar-demo",
    icon: <UserCircle2Icon />,
    component: DropdownMenuAvatarDemo,
  },
  {
    name: "dropdown-menu-avatar-only-demo",
    path: "dropdown-menu/dropdown-menu-avatar-only-demo",
    icon: <UserCircleIcon />,
    component: DropdownMenuAvatarOnlyDemo,
  },
  {
    name: "dropdown-menu-icon-color-demo",
    path: "dropdown-menu/dropdown-menu-icon-color-demo",
    icon: <PaletteIcon />,
    component: DropdownMenuIconColorDemo,
  },
]

export default async function DropdownMenuPage() {
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