"use client";

import {
  Blocks,
  ChevronDown,
  ChevronRight,
  Component,
  Home,
  ToyBrick,
  Palette,
  type LucideIcon,  
  Lightbulb,
  Paintbrush,
  Book, 
  Bot,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  useSidebar,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getAIElements, getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";
import { categoryConfig } from "@/components/sidebar/component-registry";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
const data = {
  user: {
    name: "Linder",
    email: "hello@linderlabs.com",
    avatar: "/linderavatar.png",
  },
  teams: [
    {
      name: "LinderLabs",
      accent: "UI",
      avatar: "/orbs/orb-3.mp4",
      plan: "Free",
    }
  ],
};


const uiItems = getUIPrimitives();
const componentItems = getComponents();
const blockItems = getBlocks();
const aiItems = getAIElements();
  // Function to get icon component from registry data
function getIconComponent(component: any): LucideIcon {
  if (component.icon && LucideIcons[component.icon as keyof typeof LucideIcons]) {
    return LucideIcons[component.icon as keyof typeof LucideIcons] as LucideIcon;
  }
  
  // Fallback icons based on component type
  switch (component.type) {
    case "registry:block":
      return Blocks;
    case "registry:component":
      return Component;
    case "registry:ui":
      return ToyBrick;
    default:
      return Component;
  }
}

export const gettingStartedItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "Design Tokens", path: "/tokens", icon: Palette },
  { title: "Registry", path: "/registry", icon: Book },
  { title: "Colors", path: "/colors", icon: Paintbrush },
];

