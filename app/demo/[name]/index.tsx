import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";
import { store } from "@/app/demo/[name]/blocks/store";
import SidebarPage from "@/app/demo/[name]/blocks/sidebar/page";
import MailPage from "@/app/demo/[name]/blocks/mail/page";
import CodePage from "@/app/demo/[name]/blocks/code/page";
import TasksPage from "@/app/demo/[name]/blocks/tasks/page";
import AuthPage from "@/app/demo/[name]/blocks/auth/page";
import ChatPage from "@/app/demo/[name]/blocks/chat/page";
// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { hero } from "@/app/demo/[name]/components/hero";
import { login } from "@/app/demo/[name]/components/login";
import { logo } from "@/app/demo/[name]/components/logo";
import { productGrid } from "@/app/demo/[name]/components/product-grid";
import { promo } from "@/app/demo/[name]/components/promo";

// ui
import AccordionPage from "@/app/demo/[name]/ui/accordion";
import AlertPage from "@/app/demo/[name]/ui/alert";
import AlertDialogPage from "@/app/demo/[name]/ui/alert-dialog";
import AspectRatioPage from "@/app/demo/[name]/ui/aspect-ratio";
import AvatarPage from "@/app/demo/[name]/ui/avatar";
import BadgePage from "@/app/demo/[name]/ui/badge";
import BreadcrumbPage from "@/app/demo/[name]/ui/breadcrumb";
import ButtonPage from "@/app/demo/[name]/ui/button";
import ButtonGroupPage from "@/app/demo/[name]/ui/button-group";
import CalendarPage from "@/app/demo/[name]/ui/calendar";
import CardPage from "@/app/demo/[name]/ui/card";
import CarouselPage from "@/app/demo/[name]/ui/carousel";
import ChartPage from "@/app/demo/[name]/ui/chart";
import CheckboxPage from "@/app/demo/[name]/ui/checkbox";
import CollapsiblePage from "@/app/demo/[name]/ui/collapsible";
import ComboboxPage from "@/app/demo/[name]/ui/combobox";
import CommandPage from "@/app/demo/[name]/ui/command";
import ContextMenuPage from "@/app/demo/[name]/ui/context-menu";
import { dataTable } from "@/app/demo/[name]/ui/data-table";
import { datePicker } from "@/app/demo/[name]/ui/date-picker";
import DialogPage from "@/app/demo/[name]/ui/dialog";
import DrawerPage from "@/app/demo/[name]/ui/drawer";
import DropdownMenuPage from "@/app/demo/[name]/ui/dropdown-menu";
import EmptyPage from "@/app/demo/[name]/ui/empty";
import FieldPage from "@/app/demo/[name]/ui/field";
import HoverCardPage from "@/app/demo/[name]/ui/hover-card";
import { input } from "@/app/demo/[name]/ui/input";
import { menubar } from "@/app/demo/[name]/ui/menubar";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { skeleton } from "@/app/demo/[name]/ui/skeleton";
import { slider } from "@/app/demo/[name]/ui/slider";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,
  sidebar: SidebarPage,
  mail: MailPage,
  code: CodePage,
  tasks: TasksPage,
  auth: AuthPage,
  chat: ChatPage,
  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,
  // ui
  accordion: AccordionPage,
  alert: AlertPage,
  "alert-dialog": AlertDialogPage,
  "aspect-ratio": AspectRatioPage,
  avatar: AvatarPage,
  badge: BadgePage,
  breadcrumb: BreadcrumbPage,
  button: ButtonPage,
  "button-group": ButtonGroupPage,
  calendar: CalendarPage,
  card: CardPage,
  carousel: CarouselPage,
  chart: ChartPage,
  checkbox: CheckboxPage,
  collapsible: CollapsiblePage,
  combobox: ComboboxPage,
  command: CommandPage,
  "context-menu": ContextMenuPage,
  dialog: DialogPage,
  drawer: DrawerPage,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": DropdownMenuPage,
  empty: EmptyPage,
  field: FieldPage,
  "hover-card": HoverCardPage,
  input,
  menubar,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,
};
