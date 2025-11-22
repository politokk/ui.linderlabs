import { CloudIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ButtonGroupTextDemo() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <ButtonGroupText>Text</ButtonGroupText>
        <Button variant="outline">Another Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="input">
            <CloudIcon /> GPU Size
          </Label>
        </ButtonGroupText>
        <Input id="input" placeholder="Type something here..." />
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>Prefix</ButtonGroupText>
        <Input id="input-2" placeholder="Type something here..." />
        <ButtonGroupText>Suffix</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}