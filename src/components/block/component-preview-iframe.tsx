"use client"

import { useThemeConfig } from "@/components/themes/active-theme"
import { type Style } from "@/lib/styles"

export function ComponentPreviewIframe({
  name,
  styleName,
}: {
  name: string
  styleName: Style["name"]
}) {
  const { activeTheme } = useThemeConfig()

  return (
    <iframe
      key={activeTheme}
      src={`/view/${styleName}/${name}?theme=${activeTheme}`}
      className="size-full"
    />
  )
}
