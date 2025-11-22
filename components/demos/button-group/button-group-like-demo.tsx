import { HeartIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupLikeDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <HeartIcon /> Like
      </Button>
      <Button
        variant="outline"
        asChild
        className="text-muted-foreground pointer-events-none px-2"
      >
        <span>1.2K</span>
      </Button>
    </ButtonGroup>
  )
}