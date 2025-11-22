import { getActiveStyle } from "@/lib/styles"

import {
  RectangleHorizontalIcon,
  SquareIcon,
} from "lucide-react"

import { AspectRatioWideDemo } from "@/components/demos/aspect-ratio/aspect-ratio-wide-demo"
import { AspectRatioSquareDemo } from "@/components/demos/aspect-ratio/aspect-ratio-square-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "aspect-ratio-wide-demo",
    path: "aspect-ratio/aspect-ratio-wide-demo",
    icon: <RectangleHorizontalIcon />,
    component: AspectRatioWideDemo,
  },
  {
    name: "aspect-ratio-square-demo",
    path: "aspect-ratio/aspect-ratio-square-demo",
    icon: <SquareIcon />,
    component: AspectRatioSquareDemo,
  },
]

export default async function AspectRatioPage() {
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