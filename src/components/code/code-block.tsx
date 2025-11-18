"use client"

import * as React from "react"
import { Highlight, themes } from "prism-react-renderer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopyButton?: boolean
  theme?: "light" | "dark" | "auto"
}

export function CodeBlock({
  code,
  language = "javascript",
  showLineNumbers = false,
  showCopyButton = true,
  theme = "auto",
  className,
  ...props
}: CodeBlockProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  // Handle undefined or null code
  const safeCode = code || ""

  // Determine which theme to use based on the theme prop
  const getTheme = () => {
    if (theme === "dark") return themes.nightOwl
    if (theme === "light") return themes.nightOwlLight
    // For auto, we'll use CSS to handle theme switching
    return themes.nightOwl
  }

  return (
    <div className={cn("relative group", className)} {...props}>
      {showCopyButton && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-4 z-10 size-8 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => copyToClipboard(safeCode)}
        >
          {isCopied ? (
            <CheckIcon className="size-4" />
          ) : (
            <CopyIcon className="size-4" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      )}
      <Highlight theme={getTheme()} code={safeCode.trim()} language={language}>
        {({
          className: highlightClassName,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <div className="overflow-x-auto rounded-md border bg-muted">
            <pre
              className={cn(
                highlightClassName,
                "p-4 text-sm",
                showLineNumbers && "pl-12",
                theme === "auto" && "dark:bg-[#011627] bg-[#fbfbfb]"
              )}
              style={{
                ...style,
                margin: 0,
                background: theme === "auto" ? undefined : style.background,
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {showLineNumbers && (
                    <span
                      className={cn(
                        "inline-block w-8 text-right mr-4 select-none",
                        "text-muted-foreground opacity-50"
                      )}
                    >
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  )
}

// Simple inline code component
export function InlineCode({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}
