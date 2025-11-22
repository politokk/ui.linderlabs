"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

type Framework = (typeof frameworks)[number]

export function ComboboxMultiSelectDemo() {
  const [open, setOpen] = React.useState(false)
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<
    Framework[]
  >([])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit min-w-[280px] justify-between"
        >
          {selectedFrameworks.length > 0
            ? selectedFrameworks.map((framework) => framework.label).join(", ")
            : "Select frameworks (multi-select)..."}
          <ChevronsUpDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setSelectedFrameworks(
                      selectedFrameworks.some((f) => f.value === currentValue)
                        ? selectedFrameworks.filter(
                            (f) => f.value !== currentValue
                          )
                        : [...selectedFrameworks, framework]
                    )
                  }}
                >
                  <div
                    className="border-input data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground pointer-events-none size-4 shrink-0 rounded-[4px] border transition-all select-none *:[svg]:opacity-0 data-[selected=true]:*:[svg]:opacity-100"
                    data-selected={selectedFrameworks.some(
                      (f) => f.value === framework.value
                    )}
                  >
                    <CheckIcon className="size-3.5 text-current" />
                  </div>
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}