"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, Component, type LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface RegistryBreadcrumbProps {
  componentTitle: string;
  componentIcon?: string;
}

// Function to get icon component from icon name
function getIconComponent(iconName?: string): LucideIcon {
  if (iconName && LucideIcons[iconName as keyof typeof LucideIcons]) {
    return LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon;
  }
  
  // Fallback to Component icon
  return Component;
}

export function RegistryBreadcrumb({ componentTitle, componentIcon }: RegistryBreadcrumbProps) {
  const ComponentIcon = getIconComponent(componentIcon);
  const isHomePage = componentTitle.toLowerCase() === "home";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {isHomePage ? (
            <BreadcrumbPage className="flex items-center gap-1">
              <Home className="size-3.5" />
              Home
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink href="/" className="flex items-center gap-1">
              <Home className="size-3.5" />
              Home
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isHomePage && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-1">
                <ComponentIcon className="size-3.5" />
                {componentTitle}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}