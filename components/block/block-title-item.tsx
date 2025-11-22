"use client"

import { registryItemSchema } from "@/lib/schema"
import { z } from "zod"

interface BlockTitleItemProps {
  item: z.infer<typeof registryItemSchema>
}

export function BlockTitleItem({ item }: BlockTitleItemProps) {
  return (
    <a
      href={`#${item.title}`}
      className="capitalize flex-1 text-center text-muted-foreground text-sm font-medium underline-offset-2 hover:underline md:flex-auto md:text-left"
    >
      {item.title}
    </a>
  )
}
