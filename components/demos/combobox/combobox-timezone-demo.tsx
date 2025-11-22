"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, PlusCircleIcon } from "lucide-react"

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

const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
] as const

type Timezone = (typeof timezones)[number]
type TimezoneValue = Timezone["timezones"][number]["value"]

export function ComboboxTimezoneDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<TimezoneValue>(timezones[0].timezones[0].value)

  const selectedGroup = React.useMemo(
    () =>
      timezones.find((group) =>
        group.timezones.find((tz) => tz.value === value)
      ),
    [value]
  )

  const selectedTimezoneLabel = React.useMemo(
    () => selectedGroup?.timezones.find((tz) => tz.value === value)?.label,
    [value, selectedGroup]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-12 w-full justify-between px-2.5 md:max-w-[200px]"
        >
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-muted-foreground text-xs font-normal">
              {selectedGroup?.label}
            </span>
            <span>{selectedTimezoneLabel}</span>
          </div>
          <ChevronDownIcon className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandInput placeholder="Search timezone..." />
          <CommandList className="scroll-pb-12">
            <CommandEmpty>No timezone found.</CommandEmpty>
            {timezones.map((region) => (
              <CommandGroup key={region.label} heading={region.label}>
                {region.timezones.map((timezone) => (
                  <CommandItem
                    key={timezone.value}
                    value={timezone.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue as TimezoneValue)
                      setOpen(false)
                    }}
                  >
                    {timezone.label}
                    <CheckIcon
                      className="ml-auto opacity-0 data-[selected=true]:opacity-100"
                      data-selected={value === timezone.value}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator className="sticky bottom-10" />
            <CommandGroup className="bg-popover sticky bottom-0">
              <CommandItem>
                <PlusCircleIcon />
                Create timezone
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}