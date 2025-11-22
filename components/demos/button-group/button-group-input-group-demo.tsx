import { FlipHorizontalIcon, FlipVerticalIcon, RotateCwIcon, PercentIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"

export function ButtonGroupInputGroupDemo() {
  return (
    <ButtonGroup className="[--spacing:0.2rem]">
      <Button variant="outline">
        <FlipHorizontalIcon />
      </Button>
      <Button variant="outline">
        <FlipVerticalIcon />
      </Button>
      <Button variant="outline">
        <RotateCwIcon />
      </Button>
      <InputGroup>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon
          align="inline-end"
          className="text-muted-foreground"
        >
          <PercentIcon />
        </InputGroupAddon>
      </InputGroup>
    </ButtonGroup>
  )
}