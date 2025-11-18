"use client"

import * as React from "react"
import { ImperativePanelHandle } from "react-resizable-panels"
import { registryItemSchema } from "@/lib/schema"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { ViewToggleTabs } from "@/components/block/view-toggle-tabs"
import { BlockDescriptionLink } from "@/components/block/block-description-link"
import { BlockTitleItem } from "@/components/block/block-title-item"
import { NPXInstallButton } from "@/components/block/npx-install-button"
import { Separator } from "@/components/ui/separator"
import { OpenInV0Button } from "@/components/block/open-in-v0-button"

interface BlockViewerToolbarProps {
  item: z.infer<typeof registryItemSchema>
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>
}

export function BlockViewerToolbar({
  item,
  view,
  setView,
}: BlockViewerToolbarProps) {
  const [isCompact, setIsCompact] = React.useState(false)
  const [showDescription, setShowDescription] = React.useState(true)
  const toolbarRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!toolbarRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        // Switch to compact mode below 768px
        setIsCompact(width < 768)
        // Hide description below 640px
        setShowDescription(width >= 640)
      }
    })

    resizeObserver.observe(toolbarRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={toolbarRef}
      className="bg-card sticky top-0 text-card-foreground relative z-20 flex items-center gap-2 border-b px-3 py-2.5 w-full h-10"
    >
      <div className="flex items-center gap-3 min-w-0">
        <BlockTitleItem item={item} />
        <div
          className={cn(
            "transition-all duration-200",
            showDescription ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          )}
        >
          <BlockDescriptionLink item={item} />
        </div>
        <Separator orientation="vertical" className="mx-2 !h-4" />
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <NPXInstallButton
          itemName={item.name}
          variant={isCompact ? "icon" : "default"}
        />
        <OpenInV0Button
          name={item.name}
          variant={isCompact ? "icon" : "default"}
        />
        <ViewToggleTabs view={view} setView={setView} />
      </div>
    </div>
  )
}
