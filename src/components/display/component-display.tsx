import * as React from "react"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { highlightCode } from "@/lib/highlight-code"
import { cn } from "@/lib/utils"
import { ComponentToolbar } from "./component-toolbar"

export type Component = {
  name: string
  code: string
  highlightedCode: string
}

export async function ComponentDisplay({
  path,
  children,
  className,
  icon,
}: {
  path: string
  icon?: React.ReactNode
} & React.ComponentProps<"div">) {
  const component = await getComponentByPath(path)

  if (!component) {
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
        component={component}
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

const getComponentByPath = React.cache(async (path: string): Promise<Component | null> => {
  try {
    const code = await readFile(
      join(process.cwd(), "src", "components", "demos", `${path}.tsx`),
      "utf-8"
    )

    const highlightedCode = await highlightCode(code)

    return {
      name: path,
      code,
      highlightedCode,
    }
  } catch (error) {
    console.error(`Failed to load component at path: ${path}`, error)
    return null
  }
})
