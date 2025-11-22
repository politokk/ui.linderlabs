"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"

export function ComponentCopyButton({
  code,
  ...props
}: {
  name: string
  code: string
} & React.ComponentProps<typeof Button>) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="iconSm"
          variant="ghost"
          onClick={() => {
            navigator.clipboard.writeText(code)
            setHasCopied(true)
            toast.success("Copied to clipboard")
          }}
          {...props}
        >
          <span className="sr-only">Copy</span>
          {hasCopied ? (
            <Check className="size-3.5 text-muted-foreground" />
          ) : (
            <Copy className="size-3.5 text-muted-foreground" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy code</TooltipContent>
    </Tooltip>
  )
}
