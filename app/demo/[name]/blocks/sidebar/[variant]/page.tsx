import { Metadata } from "next"
import { notFound } from "next/navigation"

import { componentRegistry } from "@/app/demo/[name]/blocks/sidebar/components/component-registry"
import { BlockDisplay } from "@/components/block/block-display"
export const dynamic = "force-static"
export const revalidate = false

export async function generateStaticParams() {
  return Object.keys(componentRegistry).map((variant) => ({
    variant,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>
}): Promise<Metadata> {
  const { variant } = await params
  const component = componentRegistry[variant as keyof typeof componentRegistry]

  if (!component) {
    return {
      title: "Component Not Found",
    }
  }

  return {
    title: `${component.name} - Sidebars`,
    description: `Demo page for ${component.name} component`,
  }
}

export default async function SidebarsPage({
  params,
}: {
  params: Promise<{ variant: string }>
}) {
  const { variant } = await params
  const component = componentRegistry[variant as keyof typeof componentRegistry]

  if (!component) {
    notFound()
  }

  const Component = component.component

  return (
    <div className="p-6 mt-15">
      {component.type === "registry:block" ? (
        <BlockDisplay name={variant} styleName="new-york-v4" />
      ) : (
        <Component />
      )}
    </div>
  )
}
