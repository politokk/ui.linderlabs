import * as React from "react"
import { registryItemFileSchema } from "@/lib/schema"
import { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
  getRegistryItemWithDependencies,
} from "@/lib/registry-server"
import { cn } from "@/lib/utils"
import { BlockViewer } from "@/components/block/block-viewer"
import { ComponentPreview } from "@/components/block/component-preview"
import { type Style } from "@/lib/styles"

export async function BlockDisplay({
  name,
  styleName,
  hideToolbar = false,
}: {
  name: string
  styleName: Style["name"]
  hideToolbar?: boolean
}) {
  const item = await getCachedRegistryItem(name, styleName)

  if (!item?.files) {
    return null
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ])

  return (
    <BlockViewer
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      styleName={styleName}
      hideToolbar={hideToolbar}
    >
      <ComponentPreview
        name={item.name}
        styleName={styleName}
        type={item.type === "registry:block" ? "block" : "component"}
        hideCode
        className={cn(
          "my-0 **:[.preview]:h-auto **:[.preview]:p-4 **:[.preview>.p-6]:p-0",
          item.meta?.containerClassName
        )}
      />
    </BlockViewer>
  )
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    // For blocks, we want to include all dependencies
    // First get the item to check if it's a block
    const item = await getRegistryItem(name, styleName)
    if (item?.type === "registry:block") {
      return await getRegistryItemWithDependencies(name, styleName)
    }
    return item
  }
)

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files) {
      return null
    }

    return await createFileTreeForRegistryItemFiles(files)
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      }))
    )
  }
)
