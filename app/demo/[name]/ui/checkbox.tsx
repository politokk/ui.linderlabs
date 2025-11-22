import { getActiveStyle } from "@/lib/styles"

import {
  CheckSquareIcon,
  SquareIcon,
  FileTextIcon,
  ListChecksIcon,
  SquareCheckIcon,
} from "lucide-react"

import { CheckboxDemo } from "@/components/demos/checkbox/checkbox-demo"
import { CheckboxDisabled } from "@/components/demos/checkbox/checkbox-disabled"
import { CheckboxWithText } from "@/components/demos/checkbox/checkbox-with-text"
import { CheckboxFormMultiple } from "@/components/demos/checkbox/checkbox-form-multiple"
import { CheckboxFormSingle } from "@/components/demos/checkbox/checkbox-form-single"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "checkbox-demo",
    path: "checkbox/checkbox-demo",
    icon: <CheckSquareIcon />,
    component: CheckboxDemo,
  },
  {
    name: "checkbox-disabled-demo",
    path: "checkbox/checkbox-disabled",
    icon: <SquareIcon />,
    component: CheckboxDisabled,
  },
  {
    name: "checkbox-with-text-demo",
    path: "checkbox/checkbox-with-text",
    icon: <FileTextIcon />,
    component: CheckboxWithText,
  },
  {
    name: "checkbox-form-multiple-demo",
    path: "checkbox/checkbox-form-multiple",
    icon: <ListChecksIcon />,
    component: CheckboxFormMultiple,
  },
  {
    name: "checkbox-form-single-demo",
    path: "checkbox/checkbox-form-single",
    icon: <SquareCheckIcon />,
    component: CheckboxFormSingle,
  },
]

export default async function CheckboxPage() {
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