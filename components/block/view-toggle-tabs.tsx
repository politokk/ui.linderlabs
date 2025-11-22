"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Eye, Code } from "lucide-react"
import { cn } from "@/lib/utils"

interface ViewToggleTabsProps {
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  className?: string
}

const views = [
  ["preview", Eye, "Preview"] as const,
  ["code", Code, "Code"] as const,
]

export function ViewToggleTabs({
  view,
  setView,
  className,
}: ViewToggleTabsProps) {
  const container = cn(
    "inline-flex items-center rounded-lg border p-0",
    className
  )

  return (
    <TooltipProvider>
      <div className={container} data-view-toggle="">
        {views.map(([key, Icon, tooltipText]) => (
          <Tooltip key={key}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                aria-label={tooltipText}
                className={cn(
                  "size-6.5 rounded-full p-1.5",
                  view === key
                    ? "bg-primary-foreground text-primary"
                    : "text-fd-muted-foreground"
                )}
                onClick={() => setView(key)}
              >
                <Icon className="size-full" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
