import { getActiveStyle } from "@/lib/styles"

import {
  CreditCardIcon,
  FileTextIcon,
  ImageIcon,
} from "lucide-react"

import { CardLoginDemo } from "@/components/demos/card/card-login-demo"
import { CardMeetingNotesDemo } from "@/components/demos/card/card-meeting-notes-demo"
import { CardImageDemo } from "@/components/demos/card/card-image-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "card-login-demo",
    path: "card/card-login-demo",
    icon: <CreditCardIcon />,
    component: CardLoginDemo,
  },
  {
    name: "card-meeting-notes-demo",
    path: "card/card-meeting-notes-demo",
    icon: <FileTextIcon />,
    component: CardMeetingNotesDemo,
  },
  {
    name: "card-image-demo",
    path: "card/card-image-demo",
    icon: <ImageIcon />,
    component: CardImageDemo,
  },
]

export default async function CardPage() {
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