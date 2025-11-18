"use client"

import * as React from "react"
import { CheckIcon, ClipboardIcon, TerminalIcon } from "lucide-react"

import { highlightCode } from "@/lib/highlight-code"
import { useConfig } from "@/hooks/use-config"
import { copyToClipboardWithMeta } from "@/components/block/copy-button"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string
  __yarn__?: string
  __pnpm__?: string
  __bun__?: string
}) {
  const [config, setConfig] = useConfig()
  const [hasCopied, setHasCopied] = React.useState(false)
  const [highlightedTabs, setHighlightedTabs] = React.useState<
    Record<string, string>
  >({})

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const packageManager = config.packageManager || "pnpm"
  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }
  }, [__npm__, __pnpm__, __yarn__, __bun__])

  // Highlight code for all tabs
  React.useEffect(() => {
    const highlightAllTabs = async () => {
      const highlighted: Record<string, string> = {}

      for (const [key, value] of Object.entries(tabs)) {
        if (value) {
          try {
            highlighted[key] = await highlightCode(value, "bash", {
              showLineNumbers: false,
            })
          } catch (error) {
            console.error(`Failed to highlight code for ${key}:`, error)
            // Fallback to plain text
            highlighted[key] = `<code>${value}</code>`
          }
        }
      }

      setHighlightedTabs(highlighted)
    }

    highlightAllTabs()
  }, [tabs])

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager]

    if (!command) {
      return
    }

    copyToClipboardWithMeta(command, {
      name: "copy_npm_command",
      properties: {
        command,
        pm: packageManager,
      },
    })
    setHasCopied(true)
    toast.success("Copied to clipboard")
  }, [packageManager, tabs])

  return (
    <div className="relative overflow-x-auto border rounded-3xl">
      <Tabs
        value={packageManager}
        className="gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
          })
        }}
      >
        <div className="border-border/50 bg-muted/55 flex items-center gap-2 border-b px-3 py-0.5">
          <div className="bg-foreground flex size-4 items-center justify-center rounded-full opacity-70">
            <TerminalIcon className="text-code size-3 text-white" />
          </div>
          <TabsList className="rounded-none bg-transparent p-0">
            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:text-primary h-7 border-b-2 border-transparent pt-0.5 text-xs data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:shadow-none"
                >
                  {key}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>
        <div className="no-scrollbar overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            const highlightedCode = highlightedTabs[key]

            return (
              <TabsContent key={key} value={key} className="mt-0">
                {highlightedCode ? (
                  <div
                    className="[&>pre]:!bg-transparent [&>pre]:px-4 [&>pre]:py-3.5 text-sm"
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  />
                ) : (
                  // Fallback while highlighting is loading
                  <pre className="px-4 py-3.5">
                    <code
                      className="relative text-xs leading-none"
                      data-language="bash"
                    >
                      {value}
                    </code>
                  </pre>
                )}
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            data-slot="copy-button"
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 z-10 size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
            onClick={copyCommand}
          >
            <span className="sr-only">Copy</span>
            {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {hasCopied ? "Copied" : "Copy to Clipboard"}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
