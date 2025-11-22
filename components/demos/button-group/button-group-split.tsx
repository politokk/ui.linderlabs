import { IconPlus } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  } from "@/components/ui/button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon-md" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
