"use client"

import Image from "next/image"

import { ComponentPreviewIframe } from "@/components/block/component-preview-iframe"
import { type Style } from "@/lib/styles"

export function ComponentPreview({
  name,
  styleName = "new-york-v4",
  type,
  className,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  ...props
}: React.ComponentProps<"div"> & {
  name: string
  styleName?: Style["name"]
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
  chromeLessOnMobile?: boolean
}) {
  // Always use iframe for preview - it's more reliable and works with all components
  return (
    <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
      <Image
        src={`/r/styles/new-york-v4/${name}-light.png`}
        alt={name}
        width={1440}
        height={900}
        className="bg-background absolute top-0 left-0 z-20 w-[970px] max-w-none sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
        onError={(e) => {
          // Hide image if it doesn't exist
          e.currentTarget.style.display = 'none';
        }}
      />
      <Image
        src={`/r/styles/new-york-v4/${name}-dark.png`}
        alt={name}
        width={1440}
        height={900}
        className="bg-background absolute top-0 left-0 z-20 hidden w-[970px] max-w-none sm:w-[1280px] md:hidden dark:block md:dark:hidden"
        onError={(e) => {
          // Hide image if it doesn't exist
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="bg-background absolute inset-0 hidden w-[1600px] md:block">
        <ComponentPreviewIframe name={name} styleName={styleName} />
      </div>
    </div>
  )
}
