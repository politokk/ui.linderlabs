import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"

export function ButtonGroupBasicDemo() {
  return (
    <ButtonGroup>
      <Button>Button</Button>
      <ButtonGroupSeparator className="bg-primary/80" />
      <Button>
        Get Started <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  )
}