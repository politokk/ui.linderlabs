import { getActiveStyle } from "@/lib/styles"

import {
  NavigationIcon,
  SlashIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
  HomeIcon,
  SmartphoneIcon,
} from "lucide-react"

import { BreadcrumbDemo } from "@/components/demos/breadcrumb/breadcrumb-demo"
import { BreadcrumbCustomSeparatorDemo } from "@/components/demos/breadcrumb/breadcrumb-custom-separator-demo"
import { BreadcrumbDropdownDemo } from "@/components/demos/breadcrumb/breadcrumb-dropdown-demo"
import { BreadcrumbCollapsedDemo } from "@/components/demos/breadcrumb/breadcrumb-collapsed-demo"
import { BreadcrumbDefaultDemo } from "@/components/demos/breadcrumb/breadcrumb-default-demo"
import { BreadcrumbResponsiveDemo } from "@/components/demos/breadcrumb/breadcrumb-responsive-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "breadcrumb-demo",
    path: "breadcrumb/breadcrumb-demo",
    icon: <NavigationIcon />,
    component: BreadcrumbDemo,
  },
  {
    name: "breadcrumb-default-demo",
    path: "breadcrumb/breadcrumb-default-demo",
    icon: <HomeIcon />,
    component: BreadcrumbDefaultDemo,
  },
  {
    name: "breadcrumb-custom-separator-demo",
    path: "breadcrumb/breadcrumb-custom-separator-demo",
    icon: <SlashIcon />,
    component: BreadcrumbCustomSeparatorDemo,
  },
  {
    name: "breadcrumb-dropdown-demo",
    path: "breadcrumb/breadcrumb-dropdown-demo",
    icon: <ChevronDownIcon />,
    component: BreadcrumbDropdownDemo,
  },
  {
    name: "breadcrumb-collapsed-demo",
    path: "breadcrumb/breadcrumb-collapsed-demo",
    icon: <MoreHorizontalIcon />,
    component: BreadcrumbCollapsedDemo,
  },
  {
    name: "breadcrumb-responsive-demo",
    path: "breadcrumb/breadcrumb-responsive-demo",
    icon: <SmartphoneIcon />,
    component: BreadcrumbResponsiveDemo,
  },
]

export default async function BreadcrumbPage() {
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