import * as React from "react";
import { notFound } from "next/navigation";
import { demos } from "@/app/demo/[name]/index";
import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem, getRegistryItems } from "@/lib/registry";
import { getStyle } from "@/lib/styles";
import { ActiveThemeProvider } from "@/components/themes/active-theme";

export async function generateStaticParams() {
  const components = getRegistryItems();
  const styles = ["new-york-v4"]; // Add more styles if needed
  
  const params = [];
  for (const style of styles) {
    for (const component of components) {
      params.push({
        styleName: style,
        name: component.name,
      });
    }
  }
  
  return params;
}

export default async function ViewPage({
  params,
  searchParams,
}: {
  params: Promise<{ styleName: string; name: string }>;
  searchParams: Promise<{ theme?: string }>;
}) {
  const { styleName, name } = await params;
  const { theme } = await searchParams;
  
  const style = getStyle(styleName);
  
  if (!style) {
    notFound();
  }

  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  const demo = demos[name];

  if (!demo) {
    notFound();
  }

  // Check if demo is a direct component (like MailPage) or has a components object
  const isDirectComponent = typeof demo === 'function' || (demo && !('components' in demo));

  if (isDirectComponent) {
    // Direct component (e.g., mail)
    const Component = demo as React.ComponentType;
    return (
      <ActiveThemeProvider initialTheme={theme || "default"}>
        <div className="w-full h-full">
          <Component />
        </div>
      </ActiveThemeProvider>
    );
  }

  // Components object format (e.g., other UI components)
  const { components } = demo as { components: Record<string, React.ReactNode> };

  return (
    <ActiveThemeProvider initialTheme={theme || "default"}>
      <div className="flex h-full w-full flex-col gap-4 bg-background" data-theme={theme}>
        {components &&
          Object.entries(components).map(([key, node]) => (
            <div className="relative w-full" key={key}>
              <Renderer>{node}</Renderer>
            </div>
          ))}
      </div>
    </ActiveThemeProvider>
  );
}
