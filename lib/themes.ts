import { baseColors } from "@/lib/base-colors"

export const THEMES = baseColors.filter(
  (theme) => !["slate", "stone", "gray", "zinc"].includes(theme.name)
)
