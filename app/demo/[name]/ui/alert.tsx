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
import { ComponentWrapper } from "@/components/display/component-wrapper"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "alert-success-demo",
    path: "alert/alert-success-demo",
    icon: <CheckCircle2Icon />,
    component: AlertSuccessDemo,
  },
  {
    name: "alert-description-only-demo",
    path: "alert/alert-description-only-demo",
    icon: <BookmarkCheckIcon />,
    component: AlertDescriptionOnlyDemo,
  },
  {
    name: "alert-minimal-demo",
    path: "alert/alert-minimal-demo",
    icon: <FileTextIcon />,
    component: AlertMinimalDemo,
  },
  {
    name: "alert-title-only-demo",
    path: "alert/alert-title-only-demo",
    icon: <PopcornIcon />,
    component: AlertTitleOnlyDemo,
  },
  {
    name: "alert-long-title-demo",
    path: "alert/alert-long-title-demo",
    icon: <TextIcon />,
    component: AlertLongTitleDemo,
  },
  {
    name: "alert-long-description-demo",
    path: "alert/alert-long-description-demo",
    icon: <GiftIcon />,
    component: AlertLongDescriptionDemo,
  },
  {
    name: "alert-extensive-content-demo",
    path: "alert/alert-extensive-content-demo",
    icon: <LayoutListIcon />,
    component: AlertExtensiveContentDemo,
  },
  {
    name: "alert-destructive-demo",
    path: "alert/alert-destructive-demo",
    icon: <AlertCircleIcon />,
    component: AlertDestructiveDemo,
  },
  {
    name: "alert-destructive-list-demo",
    path: "alert/alert-destructive-list-demo",
    icon: <AlertTriangleIcon />,
    component: AlertDestructiveListDemo,
  },
  {
    name: "alert-with-action-demo",
    path: "alert/alert-with-action-demo",
    icon: <MousePointerClickIcon />,
    component: AlertWithActionDemo,
  },
  {
    name: "alert-custom-colors-demo",
    path: "alert/alert-custom-colors-demo",
    icon: <PaletteIcon />,
    component: AlertCustomColorsDemo,
  },
]

export default async function AlertPage() {
  return (

    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentDisplay path="alert/alert-success-demo" icon={<CheckCircle2Icon />}>
          <AlertSuccessDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-description-only-demo" icon={<BookmarkCheckIcon />}>
          <AlertDescriptionOnlyDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-minimal-demo" icon={<FileTextIcon />}>
          <AlertMinimalDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-title-only-demo" icon={<PopcornIcon />}>
          <AlertTitleOnlyDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-long-title-demo" icon={<TextIcon />}>
          <AlertLongTitleDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-long-description-demo" icon={<GiftIcon />}>
          <AlertLongDescriptionDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-extensive-content-demo" icon={<LayoutListIcon />}>
          <AlertExtensiveContentDemo />
        </ComponentDisplay>
        <ComponentDisplay path="alert/alert-destructive-demo" icon={<AlertCircleIcon />}>
          <AlertDestructiveDemo />
          </ComponentDisplay>
        <ComponentDisplay path="alert/alert-destructive-list-demo" icon={<AlertTriangleIcon />}>
          <AlertDestructiveListDemo />
          </ComponentDisplay>
        <ComponentDisplay path="alert/alert-with-action-demo" icon={<MousePointerClickIcon />}>
          <AlertWithActionDemo />
        </ComponentDisplay>
          <ComponentDisplay path="alert/alert-custom-colors-demo" icon={<PaletteIcon />}>
          <AlertCustomColorsDemo />
        </ComponentDisplay>
      </div>  
      </div>
)
}