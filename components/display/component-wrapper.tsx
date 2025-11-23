"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"

export function ComponentWrapper({
  className,
  name,
  children,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  name: string
  icon?: string
}) {
  // Dynamically get the icon component from lucide-react
  const IconComponent = icon ? (LucideIcons as any)[icon] : null

  return (
    <ComponentErrorBoundary name={name}>
      <div
        id={name}
        data-name={name.toLowerCase()}
        className={cn(
          "flex w-full scroll-mt-16 flex-col rounded-3xl border overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0 border-b px-4 py-3">
          <div className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
            {IconComponent && <IconComponent className="h-4 w-4" />}
            {getComponentName(name)}
          </div>
        </div>
        <div className="flex flex-1 min-h-0 items-center gap-2 p-4 overflow-auto">{children}</div>
      </div>
    </ComponentErrorBoundary>
  )
}

class ComponentErrorBoundary extends React.Component<{ children: React.ReactNode; name: string }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode; name: string }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in component ${this.props.name}:`, error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          Something went wrong in component: {this.props.name}
        </div>
      )
    }

    return this.props.children
  }
}

function getComponentName(name: string) {
  // convert kebab-case to title case
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
}