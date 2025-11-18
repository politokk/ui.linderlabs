import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeaderHeading } from "./registry/page-header";
import { PageHeaderDescription } from "./registry/page-header";
import { PageActions } from "./registry/page-header";
import { PageHeader } from "./registry/page-header";
import { OrbAnnouncement } from "@/components/orb-announcement";

export function Hero({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}) {
  return (
    <div className="relative h-[300px] w-full flex justify-center items-center">
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
    </div>
  );
}
