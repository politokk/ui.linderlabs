"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDown, PlusCircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const users = [
  {
    id: "1",
    username: "shadcn",
  },
  {
    id: "2",
    username: "maxleiter",
  },
  {
    id: "3",
    username: "evilrabbit",
  },
] as const

type User = (typeof users)[number]
type UserId = User["id"]

export function ComboboxUserDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<UserId>(users[0].id)

  const selectedUser = React.useMemo(
    () => users.find((user) => user.id === value),
    [value]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between px-2 md:max-w-[200px]"
        >
          {selectedUser ? (
            <div className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage
                  src={`https://github.com/${selectedUser.username}.png`}
                />
                <AvatarFallback>{selectedUser.username[0]}</AvatarFallback>
              </Avatar>
              {selectedUser.username}
            </div>
          ) : (
            "Select user..."
          )}
          <ChevronsUpDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {users.map((user) => (
                <CommandItem
                  key={user.id}
                  value={user.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue as UserId)
                    setOpen(false)
                  }}
                >
                  <Avatar className="size-5">
                    <AvatarImage
                      src={`https://github.com/${user.username}.png`}
                    />
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                  </Avatar>
                  {user.username}
                  <CheckIcon
                    className={cn(
                      "ml-auto",
                      value === user.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>
                <PlusCircleIcon />
                Create user
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}