export function RegistrySidebar() {
  const pathname = usePathname();

  const { setOpenMobile } = useSidebar();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUiItems, setFilteredUiItems] = useState(uiItems);
  const [filteredComponents, setFilteredComponents] = useState(componentItems);
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);
  const [filteredAiItems, setFilteredAiItems] = useState(aiItems);
  useEffect(() => {
    if (searchTerm) {
      setFilteredUiItems(
        uiItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setFilteredComponents(
        componentItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setFilteredBlocks(
        blockItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setFilteredAiItems(
        aiItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    } else {
      setFilteredUiItems(uiItems);
      setFilteredComponents(componentItems);
      setFilteredBlocks(blockItems);
      setFilteredAiItems(aiItems);
    }
  }, [searchTerm]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
      <ScrollArea className="h-full w-full group-data-[collapsible=icon]:p-0 px-1.5" suppressHydrationWarning>          <Collapsible defaultOpen={true} className="group/collapsible" id="getting-started">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <Lightbulb className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 opacity-100 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      Getting Started
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {gettingStartedItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <SidebarMenuItem key={item.path}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === item.path}
                            tooltip={item.title}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={item.path}
                              className="flex items-center gap-2"
                            >
                              <Icon className="size-4" />
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible" id="blocks">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <Blocks className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      Blocks
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {Object.entries(
                      filteredBlocks.reduce((acc, item) => {
                        const category = item.category || "other";
                        if (!acc[category]) acc[category] = [];
                        acc[category].push(item);
                        return acc;
                      }, {} as Record<string, typeof filteredBlocks>)
                    ).map(([category, categoryItems]) => {
                      const CategoryIcon = categoryConfig[category]?.icon;
                      const categoryLabel = categoryConfig[category]?.label || 
                        category.charAt(0).toUpperCase() + category.slice(1);
                      
                      return (
                        <Collapsible key={category} defaultOpen={true}>
                          <SidebarMenuItem>
                            <SidebarMenuButton tooltip={categoryLabel}>
                              {CategoryIcon && <CategoryIcon className="size-4" />}
                              <span>{categoryLabel}</span>
                            </SidebarMenuButton>
                            <SidebarMenuBadge>{categoryItems.length}</SidebarMenuBadge>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuAction
                                className="left-1.5 bg-sidebar-accent text-sidebar-accent-foreground transition-transform data-[state=open]:opacity-0 data-[state=open]:hover:opacity-100 data-[state=open]:rotate-90"
                                showOnHover
                              >
                                <ChevronRight className="size-4" />
                              </SidebarMenuAction>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {categoryItems.map((item) => {
                                  const Icon = getIconComponent(item);
                                  return (
                                    <SidebarMenuSubItem key={item.name}>
                                      <SidebarMenuSubButton
                                        asChild
                                        isActive={pathname === `/registry/${item.name}`}
                                      >
                                        <Link
                                          onClick={() => setOpenMobile(false)}
                                          href={`/registry/${item.name}`}
                                        >
                                          <Icon className="size-4" />
                                          <span>{item.title}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  );
                                })}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible" id="components">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <Component className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      Components
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {Object.entries(
                      filteredComponents.reduce((acc, item) => {
                        const category = item.category || "other";
                        if (!acc[category]) acc[category] = [];
                        acc[category].push(item);
                        return acc;
                      }, {} as Record<string, typeof filteredComponents>)
                    ).map(([category, categoryItems]) => {
                      const CategoryIcon = categoryConfig[category]?.icon;
                      const categoryLabel = categoryConfig[category]?.label || 
                        category.charAt(0).toUpperCase() + category.slice(1);
                      
                      return (
                        <Collapsible key={category} defaultOpen={true}>
                          <SidebarMenuItem>
                            <SidebarMenuButton tooltip={categoryLabel}>
                              {CategoryIcon && <CategoryIcon className="size-4" />}
                              <span>{categoryLabel}</span>
                            </SidebarMenuButton>
                            <SidebarMenuBadge>{categoryItems.length}</SidebarMenuBadge>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuAction
                                className="left-1.5 bg-sidebar-accent text-sidebar-accent-foreground transition-transform data-[state=open]:opacity-0 data-[state=open]:hover:opacity-100 data-[state=open]:rotate-90"
                                showOnHover
                              >
                                <ChevronRight className="size-4" />
                              </SidebarMenuAction>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {categoryItems.map((item) => {
                                  const Icon = getIconComponent(item);
                                  return (
                                    <SidebarMenuSubItem key={item.name}>
                                      <SidebarMenuSubButton
                                        asChild
                                        isActive={pathname === `/registry/${item.name}`}
                                      >
                                        <Link
                                          onClick={() => setOpenMobile(false)}
                                          href={`/registry/${item.name}`}
                                        >
                                          <Icon className="size-4" />
                                          <span>{item.title}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  );
                                })}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible" id="ui-primitives">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <ToyBrick className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      UI
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {Object.entries(
                      filteredUiItems.reduce((acc, item) => {
                        const category = item.category || "other";
                        if (!acc[category]) acc[category] = [];
                        acc[category].push(item);
                        return acc;
                      }, {} as Record<string, typeof filteredUiItems>)
                    ).map(([category, categoryItems]) => {
                      const CategoryIcon = categoryConfig[category]?.icon;
                      const categoryLabel = categoryConfig[category]?.label || 
                        category.charAt(0).toUpperCase() + category.slice(1);
                      
                      return (
                        <Collapsible key={category} defaultOpen={true}>
                          <SidebarMenuItem>
                            <SidebarMenuButton tooltip={categoryLabel}>
                              {CategoryIcon && <CategoryIcon className="size-4" />}
                              <span>{categoryLabel}</span>
                            </SidebarMenuButton>
                            <SidebarMenuBadge>{categoryItems.length}</SidebarMenuBadge>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuAction
                                className="left-1.5 bg-sidebar-accent text-sidebar-accent-foreground transition-transform data-[state=open]:opacity-0 data-[state=open]:hover:opacity-100 data-[state=open]:rotate-90"
                                showOnHover
                              >
                                <ChevronRight className="size-4" />
                              </SidebarMenuAction>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {categoryItems.map((item) => {
                                  const Icon = getIconComponent(item);
                                  return (
                                    <SidebarMenuSubItem key={item.name}>
                                      <SidebarMenuSubButton
                                        asChild
                                        isActive={pathname === `/registry/${item.name}`}
                                      >
                                        <Link
                                          onClick={() => setOpenMobile(false)}
                                          href={`/registry/${item.name}`}
                                        >
                                          <Icon className="size-4" />
                                          <span>{item.title}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  );
                                })}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex justify-end">
        <NavUser user={data.user} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}