"use client"

import { cn } from "@/lib/utils"
import { ComponentCodeViewer } from "./component-code-viewer"
import { ComponentCopyButton } from "./component-copy-button"
import { Component } from "./component-display"
import { Separator } from "@/components/ui/separator"

export function ComponentToolbar({
  component,
  className,
  icon,
  children,
}: {
  component: Component
  icon?: React.ReactNode
} & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="text-muted-foreground flex items-center gap-1.5 pl-1 text-[13px] [&_svg]:h-4 [&_svg]:w-4">
        {icon && <div className="text-muted-foreground">{icon}</div>}
        {getComponentTitle(component.name)}
      </div>
      <div className="ml-auto flex items-center gap-1 [&>form]:flex">
        <Separator
          orientation="vertical"
          className="mx-0 hidden !h-4 md:flex"
        />
        <ComponentCopyButton
          name={component.name}
          code={component.files?.[0]?.content ?? ""}
        />
        <ComponentCodeViewer component={component} icon={icon}>
          {children}
        </ComponentCodeViewer>
      </div>
    </div>
  )
}

function getComponentTitle(name: string) {
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
}
