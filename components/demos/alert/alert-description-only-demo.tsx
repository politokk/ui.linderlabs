import { BookmarkCheckIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"

export function AlertDescriptionOnlyDemo() {
  return (
    <Alert>
      <BookmarkCheckIcon />
      <AlertDescription>
        This one has an icon and a description only. No title.
      </AlertDescription>
    </Alert>
  )
}