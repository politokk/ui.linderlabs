import { 
  AlertCircleIcon, 
  BellDotIcon, 
  ComponentIcon, 
  FolderIcon, 
  LayoutDashboardIcon, 
  SidebarIcon, 
  WandIcon,
  FileTextIcon, 
  MessageCircleIcon,
  SquareIcon,
  UserIcon,
  StarIcon,
  ArrowRightIcon,
  MousePointerClickIcon,
  LayersIcon,
  CalendarIcon,
  CreditCardIcon,
  ArrowLeftRightIcon,
  CheckSquareIcon,
  ChevronDownIcon,
  SearchIcon,
  CommandIcon,
  MoreVerticalIcon,
  MessageSquareIcon,
  PanelLeftIcon,
  InboxIcon,
  TypeIcon,
  HashIcon,
  HelpCircleIcon,
  TagIcon,
  MenuIcon,
  ArrowLeftIcon,
  BarChart3Icon,
  CircleDotIcon,
  ExpandIcon,
  ArrowDownIcon,
  ChevronsUpDownIcon,
  MinusIcon,
  PanelRightIcon,
  LoaderIcon,
  SlidersIcon,
  PowerIcon,
  TableIcon,
  AlignLeftIcon
} from "lucide-react"

// Category configuration with icons
export const categoryConfig: Record<
  string,
  { icon: React.FC; label?: string }
> = {
  ai: { icon: WandIcon, label: "AI" },
  ui: { icon: ComponentIcon, label: "UI" },
  sidebar: { icon: SidebarIcon, label: "Sidebar" },
  dashboards: { icon: LayoutDashboardIcon, label: "Dashboards" },
  chat: { icon: MessageCircleIcon, label: "Chat" },
  page: { icon: FileTextIcon, label: "Page" },
}

import { AccordionDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/accordion-demo"
import { AlertDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/alert-demo"
import { AlertDialogDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/alert-dialog-demo"
import { AspectRatioDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/aspect-ratio-demo"
import { AvatarDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/avatar-demo"
import { BadgeDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/badge-demo"
import { BreadcrumbDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/breadcrumb-demo"
import { ButtonDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/button-demo"
import { ButtonGroupDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/button-group-demo"
import { CalendarDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/calendar-demo"
import { CardDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/card-demo"
import { CarouselDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/carousel-demo"
import { CheckboxDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/checkbox-demo"
import { CollapsibleDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/collapsible-demo"
import { ComboboxDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/combobox-demo"
import { CommandDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/command-demo"
import { ContextMenuDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/context-menu-demo"
import { DatePickerDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/date-picker-demo"
import { DialogDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/dialog-demo"
import { DrawerDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/drawer-demo"
import { DropdownMenuDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/dropdown-menu-demo"
import { EmptyDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/empty-demo"
import { FieldDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/field-demo"
import { FormDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/form-demo"
import { HoverCardDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/hover-card-demo"
import { InputDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/input-demo"
import { InputGroupDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/input-group-demo"
import { InputOTPDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/input-otp-demo"
import { ItemDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/item-demo"
import { KbdDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/kbd-demo"
import { LabelDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/label-demo"
import { MenubarDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/menubar-demo"
import { NativeSelectDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/native-select-demo"
  import { NavigationMenuDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/navigation-menu-demo"
import { PaginationDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/pagination-demo"
import { PopoverDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/popover-demo"
import { ProgressDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/progress-demo"
import { RadioGroupDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/radio-group-demo"
import { ResizableDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/resizable-demo"
import { ScrollAreaDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/scroll-area-demo"
import { SelectDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/select-demo"
import { SeparatorDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/separator-demo"
import { SheetDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/sheet-demo"
import { SkeletonDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/skeleton-demo"
import { SliderDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/slider-demo"
  import { SonnerDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/sonner-demo"
import { SpinnerDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/spinner-demo"
import { SwitchDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/switch-demo"
import { TableDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/table-demo"
import { TabsDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/tabs-demo"
import { TextareaDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/textarea-demo"
import { ToggleDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/toggle-demo"
import { ToggleGroupDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/toggle-group-demo"
import { TooltipDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/tooltip-demo"

type ComponentConfig = {
  name: string
  component: React.ComponentType
  className?: string
  type: "registry:ui" | "registry:page" | "registry:block"
  href: string
  label?: string
  icon?: React.FC
  category?: string
}

export const componentRegistry: Record<string, ComponentConfig> = {
  accordion: {
    name: "Accordion",
    component: AccordionDemo,
    type: "registry:ui",
    href: "/sidebar/accordion",
    icon: FolderIcon,
    category: "ui",
  },
  alert: {
    name: "Alert",
    component: AlertDemo,
    type: "registry:ui",
    href: "/sidebar/alert",
    icon: BellDotIcon,
    category: "ui",
  },
  "alert-dialog": {
    name: "Alert Dialog",
    component: AlertDialogDemo,
    type: "registry:ui",
    href: "/sidebar/alert-dialog",
    icon: AlertCircleIcon,
    category: "ui",
  },
  "aspect-ratio": {
    name: "Aspect Ratio",
    component: AspectRatioDemo,
    type: "registry:ui",
    href: "/sidebar/aspect-ratio",
    icon: SquareIcon,
    category: "ui",
  },
  avatar: {
    name: "Avatar",
    component: AvatarDemo,
    type: "registry:ui",
    href: "/sidebar/avatar",
    icon: UserIcon,
    category: "ui",
  },
  badge: {
    name: "Badge",
    component: BadgeDemo,
    type: "registry:ui",
    href: "/sidebar/badge",
    icon: StarIcon,
    category: "ui",
  },
  breadcrumb: {
    name: "Breadcrumb",
    component: BreadcrumbDemo,
    type: "registry:ui",
    href: "/sidebar/breadcrumb",
    icon: ArrowRightIcon,
    category: "ui",
  },
  button: {
    name: "Button",
    component: ButtonDemo,
    type: "registry:ui",
    href: "/sidebar/button",
    icon: MousePointerClickIcon,
    category: "ui",
  },
  "button-group": {
    name: "Button Group",
    component: ButtonGroupDemo,
    type: "registry:ui",
    href: "/sidebar/button-group",
    label: "New",
    icon: LayersIcon,
    category: "ui",
  },
  calendar: {
    name: "Calendar",
    component: CalendarDemo,
    type: "registry:ui",
    href: "/sidebar/calendar",
    icon: CalendarIcon,
    category: "ui",
  },
  card: {
    name: "Card",
    component: CardDemo,
    type: "registry:ui",
                href: "/sidebar/card",
    icon: CreditCardIcon,
    category: "ui",
  },
  carousel: {
    name: "Carousel",
    component: CarouselDemo,
    type: "registry:ui",
    href: "/sidebar/carousel",
    icon: ArrowLeftRightIcon,
    category: "ui",
  },
  checkbox: {
    name: "Checkbox",
    component: CheckboxDemo,
    type: "registry:ui",
    href: "/sidebar/checkbox",
    icon: CheckSquareIcon,
    category: "ui",
  },
  collapsible: {
    name: "Collapsible",
    component: CollapsibleDemo,
    type: "registry:ui",
    href: "/sidebar/collapsible",
    icon: ChevronDownIcon,
    category: "ui",
  },
  combobox: {
    name: "Combobox",
    component: ComboboxDemo,
    type: "registry:ui",
    href: "/sidebar/combobox",
    icon: SearchIcon,
    category: "ui",
  },
  command: {
    name: "Command",
    component: CommandDemo,
    type: "registry:ui",
    href: "/sidebar/command",
    icon: CommandIcon,
    category: "ui",
  },
  "context-menu": {
    name: "Context Menu",
    component: ContextMenuDemo,
    type: "registry:ui",
    href: "/sidebar/context-menu",
    icon: MoreVerticalIcon,
    category: "ui",
  },
  "date-picker": {
    name: "Date Picker",
    component: DatePickerDemo,
    type: "registry:ui",
    href: "/sidebar/date-picker",
    icon: CalendarIcon,
    category: "ui",
  },
  dialog: {
    name: "Dialog",
    component: DialogDemo,
    type: "registry:ui",
    href: "/sidebar/dialog",
    icon: MessageSquareIcon,
    category: "ui",
  },
  drawer: {
    name: "Drawer",
    component: DrawerDemo,
    type: "registry:ui",
    href: "/sidebar/drawer",
    icon: PanelLeftIcon,
    category: "ui",
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    component: DropdownMenuDemo,
    type: "registry:ui",
    href: "/sidebar/dropdown-menu",
    icon: ChevronDownIcon,
    category: "ui",
  },
  empty: {
    name: "Empty",
    component: EmptyDemo,
    type: "registry:ui",
    href: "/sidebar/empty",
    label: "New",
    icon: InboxIcon,
    category: "ui",
  },
  field: {
    name: "Field",
    component: FieldDemo,
    type: "registry:ui",
        href: "/sidebar/field",
    label: "New",
    icon: FileTextIcon,
    category: "ui",
  },
  form: {
    name: "Form",
    component: FormDemo,
    type: "registry:ui",
    href: "/sidebar/form",
    icon: FileTextIcon,
    category: "ui",
  },
  "hover-card": {
    name: "Hover Card",
    component: HoverCardDemo,
    type: "registry:ui",
    href: "/sidebar/hover-card",
    icon: MousePointerClickIcon,
    category: "ui",
  },
  input: {
    name: "Input",
    component: InputDemo,
    type: "registry:ui",
    href: "/sidebar/input",
    icon: TypeIcon,
    category: "ui",
  },
  "input-group": {
    name: "Input Group",
    component: InputGroupDemo,
    type: "registry:ui",
    href: "/sidebar/input-group",
    label: "New",
    icon: LayersIcon,
    category: "ui",
  },
  "input-otp": {
    name: "Input OTP",
    component: InputOTPDemo,
    type: "registry:ui",
    href: "/sidebar/input-otp",
    icon: HashIcon,
    category: "ui",
  },
  item: {
    name: "Item",
    component: ItemDemo,
    type: "registry:ui",
    href: "/sidebar/item",
    label: "New",
    icon: FileTextIcon,
    category: "ui",
  },
  kbd: {
    name: "Kbd",
    component: KbdDemo,
    type: "registry:ui",
    href: "/sidebar/kbd",
    label: "New",
    icon: CommandIcon,
    category: "ui",
  },
  label: {
    name: "Label",
    component: LabelDemo,
    type: "registry:ui",
    href: "/sidebar/label",
    icon: TagIcon,
    category: "ui",
  },
  menubar: {
    name: "Menubar",
    component: MenubarDemo,
    type: "registry:ui",
    href: "/sidebar/menubar",
    icon: MenuIcon,
    category: "ui",
  },
  "navigation-menu": {
    name: "Navigation Menu",
    component: NavigationMenuDemo,
    type: "registry:ui",
    href: "/sidebar/navigation-menu",
    icon: MenuIcon,
    category: "ui",
  },
  "native-select": {
    name: "Native Select",
    component: NativeSelectDemo,
    type: "registry:ui",
    href: "/sidebar/native-select",
    label: "New",
    icon: ChevronDownIcon,
    category: "ui",
  },
  pagination: {
    name: "Pagination",
    component: PaginationDemo,
    type: "registry:ui",
        href: "/sidebar/pagination",
    icon: ArrowLeftIcon,
    category: "ui",
  },
  popover: {
    name: "Popover",
    component: PopoverDemo,
    type: "registry:ui",
    href: "/sidebar/popover",
    icon: MessageCircleIcon,
    category: "ui",
  },
  progress: {
    name: "Progress",
    component: ProgressDemo,
    type: "registry:ui",
    href: "/sidebar/progress",
    icon: BarChart3Icon,
    category: "ui",
  },
  "radio-group": {
    name: "Radio Group",
    component: RadioGroupDemo,
    type: "registry:ui",
    href: "/sidebar/radio-group",
    icon: CircleDotIcon,
    category: "ui",
  },
  resizable: {
    name: "Resizable",
    component: ResizableDemo,
    type: "registry:ui",
    href: "/sidebar/resizable",
    icon: ExpandIcon,
    category: "ui",
  },
  "scroll-area": {
    name: "Scroll Area",
    component: ScrollAreaDemo,
    type: "registry:ui",
    href: "/sidebar/scroll-area",
    icon: ArrowDownIcon,
    category: "ui",
  },
  select: {
    name: "Select",
    component: SelectDemo,
    type: "registry:ui",
    href: "/sidebar/select",
    icon: ChevronsUpDownIcon,
    category: "ui",
  },
  separator: {
    name: "Separator",
    component: SeparatorDemo,
    type: "registry:ui",
    href: "/sidebar/separator",
    icon: MinusIcon,
    category: "ui",
  },
  sheet: {
    name: "Sheet",
    component: SheetDemo,
    type: "registry:ui",
    href: "/sidebar/sheet",
    icon: PanelRightIcon,
    category: "ui",
  },
  skeleton: {
    name: "Skeleton",
    component: SkeletonDemo,
    type: "registry:ui",
    href: "/sidebar/skeleton",
    icon: LoaderIcon,
    category: "ui",
  },
  slider: {
    name: "Slider",
    component: SliderDemo,
    type: "registry:ui",
    href: "/sidebar/slider",
    icon: SlidersIcon,
    category: "ui",
  },
  sonner: {
    name: "Sonner",
    component: SonnerDemo,
    type: "registry:ui",
    href: "/sidebar/sonner",
    icon: BellDotIcon,
    category: "ui",
  },
  spinner: {
    name: "Spinner",
    component: SpinnerDemo,
    type: "registry:ui",
        href: "/sidebar/spinner",
    label: "New",
    icon: LoaderIcon,
    category: "ui",
  },
  switch: {
    name: "Switch",
    component: SwitchDemo,
    type: "registry:ui",
    href: "/sidebar/switch",
    icon: PowerIcon,
    category: "ui",
  },
  table: {
    name: "Table",
    component: TableDemo,
    type: "registry:ui",
    href: "/sidebar/table",
    icon: TableIcon,
    category: "ui",
  },
  tabs: {
    name: "Tabs",
    component: TabsDemo,
    type: "registry:ui",
    href: "/sidebar/tabs",
    icon: LayersIcon,
    category: "ui",
  },
  textarea: {
    name: "Textarea",
    component: TextareaDemo,
    type: "registry:ui",
    href: "/sidebar/textarea",
    icon: AlignLeftIcon,
    category: "ui",
  },
  toggle: {
    name: "Toggle",
    component: ToggleDemo,
    type: "registry:ui",
    href: "/sidebar/toggle",
    icon: PowerIcon,
    category: "ui",
  },
  "toggle-group": {
    name: "Toggle Group",
    component: ToggleGroupDemo,
    type: "registry:ui",
    href: "/sidebar/toggle-group",
    icon: LayersIcon,
    category: "ui",
  },
  tooltip: {
    name: "Tooltip",
    component: TooltipDemo,
    type: "registry:ui",
    href: "/sidebar/tooltip",
    icon: HelpCircleIcon,
    category: "ui",
  },
}
export type ComponentKey = keyof typeof componentRegistry