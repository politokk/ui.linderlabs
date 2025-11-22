import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertCustomColorsDemo() {
  return (
    <Alert className="border-amber-50 bg-amber-50 text-amber-900 dark:border-amber-950 dark:bg-amber-950 dark:text-amber-100">
      <CheckCircle2Icon />
      <AlertTitle>Plot Twist: This Alert is Actually Amber!</AlertTitle>
      <AlertDescription>
        This one has custom colors for light and dark mode.
      </AlertDescription>
    </Alert>
  )
}