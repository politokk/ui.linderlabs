
import { getActiveStyle } from "@/lib/styles"

import {
  AlertTriangleIcon
} from "lucide-react" 

import { AlertDialogDemo } from "@/components/demos/alert/alert-dialog-demo";
import { ComponentDisplay } from "@/components/display/component-display"

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
