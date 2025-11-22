"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDown, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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

const skills = [
  { value: "react", label: "React", color: "bg-blue-500" },
  { value: "typescript", label: "TypeScript", color: "bg-blue-600" },
  { value: "tailwind", label: "Tailwind CSS", color: "bg-cyan-500" },
  { value: "nextjs", label: "Next.js", color: "bg-black dark:bg-white" },
  { value: "nodejs", label: "Node.js", color: "bg-green-600" },
  { value: "python", label: "Python", color: "bg-yellow-600" },
  { value: "graphql", label: "GraphQL", color: "bg-pink-500" },
  { value: "docker", label: "Docker", color: "bg-blue-700" },
]

type Skill = (typeof skills)[number]

export function ComboboxTagsDemo() {
  const [open, setOpen] = React.useState(false)
  const [selectedSkills, setSelectedSkills] = React.useState<Skill[]>([
    skills[0],
    skills[1],
  ])

  const handleSelect = (currentValue: string) => {
    const skill = skills.find((s) => s.value === currentValue)
    if (!skill) return

    setSelectedSkills((prev) =>
      prev.some((s) => s.value === currentValue)
        ? prev.filter((s) => s.value !== currentValue)
        : [...prev, skill]
    )
  }

  const handleRemove = (skillToRemove: Skill) => {
    setSelectedSkills((prev) =>
      prev.filter((s) => s.value !== skillToRemove.value)
    )
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-auto min-h-10 py-2"
          >
            <div className="flex flex-wrap gap-1.5">
              {selectedSkills.length > 0 ? (
                selectedSkills.map((skill) => (
                  <Badge
                    key={skill.value}
                    variant="secondary"
                    className="gap-1"
                  >
                    <span className={cn("size-2 rounded-full", skill.color)} />
                    {skill.label}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemove(skill)
                      }}
                      className="ml-1 rounded-full hover:bg-muted"
                    >
                      <XIcon className="size-3" />
                    </button>
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">Select skills...</span>
              )}
            </div>
            <ChevronsUpDown className="ml-2 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <Command>
            <CommandInput placeholder="Search skills..." />
            <CommandList>
              <CommandEmpty>No skill found.</CommandEmpty>
              <CommandGroup>
                {skills.map((skill) => (
                  <CommandItem
                    key={skill.value}
                    value={skill.value}
                    onSelect={handleSelect}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2",
                        selectedSkills.some((s) => s.value === skill.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <span className={cn("size-2 rounded-full mr-2", skill.color)} />
                    {skill.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}