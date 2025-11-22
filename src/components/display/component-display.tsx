import * as React from "react"
import { registryItemSchema } from "shadcn/schema"
import { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import { getRegistryItem } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { type Style } from "@/lib/styles"
import { ComponentToolbar } from "./component-toolbar"

export type Component = z.infer<typeof registryItemSchema> & {
  highlightedCode: string
}

export async function ComponentDisplay({
  name,
  styleName,
  children,
  className,
  icon,
}: {
  name: string
  styleName: Style["name"]
  icon?: React.ReactNode
} & React.ComponentProps<"div">) {
  const component = await getCachedRegistryItem(name, styleName)
  const highlightedCode = await getComponentHighlightedCode(
    component?.files?.[0]?.path ?? ""
  )

  if (!component || !highlightedCode) {
    return null
  }

  return (
    <div
      className={cn(
        "themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-200 ease-in-out hover:z-30",
        className
      )}
    >
      <ComponentToolbar
        component={{ ...component as Component, highlightedCode }}
        icon={icon}
        className="bg-card text-card-foreground relative z-20 flex justify-end border-b px-3 py-2.5"
      >
        {children}
      </ComponentToolbar>
      <div className="relative z-10 flex flex-1 min-h-0 items-center gap-2 p-4 overflow-auto">
        {children}
      </div>
    </div>
  )
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    return await getRegistryItem(name)
  }
)

const getComponentHighlightedCode = React.cache(async (content: string) => {
  return await highlightCode(content)
})
