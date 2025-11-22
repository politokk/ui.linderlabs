import { AppSidebar } from "@/app/demo/[name]/blocks/sidebar/components/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { RegistryHeader } from "@/components/registry/registry-header"
import { SiteFooter } from "@/components/registry/site-footer"
import { BlockDisplay } from "@/components/block/block-display"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/registry/page-header"
import { OrbAnnouncement } from "@/components/orb-announcement"
import Image from "next/image"

const title = "Home"
const description = "AI Tools, Blocks, & Components for your projects."

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <RegistryHeader componentTitle="Sidebars" />
        <div className="flex-1 p-5 sm:mt-16 md:mt-12 sm:p-5 md:p-10">
          <div className="flex flex-1 flex-col">
            <PageHeader className="relative">
              <OrbAnnouncement />
              <PageHeaderHeading className="max-w-4xl">
                <span className="flex items-baseline gap-2 sm:gap-3">
                  <span className="font-waldenburg-ht leading-[0.95] font-bold tracking-[-0.03em]">
                    LinderLabs
                  </span>
                  <span className="font-waldenburg text-primary font-normal tracking-[-0.02em] opacity-90">
                    UI
                  </span>
                </span>
              </PageHeaderHeading>
              <PageHeaderDescription>{description}</PageHeaderDescription>
              <PageActions>
                <Button asChild size="sm">
                  <Link href="/blocks">Explore Tools</Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href="/docs/components">View Components</Link>
                </Button>
              </PageActions>
            </PageHeader>
            <div className="container-wrapper section-soft flex-1 pb-6">
              <div className="container overflow-hidden">
                <section className="border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]">
                  <Image
                    src="/r/styles/new-york-v4/dashboard-01-light.png"
                    width={1400}
                    height={875}
                    alt="Dashboard"
                    className="block dark:hidden"
                    priority
                  />
                  <Image
                    src="/r/styles/new-york-v4/dashboard-01-dark.png"
                    width={1400}
                    height={875}
                    alt="Dashboard"
                    className="hidden dark:block"
                    priority
                  />
                </section>
                <section className="theme-container hidden md:block"></section>
              </div>
              <BlockDisplay
                name={"sidebar"}
                styleName="new-york-v4"
              />
            </div>
            <SiteFooter />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
