"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { highlightCode } from "@/lib/highlight-code"
import { Button } from "@/components/ui/button"
import { Check, Clipboard } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { getIconForLanguageExtension } from "@/components/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"
interface RegistryCodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

export function RegistryCodeBlock({
  code,
  language = "json",
  filename,
  className,
}: RegistryCodeBlockProps) {
  const [highlightedContent, setHighlightedContent] = React.useState<string>("")
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  React.useEffect(() => {
    const highlight = async () => {
      const highlighted = await highlightCode(code, language)
      setHighlightedContent(highlighted)
    }
    highlight()
  }, [code, language])

  const handleCopy = () => {
    copyToClipboard(code)
    toast.success("Copied to clipboard")
  }

  return (
    <div
      className={cn(
        "bg-background text-code-foreground flex flex-1",
        className
      )}
    >
      <figure
        data-rehype-pretty-code-figure=""
        className="!mx-0 mt-0 flex min-w-0 flex-1 flex-col border-border border-solid-1 h-auto bg-background overflow-hidden rounded-xl border"
      >
        <figcaption
          className="text-sm text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 py-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {filename || `code.${language}`}
          <div className="ml-auto flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    onClick={handleCopy}
                  >
                    {isCopied ? (
                      <Check className="size-4" />
                    ) : (
                      <Clipboard className="size-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isCopied ? "Copied!" : "Copy code"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </figcaption>
        <div
          dangerouslySetInnerHTML={{ __html: highlightedContent }}
          className="no-scrollbar overflow-y-auto px-6 text-sm"
        />
      </figure>
    </div>
  )
}
