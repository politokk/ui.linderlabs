import { getActiveStyle } from "@/lib/styles"

import {
  TagsIcon,
  FileTextIcon,
  MoreHorizontalIcon,
  LayoutListIcon,
  SmartphoneIcon,
  TerminalIcon,
  UserCircleIcon,
  GlobeIcon,
  ListChecksIcon,
} from "lucide-react"

import { ComboboxTagsDemo } from "@/components/demos/combobox/combobox-tags-demo"
import { ComboboxFormDemo } from "@/components/demos/combobox/combobox-form-demo"
import { ComboboxDropdownMenuDemo } from "@/components/demos/combobox/combobox-dropdown-menu-demo"
import { ComboboxPopoverDemo } from "@/components/demos/combobox/combobox-popover-demo"
import { ComboboxResponsiveDemo } from "@/components/demos/combobox/combobox-responsive-demo"
import { ComboboxFrameworkDemo } from "@/components/demos/combobox/combobox-framework-demo"
import { ComboboxUserDemo } from "@/components/demos/combobox/combobox-user-demo"
import { ComboboxTimezoneDemo } from "@/components/demos/combobox/combobox-timezone-demo"
import { ComboboxMultiSelectDemo } from "@/components/demos/combobox/combobox-multi-select-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "combobox-tags-demo",
    path: "combobox/combobox-tags-demo",
    icon: <TagsIcon />,
    component: ComboboxTagsDemo,
  },
  {
    name: "combobox-form-demo",
    path: "combobox/combobox-form-demo",
    icon: <FileTextIcon />,
    component: ComboboxFormDemo,
  },
  {
    name: "combobox-dropdown-menu-demo",
    path: "combobox/combobox-dropdown-menu-demo",
    icon: <MoreHorizontalIcon />,
    component: ComboboxDropdownMenuDemo,
  },
  {
    name: "combobox-popover-demo",
    path: "combobox/combobox-popover-demo",
    icon: <LayoutListIcon />,
    component: ComboboxPopoverDemo,
  },
  {
    name: "combobox-responsive-demo",
    path: "combobox/combobox-responsive-demo",
    icon: <SmartphoneIcon />,
    component: ComboboxResponsiveDemo,
  },
  {
    name: "combobox-framework-demo",
    path: "combobox/combobox-framework-demo",
    icon: <TerminalIcon />,
    component: ComboboxFrameworkDemo,
  },
  {
    name: "combobox-user-demo",
    path: "combobox/combobox-user-demo",
    icon: <UserCircleIcon />,
    component: ComboboxUserDemo,
  },
  {
    name: "combobox-timezone-demo",
    path: "combobox/combobox-timezone-demo",
    icon: <GlobeIcon />,
    component: ComboboxTimezoneDemo,
  },
  {
    name: "combobox-multi-select-demo",
    path: "combobox/combobox-multi-select-demo",
    icon: <ListChecksIcon />,
    component: ComboboxMultiSelectDemo,
  },
]

export default async function ComboboxPage() {
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