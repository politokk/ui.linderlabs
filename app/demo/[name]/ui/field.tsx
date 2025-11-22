import { getActiveStyle } from "@/lib/styles"

import {
  CheckSquareIcon,
  FileTextIcon,
  FormInputIcon,
  LayoutListIcon,
  ListIcon,
  RadioIcon,
  SlidersIcon,
  SquareCheckIcon,
  ToggleRightIcon,
} from "lucide-react"

import { FieldDemo } from "@/components/demos/field/field-demo"
import { FieldInput } from "@/components/demos/field/field-input"
import { FieldTextarea } from "@/components/demos/field/field-textarea"
import { FieldSelect } from "@/components/demos/field/field-select"
import { FieldCheckbox } from "@/components/demos/field/field-checkbox"
import { FieldRadio } from "@/components/demos/field/field-radio"
import { FieldSwitch } from "@/components/demos/field/field-switch"
import { FieldSlider } from "@/components/demos/field/field-slider"
import { FieldFieldset } from "@/components/demos/field/field-fieldset"
import { FieldGroupExample } from "@/components/demos/field/field-group"
import { FieldChoiceCard } from "@/components/demos/field/field-choice-card"
import { FieldResponsive } from "@/components/demos/field/field-responsive"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "field/field-demo",
    icon: <FormInputIcon />,
    component: FieldDemo,
  },
  {
    name: "field/field-input",
    icon: <FormInputIcon />,
    component: FieldInput,
  },
  {
    name: "field/field-textarea",
    icon: <FileTextIcon />,
    component: FieldTextarea,
  },
  {
    name: "field/field-select",
    icon: <ListIcon />,
    component: FieldSelect,
  },
  {
    name: "field/field-checkbox",
    icon: <CheckSquareIcon />,
    component: FieldCheckbox,
  },
  {
    name: "field/field-radio",
    icon: <RadioIcon />,
    component: FieldRadio,
  },
  {
    name: "field/field-switch",
    icon: <ToggleRightIcon />,
    component: FieldSwitch,
  },
  {
    name: "field/field-slider",
    icon: <SlidersIcon />,
    component: FieldSlider,
  },
  {
    name: "field/field-fieldset",
    icon: <LayoutListIcon />,
    component: FieldFieldset,
  },
  {
    name: "field/field-group",
    icon: <SquareCheckIcon />,
    component: FieldGroupExample,
  },
  {
    name: "field/field-choice-card",
    icon: <RadioIcon />,
    component: FieldChoiceCard,
  },
  {
    name: "field/field-responsive",
    icon: <FormInputIcon />,
    component: FieldResponsive,
  },
]

export default async function FieldPage() {
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