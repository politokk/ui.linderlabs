import {
  FolderRootIcon,
  ScrollTextIcon
} from "lucide-react" 

import { AccordionDemo } from "@/components/demos/accordion/accordion-demo";
import { AccordionExtensive } from "@/components/demos/accordion/accordion-extensive";
import { ComponentDisplay } from "@/components/display/component-display"
import { ComponentWrapper } from "@/components/display/component-wrapper"

export const dynamic = "force-dynamic"


export default function AccordionPage() {
  return (

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ComponentWrapper name="Accordion">
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Accordion">
              <AccordionExtensive />
            </ComponentWrapper>
          </div>
          </div>
  )
}