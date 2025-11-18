import * as React from "react"
import { registryItemFileSchema } from "shadcn/schema"
import { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry-server"
import { cn } from "@/lib/utils"
import { BlockViewer } from "@/components/block/block-viewer"
import { ComponentPreview } from "@/components/block/component-preview"
import { type Style } from "@/lib/styles"

export async function BlockDisplay({
  name,
  styleName,
}: {
  name: string
  styleName: Style["name"]
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
    >
      <ComponentPreview
        name={item.name}
        styleName={styleName}
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
    return await getRegistryItem(name, styleName)
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
