import { cn, getRegistryItemUrl } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface OpenInV0ButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "variant"> {
  name: string
  variant?: "icon" | "default"
}

export function OpenInV0Button({
  name,
  className,
  variant = "default",
  ...props
}: OpenInV0ButtonProps) {
  const href = `https://v0.dev/chat/api/open?url=${getRegistryItemUrl(name)}`

  if (variant === "icon") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="size-6.5 rounded-full p-1 bg-primary text-primary-foreground"
              asChild
              {...props}
            >
              <a href={href} target="_blank">
                <Icons.v0 className="size-full" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Open in v0</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Button
      size="sm"
      asChild
      className={cn("h-[1.8rem] gap-1", className)}
      {...props}
    >
      <a href={href} target="_blank">
        Open in <Icons.v0 className="size-5" />
      </a>
    </Button>
  )
}
