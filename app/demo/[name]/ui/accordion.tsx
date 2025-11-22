import {
  FolderRootIcon
} from "lucide-react" 

import { AccordionDemo } from "@/components/demos/accordion/accordion-demo";
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "accordion/accordion-demo",
    icon: <FolderRootIcon />,
    component: AccordionDemo,
  }
]

export default async function AccordionPage() {
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
