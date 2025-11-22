import { ModeSwitcher } from "@/components/themes/mode-switcher"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppBreadcrumbs } from "@/app/demo/[name]/blocks/sidebar/components/demos/app-breadcrumbs"
import { ThemeSelector } from "@/components/themes/theme-selector"

export function AppHeader() {
  return (
    <header className="bg-background/80 sticky top-0 z-10 flex h-12 items-center border-b p-4 backdrop-blur-sm">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-4 ml-2 !h-4" />
      <AppBreadcrumbs />
      <div className="ml-auto flex items-center gap-2">
        <ModeSwitcher />
        <ThemeSelector />
      </div>
    </header>
  )
}

