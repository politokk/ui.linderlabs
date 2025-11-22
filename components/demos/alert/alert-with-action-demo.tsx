import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertWithActionDemo() {
  return (
    <Alert>
      <CheckCircle2Icon />
      <AlertTitle className="max-w-[calc(100%-4rem)] overflow-ellipsis">
        The selected emails have been marked as spam.
      </AlertTitle>
      <Button
        size="sm"
        variant="outline"
        className="absolute top-2.5 right-3 h-6 shadow-none"
      >
        Undo
      </Button>
    </Alert>
  )
}