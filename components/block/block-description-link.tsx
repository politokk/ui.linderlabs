"use client"

import { registryItemSchema } from "@/lib/schema"
import { z } from "zod"

interface BlockDescriptionLinkProps {
  item: z.infer<typeof registryItemSchema>
}

export function BlockDescriptionLink({ item }: BlockDescriptionLinkProps) {
  return (
    <a
      href={`#${item.name}`}
      className="flex-1 text-muted-foreground text-sm font-default underline-offset-2 hover:underline md:flex-auto md:text-left"
    >
      {item.description?.replace(/\.$/, "")}
    </a>
  )
}
