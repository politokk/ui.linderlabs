

import {
  LayoutGridIcon,
  TypeIcon,
  ChevronDownIcon,
  DollarSignIcon,
  AlignLeftIcon,
  ArrowDownIcon,
  PercentIcon,
  ListIcon,
  HeartIcon,
  FileDownIcon,
  MousePointerClickIcon,
} from "lucide-react"

import { ButtonGroupBasicDemo } from "@/components/demos/button-group/button-group-basic-demo"
import { ButtonGroupInputDemo } from "@/components/demos/button-group/button-group-input-demo"
import { ButtonGroupMultipleDemo } from "@/components/demos/button-group/button-group-multiple-demo"
import { ButtonGroupTextDemo } from "@/components/demos/button-group/button-group-text-demo"
import { ButtonGroupDropdownDemo } from "@/components/demos/button-group/button-group-dropdown-demo"
import { ButtonGroupSelectDemo } from "@/components/demos/button-group/button-group-select-demo"
import { ButtonGroupAlignmentDemo } from "@/components/demos/button-group/button-group-alignment-demo"
import { ButtonGroupVerticalDemo } from "@/components/demos/button-group/button-group-vertical-demo"
import { ButtonGroupInputGroupDemo } from "@/components/demos/button-group/button-group-input-group-demo"
import { ButtonGroupPaginationDemo } from "@/components/demos/button-group/button-group-pagination-demo"
import { ButtonGroupLikeDemo } from "@/components/demos/button-group/button-group-like-demo"
import { ButtonGroupExportDemo } from "@/components/demos/button-group/button-group-export-demo"
import ButtonGroupDemo from "@/components/demos/button-group/button-group-demo"
import ButtonGroupDropdown from "@/components/demos/button-group/button-group-dropdown"
import ButtonGroupInputGroup from "@/components/demos/button-group/button-group-input-group"
import ButtonGroupInput from "@/components/demos/button-group/button-group-input"
import ButtonGroupNested from "@/components/demos/button-group/button-group-nested"
import ButtonGroupOrientation from "@/components/demos/button-group/button-group-orientation"
import ButtonGroupPopover from "@/components/demos/button-group/button-group-popover"
import ButtonGroupSelect from "@/components/demos/button-group/button-group-select"
import ButtonGroupSeparator from "@/components/demos/button-group/button-group-separator"
import ButtonGroupSize from "@/components/demos/button-group/button-group-size"
import ButtonGroupSplit from "@/components/demos/button-group/button-group-split"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "button-group-basic-demo",
    path: "button-group/button-group-basic-demo",
    icon: <LayoutGridIcon />,
    component: ButtonGroupBasicDemo,
  },
  {
    name: "button-group-input-demo",
    path: "button-group/button-group-input-demo",
    icon: <TypeIcon />,
    component: ButtonGroupInputDemo,
  },
  {
    name: "button-group-multiple-demo",
    path: "button-group/button-group-multiple-demo",
    icon: <LayoutGridIcon />,
    component: ButtonGroupMultipleDemo,
  },
  {
    name: "button-group-text-demo",
    path: "button-group/button-group-text-demo",
    icon: <TypeIcon />,
    component: ButtonGroupTextDemo,
  },
  {
    name: "button-group-dropdown-demo",
    path: "button-group/button-group-dropdown-demo",
    icon: <ChevronDownIcon />,
    component: ButtonGroupDropdownDemo,
  },
  {
    name: "button-group-select-demo",
    path: "button-group/button-group-select-demo",
    icon: <DollarSignIcon />,
    component: ButtonGroupSelectDemo,
  },
  {
    name: "button-group-alignment-demo",
    path: "button-group/button-group-alignment-demo",
    icon: <AlignLeftIcon />,
    component: ButtonGroupAlignmentDemo,
  },
  {
    name: "button-group-vertical-demo",
    path: "button-group/button-group-vertical-demo",
    icon: <ArrowDownIcon />,
    component: ButtonGroupVerticalDemo,
  },
  {
    name: "button-group-input-group-demo",
    path: "button-group/button-group-input-group-demo",
    icon: <PercentIcon />,
    component: ButtonGroupInputGroupDemo,
  },
  {
    name: "button-group-pagination-demo",
    path: "button-group/button-group-pagination-demo",
    icon: <ListIcon />,
    component: ButtonGroupPaginationDemo,
  },
  {
    name: "button-group-like-demo",
    path: "button-group/button-group-like-demo",
    icon: <HeartIcon />,
    component: ButtonGroupLikeDemo,
  },
  {
    name: "button-group-export-demo",
    path: "button-group/button-group-export-demo",
    icon: <FileDownIcon />,
    component: ButtonGroupExportDemo,
  },
  {
    name: "button-group-demo",
    path: "button-group/button-group-demo",
    icon: <MousePointerClickIcon />,
    component: ButtonGroupDemo,
  },
  {
    name: "button-group-dropdown",
    path: "button-group/button-group-dropdown",
    icon: <ChevronDownIcon />,
    component: ButtonGroupDropdown,
  },
  {
    name: "button-group-input-group",
    path: "button-group/button-group-input-group",
    icon: <PercentIcon />,
    component: ButtonGroupInputGroup,
  },
  {
    name: "button-group-input",
    path: "button-group/button-group-input",
    icon: <TypeIcon />,
    component: ButtonGroupInput,
  },
  {
    name: "button-group-nested",
    path: "button-group/button-group-nested",
    icon: <LayoutGridIcon />,
    component: ButtonGroupNested,
  },
  {
    name: "button-group-orientation",
    path: "button-group/button-group-orientation",
    icon: <ArrowDownIcon />,
    component: ButtonGroupOrientation,
  },
  {
    name: "button-group-popover",
    path: "button-group/button-group-popover",
    icon: <MousePointerClickIcon />,
    component: ButtonGroupPopover,
  },
  {
    name: "button-group-select",
    path: "button-group/button-group-select",
    icon: <DollarSignIcon />,
    component: ButtonGroupSelect,
  },
  {
    name: "button-group-separator",
    path: "button-group/button-group-separator",
    icon: <MousePointerClickIcon />,
    component: ButtonGroupSeparator,
  },
  {
    name: "button-group-size",
    path: "button-group/button-group-size",
    icon: <MousePointerClickIcon />,
    component: ButtonGroupSize,
  },
  {
    name: "button-group-split",
    path: "button-group/button-group-split",
    icon: <MousePointerClickIcon />,
    component: ButtonGroupSplit,
  },
]

export default async function ButtonGroupPage() {
  

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