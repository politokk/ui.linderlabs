import { PlusIcon, MinusIcon, SearchIcon, CopyIcon, ShareIcon, FlipHorizontalIcon, FlipVerticalIcon, RotateCwIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
} from "@/components/ui/button-group"

export function ButtonGroupVerticalDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup
        orientation="vertical"
        aria-label="Media controls"
        className="h-fit"
      >
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MinusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="Design tools palette">
        <ButtonGroup orientation="vertical">
          <Button variant="outline" size="icon">
            <SearchIcon />
          </Button>
          <Button variant="outline" size="icon">
            <CopyIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ShareIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical">
          <Button variant="outline" size="icon">
            <FlipHorizontalIcon />
          </Button>
          <Button variant="outline" size="icon">
            <FlipVerticalIcon />
          </Button>
          <Button variant="outline" size="icon">
            <RotateCwIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <TrashIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline" size="sm">
          <PlusIcon /> Increase
        </Button>
        <Button variant="outline" size="sm">
          <MinusIcon /> Decrease
        </Button>
      </ButtonGroup>
    </div>
  )
}