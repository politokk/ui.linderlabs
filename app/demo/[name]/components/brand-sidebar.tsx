import { BrandSidebar } from "@/components/sidebar/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: (
      <SidebarProvider>
        <BrandSidebar />
      </SidebarProvider>
    ),
  },
};
