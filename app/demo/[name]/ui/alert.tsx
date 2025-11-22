import { getActiveStyle } from "@/lib/styles"

import {
  AlertCircleIcon,
  AlertTriangleIcon,
  BookmarkCheckIcon,
  CheckCircle2Icon,
  FileTextIcon,
  GiftIcon,
  LayoutListIcon,
  MousePointerClickIcon,
  PaletteIcon,
  PopcornIcon,
  ShieldAlertIcon,
  TextIcon,
} from "lucide-react"

import { AlertSuccessDemo } from "@/components/demos/alert/alert-success-demo"
import { AlertDescriptionOnlyDemo } from "@/components/demos/alert/alert-description-only-demo"
import { AlertMinimalDemo } from "@/components/demos/alert/alert-minimal-demo"
import { AlertTitleOnlyDemo } from "@/components/demos/alert/alert-title-only-demo"
import { AlertLongTitleDemo } from "@/components/demos/alert/alert-long-title-demo"
import { AlertLongDescriptionDemo } from "@/components/demos/alert/alert-long-description-demo"
import { AlertExtensiveContentDemo } from "@/components/demos/alert/alert-extensive-content-demo"
import { AlertDestructiveDemo } from "@/components/demos/alert/alert-destructive-demo"
import { AlertDestructiveListDemo } from "@/components/demos/alert/alert-destructive-list-demo"
import { AlertWithActionDemo } from "@/components/demos/alert/alert-with-action-demo"
import { AlertCustomColorsDemo } from "@/components/demos/alert/alert-custom-colors-demo"
import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "alert/alert-success-demo",
    icon: <CheckCircle2Icon />,
    component: AlertSuccessDemo,
  },
  {
    name: "alert/alert-description-only-demo",
    icon: <BookmarkCheckIcon />,
    component: AlertDescriptionOnlyDemo,
  },
  {
    name: "alert/alert-minimal-demo",
    icon: <FileTextIcon />,
    component: AlertMinimalDemo,
  },
  {
    name: "alert/alert-title-only-demo",
    icon: <PopcornIcon />,
    component: AlertTitleOnlyDemo,
  },
  {
    name: "alert/alert-long-title-demo",
    icon: <TextIcon />,
    component: AlertLongTitleDemo,
  },
  {
    name: "alert/alert-long-description-demo",
    icon: <GiftIcon />,
    component: AlertLongDescriptionDemo,
  },
  {
    name: "alert/alert-extensive-content-demo",
    icon: <LayoutListIcon />,
    component: AlertExtensiveContentDemo,
  },
  {
    name: "alert/alert-destructive-demo",
    icon: <AlertCircleIcon />,
    component: AlertDestructiveDemo,
  },
  {
    name: "alert/alert-destructive-list-demo",
    icon: <AlertTriangleIcon />,
    component: AlertDestructiveListDemo,
  },
  {
    name: "alert/alert-with-action-demo",
    icon: <MousePointerClickIcon />,
    component: AlertWithActionDemo,
  },
  {
    name: "alert/alert-custom-colors-demo",
    icon: <PaletteIcon />,
    component: AlertCustomColorsDemo,
  },
]

export default async function AlertPage() {
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