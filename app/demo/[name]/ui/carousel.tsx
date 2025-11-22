import { getActiveStyle } from "@/lib/styles"

import {
  CreditCardIcon,
  FileTextIcon,
  ImageIcon,
} from "lucide-react"

import { ComponentDisplay } from "@/components/display/component-display"
import CarouselDemo from "@/components/demos/carousel/carousel-demo"
import CarouselApiDemo from "@/components/demos/carousel/carousel-api"
import CarouselOrientation from "@/components/demos/carousel/carousel-orientation"
import CarouselPlugin from "@/components/demos/carousel/carousel-plugin"
import CarouselSize from "@/components/demos/carousel/carousel-size"
import CarouselSpacing from "@/components/demos/carousel/carousel-spacing"

export const dynamic = "force-dynamic"

const components = [
  {
      name: "carousel-demo",
    path: "carousel/carousel-demo",
    icon: <CreditCardIcon />,
    component: CarouselDemo,
  },
  {
    name: "carousel-api-demo",
    path: "carousel/carousel-api",
    icon: <FileTextIcon />,
    component: CarouselApiDemo,
  },
  {
    name: "carousel-orientation",
      path: "carousel/carousel-orientation",
    icon: <ImageIcon />,
    component: CarouselOrientation,
  },
  {
    name: "carousel-plugin",
    path: "carousel/carousel-plugin",
    icon: <ImageIcon />,
    component: CarouselPlugin,
  },
  {
    name: "carousel-size",
    path: "carousel/carousel-size",
    icon: <ImageIcon />,
    component: CarouselSize,
  },
  {
    name: "carousel-spacing",
    path: "carousel/carousel-spacing",
    icon: <ImageIcon />,
    component: CarouselSpacing,
  },
]

export default async function CarouselPage() {
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