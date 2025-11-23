import {
  AlertTriangleIcon
} from "lucide-react" 

import { AlertDialogDemo } from "@/components/demos/alert/alert-dialog-demo";
import { ComponentDisplay } from "@/components/display/component-display"
import { ComponentWrapper } from "@/components/display/component-wrapper"

export const dynamic = "force-dynamic"

const components = [
    {
        name: "alert-dialog-demo",
        path: "alert/alert-dialog-demo",
        icon: <AlertTriangleIcon />,
        component: AlertDialogDemo,
      },
]

export default async function AlertDialogPage() {
  return (

    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Accordion" icon="FolderRootIcon">
          <AlertDialogDemo />
        </ComponentWrapper>
      </div>
      </div>
)
}