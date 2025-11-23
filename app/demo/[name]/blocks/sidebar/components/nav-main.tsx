"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronRight,
  ChevronDown,
  ChevronsUpDown,
  Check,
  type LucideIcon,
} from "lucide-react"

import {
  componentRegistry,
  categoryConfig,
} from "./component-registry"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

type NavMainProps = {
  type: "registry:ui" | "registry:block" | "registry:page"
  label: string
  icon?: LucideIcon
}

export function NavMain({ type, label, icon: GroupIcon }: NavMainProps) {
  const pathname = usePathname()
  const { state } = useSidebar()

  const items = Object.entries(componentRegistry).filter(
    ([, item]) => item.type === type
  )

  const [collapsedCategories, setCollapsedCategories] = React.useState<
    Set<string>
  >(new Set())
  const [isGroupCollapsed, setIsGroupCollapsed] = React.useState(false)
  const [isHydrated, setIsHydrated] = React.useState(false)
  const [openCombobox, setOpenCombobox] = React.useState<string | null>(null)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(`sidebar-${type}-collapsed`)
      if (stored) {
        setCollapsedCategories(new Set(JSON.parse(stored)))
      }
      const groupStored = localStorage.getItem(
        `sidebar-${type}-group-collapsed`
      )
      if (groupStored) {
        setIsGroupCollapsed(JSON.parse(groupStored))
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsHydrated(true)
  }, [type])

  const handleOpenChange = React.useCallback(
    (category: string, open: boolean) => {
      setCollapsedCategories((prev) => {
        const next = new Set(prev)
        if (open) {
          next.delete(category)
        } else {
          next.add(category)
        }
        try {
          localStorage.setItem(
            `sidebar-${type}-collapsed`,
            JSON.stringify(Array.from(next))
          )
        } catch {
          // Ignore localStorage errors
        }
        return next
      })
    },
    [type]
  )

  const handleGroupOpenChange = React.useCallback(
    (open: boolean) => {
      setIsGroupCollapsed(!open)
      try {
        localStorage.setItem(
          `sidebar-${type}-group-collapsed`,
          JSON.stringify(!open)
        )
      } catch {
        // Ignore localStorage errors
      }
    },
    [type]
  )

  if (items.length === 0) {
    return null
  }

  const categorizedItems = items.reduce(
    (acc, [key, item]) => {
      const category = item.category || "other"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push([key, item])
      return acc
    },
    {} as Record<string, Array<[string, (typeof items)[0][1]]>>
  )

  // Define category order: ai first, then ui, then others
  const categoryOrder = ["ai", "ui", "dashboards"]
  const sortedCategories = Object.entries(categorizedItems).sort(([a], [b]) => {
    const aIndex = categoryOrder.indexOf(a)
    const bIndex = categoryOrder.indexOf(b)

    // If both categories are in the order array, sort by their position
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex
    }
    // If only one is in the order array, prioritize it
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
    // If neither is in the order array, sort alphabetically
    return a.localeCompare(b)
  })

  return (
    <Collapsible
      open={!isGroupCollapsed}
      onOpenChange={handleGroupOpenChange}
      className="group/collapsible"
    >
      <SidebarGroup>
        <CollapsibleTrigger className="w-full">
          <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
            <div className="relative flex min-w-0 items-center gap-2">
              {GroupIcon && (
                <GroupIcon className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
              )}
              <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
              <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
              {state === "expanded" && (
                <span className="transition-all duration-200">{label}</span>
              )}
            </div>
          </SidebarGroupLabel>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenu>
            {sortedCategories.map(([category, categoryItems]) => {
              const CategoryIcon = categoryConfig[category]?.icon
              const categoryLabel =
                categoryConfig[category]?.label ||
                category.charAt(0).toUpperCase() + category.slice(1)
              const isOpen = !collapsedCategories.has(category)

              // Determine if this category contains blocks or components
              const hasBlocks = categoryItems.some(
                ([, item]) => item.type === "registry:block"
              )
              const hasComponents = categoryItems.some(
                ([, item]) => item.type === "registry:ui"
              )

              // Use blocks path if category has blocks, otherwise use components path
              const categoryPath = hasBlocks
                ? `/blocks/${category}`
                : `/components/${category}`
              const isCategoryActive = pathname === categoryPath

              return (
                <Collapsible
                  key={category}
                  asChild
                  open={isOpen}
                  onOpenChange={(open) => handleOpenChange(category, open)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {state === "collapsed" ? (
                      <Popover
                        open={openCombobox === category}
                        onOpenChange={(open) =>
                          setOpenCombobox(open ? category : null)
                        }
                      >
                        <PopoverTrigger asChild>
                          <SidebarMenuButton
                            tooltip={categoryLabel}
                            role="combobox"
                            aria-expanded={openCombobox === category}
                            className="justify-between"
                            isActive={isCategoryActive}
                          >
                            {CategoryIcon && <CategoryIcon />}
                            <span>{categoryLabel}</span>
                            <ChevronsUpDown className="ml-auto size-4 shrink-0 opacity-50" />
                          </SidebarMenuButton>
                        </PopoverTrigger>
                        <PopoverContent
                          side="right"
                          align="start"
                          className="w-64 p-0"
                        >
                          <Command>
                            <CommandInput
                              placeholder={`Search ${categoryLabel.toLowerCase()}...`}
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No component found.</CommandEmpty>
                              <CommandGroup heading={categoryLabel}>
                                <CommandItem
                                  value={`view-all-${category}`}
                                  onSelect={() => {
                                    setOpenCombobox(null)
                                    window.location.href = categoryPath
                                  }}
                                  className="font-medium"
                                >
                                  {CategoryIcon && <CategoryIcon />}
                                  <span>View All {categoryLabel}</span>
                                  <Check
                                    className={cn(
                                      "ml-auto size-4",
                                      isCategoryActive
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                                {categoryItems.map(([key, item]) => (
                                  <CommandItem
                                    key={key}
                                    value={item.name}
                                    onSelect={() => {
                                      setOpenCombobox(null)
                                      window.location.href = item.href
                                    }}
                                  >
                                    {item.icon && <item.icon />}
                                    <span>{item.name}</span>
                                    {item.label && (
                                      <span className="ml-auto size-2 rounded-full bg-primary border-primary-foreground border-2" />
                                    )}
                                    <Check
                                      className={cn(
                                        "ml-auto size-4",
                                        pathname === item.href
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <>
                        <SidebarMenuButton
                          asChild
                          tooltip={categoryLabel}
                          isActive={isCategoryActive}
                        >
                          <Link href={categoryPath}>
                            {CategoryIcon && <CategoryIcon />}
                            <span>{categoryLabel}</span>
                          </Link>
                        </SidebarMenuButton>
                        <SidebarMenuBadge>
                          {categoryItems.length}
                        </SidebarMenuBadge>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuAction
                            className="left-1.5 bg-sidebar-accent text-sidebar-accent-foreground transition-transform data-[state=open]:opacity-0 data-[state=open]:hover:opacity-100 data-[state=open]:rotate-90"
                            showOnHover
                            aria-label={`Toggle ${categoryLabel}`}
                          >
                            <ChevronRight className="size-4" />
                          </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {categoryItems.map(([key, item]) => (
                              <SidebarMenuSubItem key={key}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === item.href}
                                >
                                  <Link href={item.href}>
                                    {item.icon && <item.icon />}
                                    <span>{item.name}</span>
                                    {item.label && (
                                      <span className="flex ml-auto size-2 rounded-full bg-primary border-primary-foreground border-2" />
                                    )}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}
