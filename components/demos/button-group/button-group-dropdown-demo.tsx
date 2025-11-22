import { ChevronDownIcon, MoreHorizontalIcon, CheckCircleIcon, PinIcon, UserCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"

export function ButtonGroupDropdownDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Button variant="outline">Update</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Disable</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              Uninstall
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup className="[--radius:0.9rem]">
        <Button variant="secondary">Actions</Button>
        <ButtonGroupSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="[--radius:0.9rem]">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CheckCircleIcon />
                Select Messages
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PinIcon />
                Edit Pins
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserCircleIcon />
                Set Up Name & Photo
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}