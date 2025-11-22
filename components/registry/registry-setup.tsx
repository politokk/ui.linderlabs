"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InlineCode } from "@/components/code/code-block"
import { RegistryCodeBlock } from "@/components/code/registry-code-block"
import { CodeBlockCommand } from "@/components/code/code-block-command"

export function RegistrySetup({
  className,
}: React.ComponentProps<typeof Button>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="iconSm" className={cn(className)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-4"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Setup Registry</DialogTitle>
          <DialogDescription>
            Use the code below to configure the @linderlabs registry for your
            project.
          </DialogDescription>
        </DialogHeader>
        <div className="font-medium">
          Copy and paste the code into <InlineCode>components.json</InlineCode>
        </div>
        <RegistryCodeBlock
          code={registrySetupCode}
          language="json"
          filename="components.json"
          className="mt-2"
        />
        <div className="font-medium">
          Then use the following command to add components:
        </div>
        <CodeBlockCommand
          __npm__="npx shadcn@latest add @linderlabs/[component-name]"
          __yarn__="yarn shadcn@latest add @linderlabs/[component-name]"
          __pnpm__="pnpm shadcn@latest add @linderlabs/[component-name]"
          __bun__="bun shadcn@latest add @linderlabs/[component-name]"
        />
        <div className="font-medium">
          To setup the MCP server, run the following command:
        </div>
        <CodeBlockCommand
          __npm__="npx shadcn@latest mcp init"
          __yarn__="yarn shadcn@latest mcp init"
          __pnpm__="pnpm shadcn@latest mcp init"
          __bun__="bun shadcn@latest mcp init"
        />
      </DialogContent>
    </Dialog>
  )
}

const registrySetupCode = `"registries": {
  "@linderlabs": "${"https://linderlabs-ui-registry-kappa.vercel.app"}/r/{name}.json"
}
`
