import * as React from "react"
import {
  FolderRootIcon,
  AlertTriangleIcon,
  SquareIcon,
  BellIcon,
  RatioIcon,
  UserCircleIcon,
  BadgeIcon,
  ChevronRight,
  GalleryHorizontalIcon,
  CheckSquare,
  ChevronsUpDown,
  CommandIcon,
  CreditCard,
  FileText,
  MoreHorizontal,
  Menu,
  Hash,
  Circle,
  ArrowLeftRight,
  ScrollText,
  Layers,
  Sheet as SheetIcon,
  Sparkles,
  Loader2,
  ToggleLeft,
  Type,
  Info,
  Table as TableIcon,
  Layout,
  ListChecks,
  Keyboard,
  MessageSquare,
  BarChart3,
  Calendar as CalendarIcon,
  FileInput,
  PanelTop,
  Box,
} from "lucide-react"

import AccordionDemo from "@/app/ui/components/accordion-demo"
import AlertDemo from "@/app/ui/components/alert-demo"
import AspectRatioDemo from "@/app/ui/components/aspect-ratio-demo"
import AlertDialogDemo from "@/app/ui/components/alert-dialog-demo"
import AlertDestructive from "@/app/ui/components/alert-destructive"
import AvatarDemo from "@/app/ui/components/avatar-demo"
import BadgeDemo from "@/app/ui/components/badge-demo"
import BadgeDestructive from "@/app/ui/components/badge-destructive"
import BadgeOutline from "@/app/ui/components/badge-outline"
import BadgeSecondary from "@/app/ui/components/badge-secondary"
import BreadcrumbDemo from "@/app/ui/components/breadcrumb-demo"
import BreadcrumbDropdown from "@/app/ui/components/breadcrumb-dropdown"
import BreadcrumbEllipsis from "@/app/ui/components/breadcrumb-ellipsis"
import BreadcrumbLink from "@/app/ui/components/breadcrumb-link"
import BreadcrumbResponsive from "@/app/ui/components/breadcrumb-responsive"
import BreadcrumbSeparator from "@/app/ui/components/breadcrumb-separator"
import ButtonAsChild from "@/app/ui/components/button-as-child"
import ButtonDefault from "@/app/ui/components/button-default"
import ButtonDemo from "@/app/ui/components/button-demo"
import ButtonDestructive from "@/app/ui/components/button-destructive"
import ButtonGhost from "@/app/ui/components/button-ghost"
import ButtonGroupDemo from "@/app/ui/components/button-group-demo"
import ButtonGroupDropdown from "@/app/ui/components/button-group-dropdown"
import ButtonGroupInputGroup from "@/app/ui/components/button-group-input-group"
import ButtonGroupInput from "@/app/ui/components/button-group-input"
import ButtonGroupNested from "@/app/ui/components/button-group-nested"
import ButtonGroupOrientation from "@/app/ui/components/button-group-orientation"
import ButtonGroupPopover from "@/app/ui/components/button-group-popover"
import ButtonGroupSelect from "@/app/ui/components/button-group-select"
import ButtonGroupSeparator from "@/app/ui/components/button-group-separator"
import ButtonGroupSize from "@/app/ui/components/button-group-size"
import ButtonGroupSplit from "@/app/ui/components/button-group-split"
import ButtonIcon from "@/app/ui/components/button-icon"
import ButtonLink from "@/app/ui/components/button-link"
import ButtonLoading from "@/app/ui/components/button-loading"
import ButtonOutline from "@/app/ui/components/button-outline"
import ButtonRounded from "@/app/ui/components/button-rounded"
import ButtonSecondary from "@/app/ui/components/button-secondary"
    import ButtonSize from "@/app/ui/components/button-size"
import ButtonWithIcon from "@/app/ui/components/button-with-icon"
import CalendarDemo from "@/app/ui/components/calendar-demo"
import CalendarForm from "@/app/ui/components/calendar-form"
import CalendarHijri from "@/app/ui/components/calendar-hijri"
import CardDemo from "@/app/ui/components/card-demo"
import CardWithForm from "@/app/ui/components/card-with-form"
import CarouselApi from "@/app/ui/components/carousel-api"
import CarouselDemo from "@/app/ui/components/carousel-demo"
import CarouselOrientation from "@/app/ui/components/carousel-orientation"
import CarouselPlugin from "@/app/ui/components/carousel-plugin"
import CarouselSize from "@/app/ui/components/carousel-size"
import CarouselSpacing from "@/app/ui/components/carousel-spacing"
import ChartBarDemoAxis from "@/app/ui/components/chart-bar-demo-axis"
import ChartBarDemoGrid from "@/app/ui/components/chart-bar-demo-grid"
import ChartBarDemoLegend from "@/app/ui/components/chart-bar-demo-legend"
import ChartBarDemoTooltip from "@/app/ui/components/chart-bar-demo-tooltip"
import ChartBarDemo from "@/app/ui/components/chart-bar-demo"
import ChartTooltipDemo from "@/app/ui/components/chart-tooltip-demo"
import CheckboxDemo from "@/app/ui/components/checkbox-demo"
import CheckboxDisabled from "@/app/ui/components/checkbox-disabled"
import CheckboxFormMultiple from "@/app/ui/components/checkbox-form-multiple"
import CheckboxFormSingle from "@/app/ui/components/checkbox-form-single"
import CheckboxWithText from "@/app/ui/components/checkbox-with-text"
import CollapsibleDemo from "@/app/ui/components/collapsible-demo"
import ComboboxDemo from "@/app/ui/components/combobox-demo"
import ComboboxDropdownMenu from "@/app/ui/components/combobox-dropdown-menu"
import ComboboxForm from "@/app/ui/components/combobox-form"
import ComboboxPopover from "@/app/ui/components/combobox-popover"
import ComboboxResponsive from "@/app/ui/components/combobox-responsive"
import CommandDemo from "@/app/ui/components/command-demo"
import CommandDialog from "@/app/ui/components/command-dialog"
import ContextMenuDemo from "@/app/ui/components/context-menu-demo"
import DataTableDemo from "@/app/ui/components/data-table-demo"
import DatePickerDemo from "@/app/ui/components/date-picker-demo"
import DatePickerForm from "@/app/ui/components/date-picker-form"
    import DatePickerWithPresets from "@/app/ui/components/date-picker-with-presets"
import DatePickerWithRange from "@/app/ui/components/date-picker-with-range"
import DialogCloseButton from "@/app/ui/components/dialog-close-button"
import DialogDemo from "@/app/ui/components/dialog-demo"
import DrawerDemo from "@/app/ui/components/drawer-demo"
import DrawerDialog from "@/app/ui/components/drawer-dialog"
import DropdownMenuCheckboxes from "@/app/ui/components/dropdown-menu-checkboxes"
import DropdownMenuDemo from "@/app/ui/components/dropdown-menu-demo"
import DropdownMenuDialog from "@/app/ui/components/dropdown-menu-dialog"
import DropdownMenuRadioGroup from "@/app/ui/components/dropdown-menu-radio-group"
import EmptyAvatar from "@/app/ui/components/empty-avatar"
import EmptyAvatarGroup from "@/app/ui/components/empty-avatar-group"
import EmptyBackground from "@/app/ui/components/empty-background"
import EmptyDemo from "@/app/ui/components/empty-demo"
import EmptyIcon from "@/app/ui/components/empty-icon"
import EmptyInputGroup from "@/app/ui/components/empty-input-group"
        import EmptyOutline from "@/app/ui/components/empty-outline"
import FieldCheckbox from "@/app/ui/components/field-checkbox"
import FieldChoiceCard from "@/app/ui/components/field-choice-card"
import FieldDemo from "@/app/ui/components/field-demo"
import FieldFieldset from "@/app/ui/components/field-fieldset"
import FieldGroup from "@/app/ui/components/field-group"
  import FieldInput from "@/app/ui/components/field-input"
import FieldRadio from "@/app/ui/components/field-radio"
import FieldResponsive from "@/app/ui/components/field-responsive"
  import FieldSelect from "@/app/ui/components/field-select"
import FieldSlider from "@/app/ui/components/field-slider"
import FieldSwitch from "@/app/ui/components/field-switch"
import FieldTextarea from "@/app/ui/components/field-textarea"
import FormRhfArray from "@/app/ui/components/form-rhf-array"
  import FormRhfCheckbox from "@/app/ui/components/form-rhf-checkbox"
import FormRhfComplex from "@/app/ui/components/form-rhf-complex"
import FormRhfDemo from "@/app/ui/components/form-rhf-demo"
  import FormRhfInput from "@/app/ui/components/form-rhf-input"
import FormRhfPassword from "@/app/ui/components/form-rhf-password"
import FormRhfRadiogroup from "@/app/ui/components/form-rhf-radiogroup"
import FormRhfSelect from "@/app/ui/components/form-rhf-select"
import FormRhfSwitch from "@/app/ui/components/form-rhf-switch"
import FormRhfTextarea from "@/app/ui/components/form-rhf-textarea"
import FormTanstackArray from "@/app/ui/components/form-tanstack-array"
import FormTanstackCheckbox from "@/app/ui/components/form-tanstack-checkbox"
import FormTanstackComplex from "@/app/ui/components/form-tanstack-complex"
import FormTanstackDemo from "@/app/ui/components/form-tanstack-demo"
import FormTanstackInput from "@/app/ui/components/form-tanstack-input"
import FormTanstackRadiogroup from "@/app/ui/components/form-tanstack-radiogroup"
import FormTanstackSelect from "@/app/ui/components/form-tanstack-select"
import FormTanstackSwitch from "@/app/ui/components/form-tanstack-switch"
import FormTanstackTextarea from "@/app/ui/components/form-tanstack-textarea"
import HoverCardDemo from "@/app/ui/components/hover-card-demo"
import InputDemo from "@/app/ui/components/input-demo"
import InputDisabled from "@/app/ui/components/input-disabled"
import InputFile from "@/app/ui/components/input-file"
import InputForm from "@/app/ui/components/input-form"
import InputGroupButtonGroup from "@/app/ui/components/input-group-button-group"
import InputGroupButton from "@/app/ui/components/input-group-button"
import InputGroupCustom from "@/app/ui/components/input-group-custom"
import InputGroupDemo from "@/app/ui/components/input-group-demo"
import InputGroupDropdown from "@/app/ui/components/input-group-dropdown"
import InputGroupIcon from "@/app/ui/components/input-group-icon"
import InputGroupLabel from "@/app/ui/components/input-group-label"
import InputGroupSpinner from "@/app/ui/components/input-group-spinner"
import InputGroupText from "@/app/ui/components/input-group-text"
import InputGroupTextarea from "@/app/ui/components/input-group-textarea"
import InputGroupTooltip from "@/app/ui/components/input-group-tooltip"
import InputOtpControlled from "@/app/ui/components/input-otp-controlled"
import InputOtpDemo from "@/app/ui/components/input-otp-demo"
import InputOtpForm from "@/app/ui/components/input-otp-form"
import InputOtpPattern from "@/app/ui/components/input-otp-pattern"
import InputOtpSeparator from "@/app/ui/components/input-otp-separator"
import InputWithButton from "@/app/ui/components/input-with-button"
import InputWithLabel from "@/app/ui/components/input-with-label"
import InputWithText from "@/app/ui/components/input-with-text"
import ItemAvatar from "@/app/ui/components/item-avatar"
import ItemDemo from "@/app/ui/components/item-demo"
import ItemDropdown from "@/app/ui/components/item-dropdown"
import ItemGroup from "@/app/ui/components/item-group"
import ItemHeader from "@/app/ui/components/item-header"
import ItemIcon from "@/app/ui/components/item-icon"
import ItemImage from "@/app/ui/components/item-image"
import ItemLink from "@/app/ui/components/item-link"
import ItemSize from "@/app/ui/components/item-size"
import ItemVariant from "@/app/ui/components/item-variant"
import KbdButton from "@/app/ui/components/kbd-button"
import KbdDemo from "@/app/ui/components/kbd-demo"
import KbdGroup from "@/app/ui/components/kbd-group"
import KbdInputGroup from "@/app/ui/components/kbd-input-group"
import KbdTooltip from "@/app/ui/components/kbd-tooltip"
import LabelDemo from "@/app/ui/components/label-demo"
import MenubarDemo from "@/app/ui/components/menubar-demo"
import ModeToggle from "@/app/ui/components/mode-toggle"
import NativeSelectDemo from "@/app/ui/components/native-select-demo"
import NativeSelectDisabled from "@/app/ui/components/native-select-disabled"
import NativeSelectGroups from "@/app/ui/components/native-select-groups"
import NativeSelectInvalid from "@/app/ui/components/native-select-invalid"
import NavigationMenuDemo from "@/app/ui/components/navigation-menu-demo"
import PaginationDemo from "@/app/ui/components/pagination-demo"
import PopoverDemo from "@/app/ui/components/popover-demo"
import ProgressDemo from "@/app/ui/components/progress-demo"
import RadioGroupDemo from "@/app/ui/components/radio-group-demo"
import RadioGroupForm from "@/app/ui/components/radio-group-form"
import ResizableDemoWithHandle from "@/app/ui/components/resizable-demo-with-handle"
import ResizableDemo from "@/app/ui/components/resizable-demo"
import ResizableHandle from "@/app/ui/components/resizable-handle"
import ResizableVertical from "@/app/ui/components/resizable-vertical"
import ScrollAreaDemo from "@/app/ui/components/scroll-area-demo"
import ScrollAreaHorizontalDemo from "@/app/ui/components/scroll-area-horizontal-demo"
import SelectDemo from "@/app/ui/components/select-demo"
import SelectForm from "@/app/ui/components/select-form"
import SelectScrollable from "@/app/ui/components/select-scrollable"
import SeparatorDemo from "@/app/ui/components/separator-demo"
import SheetDemo from "@/app/ui/components/sheet-demo"
import SheetSide from "@/app/ui/components/sheet-side"
import SkeletonCard from "@/app/ui/components/skeleton-card"
import SkeletonDemo from "@/app/ui/components/skeleton-demo"
import SliderDemo from "@/app/ui/components/slider-demo"
import SonnerDemo from "@/app/ui/components/sonner-demo"
import SonnerTypes from "@/app/ui/components/sonner-types"
import SpinnerBadge from "@/app/ui/components/spinner-badge"
import SpinnerBasic from "@/app/ui/components/spinner-basic"
import SpinnerButton from "@/app/ui/components/spinner-button"
import SpinnerColor from "@/app/ui/components/spinner-color"
import SpinnerCustom from "@/app/ui/components/spinner-custom"
import SpinnerDemo from "@/app/ui/components/spinner-demo"
import SpinnerEmpty from "@/app/ui/components/spinner-empty"
import SpinnerInputGroup from "@/app/ui/components/spinner-input-group"
import SpinnerItem from "@/app/ui/components/spinner-item"
import SpinnerSize from "@/app/ui/components/spinner-size"
import SwitchDemo from "@/app/ui/components/switch-demo"
import SwitchForm from "@/app/ui/components/switch-form"
import TableDemo from "@/app/ui/components/table-demo"
import TabsDemo from "@/app/ui/components/tabs-demo"
import TextareaDemo from "@/app/ui/components/textarea-demo"
import TextareaDisabled from "@/app/ui/components/textarea-disabled"
import TextareaForm from "@/app/ui/components/textarea-form"
import TextareaWithButton from "@/app/ui/components/textarea-with-button"
import TextareaWithLabel from "@/app/ui/components/textarea-with-label"
import TextareaWithText from "@/app/ui/components/textarea-with-text"
import ToggleDemo from "@/app/ui/components/toggle-demo"
import ToggleDisabled from "@/app/ui/components/toggle-disabled"
import ToggleGroupDemo from "@/app/ui/components/toggle-group-demo"
import ToggleGroupDisabled from "@/app/ui/components/toggle-group-disabled"
import ToggleGroupLg from "@/app/ui/components/toggle-group-lg"
import ToggleGroupOutline from "@/app/ui/components/toggle-group-outline"
import ToggleGroupSingle from "@/app/ui/components/toggle-group-single"
import ToggleGroupSm from "@/app/ui/components/toggle-group-sm"
import ToggleGroupSpacing from "@/app/ui/components/toggle-group-spacing"
import ToggleLg from "@/app/ui/components/toggle-lg"
import ToggleOutline from "@/app/ui/components/toggle-outline"
import ToggleSm from "@/app/ui/components/toggle-sm"
import ToggleWithText from "@/app/ui/components/toggle-with-text"
import TooltipDemo from "@/app/ui/components/tooltip-demo"
import TypographyBlockquote from "@/app/ui/components/typography-blockquote"
import TypographyH1 from "@/app/ui/components/typography-h1"
import TypographyH2 from "@/app/ui/components/typography-h2"
import TypographyH3 from "@/app/ui/components/typography-h3"
import TypographyH4 from "@/app/ui/components/typography-h4"
import TypographyInlineCode from "@/app/ui/components/typography-inline-code"
import TypographyLarge from "@/app/ui/components/typography-large"
import TypographyLead from "@/app/ui/components/typography-lead"
import TypographyList from "@/app/ui/components/typography-list"
import TypographyMuted from "@/app/ui/components/typography-muted"
import TypographyP from "@/app/ui/components/typography-p"
import TypographySmall from "@/app/ui/components/typography-small"
import TypographyTable from "@/app/ui/components/typography-table"

import { ComponentDisplay } from "@/app/ui/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  {
    name: "accordion-demo",
    icon: <FolderRootIcon />,
    component: AccordionDemo,
  },
  { name: "alert-demo", icon: <BellIcon />, component: AlertDemo },
  {
    name: "alert-destructive",
    icon: <BellIcon />,
    component: AlertDestructive,
  },
  {
    name: "alert-dialog-demo",
    icon: <AlertTriangleIcon />,
    component: AlertDialogDemo,
  },
  {
    name: "aspect-ratio-demo",
    icon: <RatioIcon />,
    component: AspectRatioDemo,
  },
  { name: "avatar-demo", icon: <UserCircleIcon />, component: AvatarDemo },
  { name: "badge-demo", icon: <BadgeIcon />, component: BadgeDemo },
  {
    name: "badge-destructive",
    icon: <BadgeIcon />,
    component: BadgeDestructive,
  },
  { name: "badge-outline", icon: <BadgeIcon />, component: BadgeOutline },
  { name: "badge-secondary", icon: <BadgeIcon />, component: BadgeSecondary },
  {
    name: "breadcrumb-demo",
    icon: <ChevronRight />,
    component: BreadcrumbDemo,
  },
  {
    name: "breadcrumb-separator",
    icon: <ChevronRight />,
    component: BreadcrumbSeparator,
  },
  {
    name: "breadcrumb-dropdown",
    icon: <ChevronRight />,
    component: BreadcrumbDropdown,
  },
  {
    name: "breadcrumb-ellipsis",
    icon: <ChevronRight />,
    component: BreadcrumbEllipsis,
  },
  {
    name: "breadcrumb-link",
    icon: <ChevronRight />,
    component: BreadcrumbLink,
  },
  {
    name: "breadcrumb-responsive",
    icon: <ChevronRight />,
    component: BreadcrumbResponsive,
  },
  { name: "button-demo", icon: <SquareIcon />, component: ButtonDemo },
  { name: "button-default", icon: <SquareIcon />, component: ButtonDefault },
  {
    name: "button-secondary",
    icon: <SquareIcon />,
    component: ButtonSecondary,
  },
  {
    name: "button-destructive",
    icon: <SquareIcon />,
    component: ButtonDestructive,
  },
  { name: "button-outline", icon: <SquareIcon />, component: ButtonOutline },
  { name: "button-ghost", icon: <SquareIcon />, component: ButtonGhost },
  { name: "button-link", icon: <SquareIcon />, component: ButtonLink },
  { name: "button-with-icon", icon: <SquareIcon />, component: ButtonWithIcon },
  { name: "button-loading", icon: <SquareIcon />, component: ButtonLoading },
  { name: "button-icon", icon: <SquareIcon />, component: ButtonIcon },
  { name: "button-as-child", icon: <SquareIcon />, component: ButtonAsChild },
  { name: "button-rounded", icon: <SquareIcon />, component: ButtonRounded },
  { name: "button-size", icon: <SquareIcon />, component: ButtonSize },
  { name: "button-group-demo", icon: <Layers />, component: ButtonGroupDemo },
  {
    name: "button-group-nested",
    icon: <Layers />,
    component: ButtonGroupNested,
  },
  { name: "button-group-size", icon: <Layers />, component: ButtonGroupSize },
  {
    name: "button-group-separator",
    icon: <Layers />,
    component: ButtonGroupSeparator,
  },
  { name: "button-group-split", icon: <Layers />, component: ButtonGroupSplit },
  { name: "button-group-input", icon: <Layers />, component: ButtonGroupInput },
  {
    name: "button-group-dropdown",
    icon: <Layers />,
    component: ButtonGroupDropdown,
  },
  {
    name: "button-group-select",
    icon: <Layers />,
    component: ButtonGroupSelect,
  },
  {
    name: "button-group-popover",
    icon: <Layers />,
    component: ButtonGroupPopover,
  },
  {
    name: "button-group-input-group",
    icon: <Layers />,
    component: ButtonGroupInputGroup,
  },
  {
    name: "button-group-orientation",
    icon: <Layers />,
    component: ButtonGroupOrientation,
  },
  { name: "calendar-demo", icon: <CalendarIcon />, component: CalendarDemo },
  { name: "calendar-form", icon: <CalendarIcon />, component: CalendarForm },
  { name: "card-demo", icon: <CreditCard />, component: CardDemo },
  { name: "card-with-form", icon: <CreditCard />, component: CardWithForm },
  {
    name: "carousel-demo",
    icon: <GalleryHorizontalIcon />,
    component: CarouselDemo,
    className: "[&_.max-w-xs]:max-w-[70%]",
  },
  {
    name: "carousel-size",
    icon: <GalleryHorizontalIcon />,
    component: CarouselSize,
  },
  {
    name: "carousel-spacing",
    icon: <GalleryHorizontalIcon />,
    component: CarouselSpacing,
  },
  {
    name: "carousel-orientation",
    icon: <GalleryHorizontalIcon />,
    component: CarouselOrientation,
  },
  {
    name: "carousel-api",
    icon: <GalleryHorizontalIcon />,
    component: CarouselApi,
  },
  {
    name: "carousel-plugin",
    icon: <GalleryHorizontalIcon />,
    component: CarouselPlugin,
  },
  { name: "checkbox-demo", icon: <CheckSquare />, component: CheckboxDemo },
  {
    name: "checkbox-disabled",
    icon: <CheckSquare />,
    component: CheckboxDisabled,
  },
  {
    name: "checkbox-form-multiple",
    icon: <CheckSquare />,
    component: CheckboxFormMultiple,
  },
  {
    name: "checkbox-form-single",
    icon: <CheckSquare />,
    component: CheckboxFormSingle,
  },
  {
    name: "checkbox-with-text",
    icon: <CheckSquare />,
    component: CheckboxWithText,
  },
  {
    name: "collapsible-demo",
    icon: <ChevronsUpDown />,
    component: CollapsibleDemo,
  },
  { name: "combobox-demo", icon: <CommandIcon />, component: ComboboxDemo },
  {
    name: "combobox-dropdown-menu",
    icon: <CommandIcon />,
    component: ComboboxDropdownMenu,
  },
  { name: "combobox-form", icon: <CommandIcon />, component: ComboboxForm },
  {
    name: "combobox-popover",
    icon: <CommandIcon />,
    component: ComboboxPopover,
  },
  {
    name: "combobox-responsive",
    icon: <CommandIcon />,
    component: ComboboxResponsive,
  },
  {
    name: "command-demo",
    icon: <CommandIcon />,
    component: CommandDemo,
    className: "[&_[cmdk-root]]:md:min-w-max",
  },
  { name: "command-dialog", icon: <CommandIcon />, component: CommandDialog },
  { name: "context-menu-demo", icon: <Menu />, component: ContextMenuDemo },
  {
    name: "data-table-demo",
    icon: <TableIcon />,
    component: DataTableDemo,
    className: "col-span-2",
  },
  {
    name: "date-picker-demo",
    icon: <CalendarIcon />,
    component: DatePickerDemo,
  },
  {
    name: "date-picker-form",
    icon: <CalendarIcon />,
    component: DatePickerForm,
  },
  {
    name: "date-picker-with-presets",
    icon: <CalendarIcon />,
    component: DatePickerWithPresets,
  },
  {
    name: "date-picker-with-range",
    icon: <CalendarIcon />,
    component: DatePickerWithRange,
  },
  { name: "dialog-demo", icon: <MessageSquare />, component: DialogDemo },
  {
    name: "dialog-close-button",
    icon: <MessageSquare />,
    component: DialogCloseButton,
  },
  { name: "drawer-demo", icon: <PanelTop />, component: DrawerDemo },
  { name: "empty-demo", icon: <Box />, component: EmptyDemo },
  { name: "empty-icon", icon: <Box />, component: EmptyIcon },
  { name: "empty-avatar", icon: <Box />, component: EmptyAvatar },
  { name: "empty-avatar-group", icon: <Box />, component: EmptyAvatarGroup },
  { name: "empty-input-group", icon: <Box />, component: EmptyInputGroup },
  { name: "empty-outline", icon: <Box />, component: EmptyOutline },
  { name: "empty-background", icon: <Box />, component: EmptyBackground },
  { name: "field-demo", icon: <FileInput />, component: FieldDemo },
  { name: "field-input", icon: <FileInput />, component: FieldInput },
  { name: "field-textarea", icon: <FileInput />, component: FieldTextarea },
  { name: "field-fieldset", icon: <FileInput />, component: FieldFieldset },
  { name: "field-radio", icon: <FileInput />, component: FieldRadio },
  { name: "field-checkbox", icon: <FileInput />, component: FieldCheckbox },
  { name: "field-switch", icon: <FileInput />, component: FieldSwitch },
  { name: "field-slider", icon: <FileInput />, component: FieldSlider },
  { name: "field-select", icon: <FileInput />, component: FieldSelect },
  {
    name: "field-choice-card",
    icon: <FileInput />,
    component: FieldChoiceCard,
  },
  { name: "field-group", icon: <FileInput />, component: FieldGroup },
  { name: "field-responsive", icon: <FileInput />, component: FieldResponsive },
  { name: "form-rhf-demo", icon: <FileText />, component: FormRhfDemo },
  { name: "form-rhf-input", icon: <FileText />, component: FormRhfInput },
  { name: "form-rhf-select", icon: <FileText />, component: FormRhfSelect },
  { name: "form-rhf-checkbox", icon: <FileText />, component: FormRhfCheckbox },
  { name: "form-rhf-switch", icon: <FileText />, component: FormRhfSwitch },
  { name: "form-rhf-textarea", icon: <FileText />, component: FormRhfTextarea },
  {
    name: "form-rhf-radiogroup",
    icon: <FileText />,
    component: FormRhfRadiogroup,
  },
  { name: "form-rhf-array", icon: <FileText />, component: FormRhfArray },
  { name: "form-rhf-complex", icon: <FileText />, component: FormRhfComplex },
  { name: "form-rhf-password", icon: <FileText />, component: FormRhfPassword },
  {
    name: "form-tanstack-demo",
    icon: <FileText />,
    component: FormTanstackDemo,
  },
  {
    name: "form-tanstack-input",
    icon: <FileText />,
    component: FormTanstackInput,
  },
  {
    name: "form-tanstack-textarea",
    icon: <FileText />,
    component: FormTanstackTextarea,
  },
  {
    name: "form-tanstack-select",
    icon: <FileText />,
    component: FormTanstackSelect,
  },
  {
    name: "form-tanstack-checkbox",
    icon: <FileText />,
    component: FormTanstackCheckbox,
  },
  {
    name: "form-tanstack-switch",
    icon: <FileText />,
    component: FormTanstackSwitch,
  },
  {
    name: "form-tanstack-radiogroup",
    icon: <FileText />,
    component: FormTanstackRadiogroup,
  },
  {
    name: "form-tanstack-array",
    icon: <FileText />,
    component: FormTanstackArray,
  },
  {
    name: "form-tanstack-complex",
    icon: <FileText />,
    component: FormTanstackComplex,
  },
  { name: "drawer-dialog", icon: <PanelTop />, component: DrawerDialog },
  {
    name: "dropdown-menu-demo",
    icon: <MoreHorizontal />,
    component: DropdownMenuDemo,
  },
  {
    name: "dropdown-menu-checkboxes",
    icon: <MoreHorizontal />,
    component: DropdownMenuCheckboxes,
  },
  {
    name: "dropdown-menu-radio-group",
    icon: <MoreHorizontal />,
    component: DropdownMenuRadioGroup,
  },
  {
    name: "dropdown-menu-dialog",
    icon: <MoreHorizontal />,
    component: DropdownMenuDialog,
  },
  { name: "hover-card-demo", icon: <Info />, component: HoverCardDemo },
  { name: "input-demo", icon: <FileInput />, component: InputDemo },
  { name: "input-disabled", icon: <FileInput />, component: InputDisabled },
  { name: "input-file", icon: <FileInput />, component: InputFile },
  { name: "input-form", icon: <FileInput />, component: InputForm },
  {
    name: "input-with-button",
    icon: <FileInput />,
    component: InputWithButton,
  },
  { name: "input-with-label", icon: <FileInput />, component: InputWithLabel },
  { name: "input-with-text", icon: <FileInput />, component: InputWithText },
  { name: "input-group-demo", icon: <Layers />, component: InputGroupDemo },
  { name: "input-group-label", icon: <Layers />, component: InputGroupLabel },
  { name: "input-group-text", icon: <Layers />, component: InputGroupText },
  {
    name: "input-group-tooltip",
    icon: <Layers />,
    component: InputGroupTooltip,
  },
  { name: "input-group-button", icon: <Layers />, component: InputGroupButton },
  {
    name: "input-group-button-group",
    icon: <Layers />,
    component: InputGroupButtonGroup,
  },
  {
    name: "input-group-dropdown",
    icon: <Layers />,
    component: InputGroupDropdown,
  },
  {
    name: "input-group-spinner",
    icon: <Layers />,
    component: InputGroupSpinner,
  },
  {
    name: "input-group-textarea",
    icon: <Layers />,
    component: InputGroupTextarea,
  },
  { name: "input-group-icon", icon: <Layers />, component: InputGroupIcon },
  { name: "input-group-custom", icon: <Layers />, component: InputGroupCustom },
  { name: "input-otp-demo", icon: <Hash />, component: InputOtpDemo },
  { name: "input-otp-pattern", icon: <Hash />, component: InputOtpPattern },
  { name: "input-otp-separator", icon: <Hash />, component: InputOtpSeparator },
  {
    name: "input-otp-controlled",
    icon: <Hash />,
    component: InputOtpControlled,
  },
  { name: "input-otp-form", icon: <Hash />, component: InputOtpForm },
  { name: "item-demo", icon: <ListChecks />, component: ItemDemo },
  { name: "item-size", icon: <ListChecks />, component: ItemSize },
  { name: "item-variant", icon: <ListChecks />, component: ItemVariant },
  { name: "item-icon", icon: <ListChecks />, component: ItemIcon },
  { name: "item-image", icon: <ListChecks />, component: ItemImage },
  { name: "item-avatar", icon: <ListChecks />, component: ItemAvatar },
  { name: "item-group", icon: <ListChecks />, component: ItemGroup },
  { name: "item-header", icon: <ListChecks />, component: ItemHeader },
  { name: "item-dropdown", icon: <ListChecks />, component: ItemDropdown },
  { name: "item-link", icon: <ListChecks />, component: ItemLink },
  { name: "kbd-demo", icon: <Keyboard />, component: KbdDemo },
  { name: "kbd-tooltip", icon: <Keyboard />, component: KbdTooltip },
  { name: "kbd-input-group", icon: <Keyboard />, component: KbdInputGroup },
  { name: "kbd-button", icon: <Keyboard />, component: KbdButton },
  { name: "kbd-group", icon: <Keyboard />, component: KbdGroup },
  { name: "label-demo", icon: <FileText />, component: LabelDemo },
  { name: "menubar-demo", icon: <Menu />, component: MenubarDemo },
  {
    name: "navigation-menu-demo",
    icon: <Menu />,
    component: NavigationMenuDemo,
    className: "md:col-span-2",
  },
  { name: "native-select-demo", icon: <Circle />, component: NativeSelectDemo },
  {
    name: "native-select-groups",
    icon: <Circle />,
    component: NativeSelectGroups,
  },
  {
    name: "native-select-disabled",
    icon: <Circle />,
    component: NativeSelectDisabled,
  },
  {
    name: "native-select-invalid",
    icon: <Circle />,
    component: NativeSelectInvalid,
  },
  {
    name: "pagination-demo",
    icon: <ChevronRight />,
    component: PaginationDemo,
  },
  { name: "popover-demo", icon: <MessageSquare />, component: PopoverDemo },
  { name: "progress-demo", icon: <Loader2 />, component: ProgressDemo },
  { name: "radio-group-demo", icon: <Circle />, component: RadioGroupDemo },
  { name: "radio-group-form", icon: <Circle />, component: RadioGroupForm },
  {
    name: "resizable-demo",
    icon: <ArrowLeftRight />,
    component: ResizableDemo,
    className: "md:col-span-2",
  },
  {
    name: "resizable-demo-with-handle",
    icon: <ArrowLeftRight />,
    component: ResizableDemoWithHandle,
  },
  {
    name: "resizable-vertical",
    icon: <ArrowLeftRight />,
    component: ResizableVertical,
  },
  {
    name: "resizable-handle",
    icon: <ArrowLeftRight />,
    component: ResizableHandle,
  },
  { name: "scroll-area-demo", icon: <ScrollText />, component: ScrollAreaDemo },
  {
    name: "scroll-area-horizontal-demo",
    icon: <ScrollText />,
    component: ScrollAreaHorizontalDemo,
  },
  { name: "select-demo", icon: <Circle />, component: SelectDemo },
  { name: "select-scrollable", icon: <Circle />, component: SelectScrollable },
  { name: "select-form", icon: <Circle />, component: SelectForm },
  {
    name: "separator-demo",
    icon: <ArrowLeftRight />,
    component: SeparatorDemo,
  },
  { name: "sheet-demo", icon: <SheetIcon />, component: SheetDemo },
  { name: "sheet-side", icon: <SheetIcon />, component: SheetSide },
  { name: "skeleton-demo", icon: <Sparkles />, component: SkeletonDemo },
  { name: "skeleton-card", icon: <Sparkles />, component: SkeletonCard },
  { name: "slider-demo", icon: <ArrowLeftRight />, component: SliderDemo },
  { name: "sonner-demo", icon: <BellIcon />, component: SonnerDemo },
  { name: "sonner-types", icon: <BellIcon />, component: SonnerTypes },
  { name: "spinner-demo", icon: <Loader2 />, component: SpinnerDemo },
  { name: "spinner-basic", icon: <Loader2 />, component: SpinnerBasic },
  { name: "spinner-button", icon: <Loader2 />, component: SpinnerButton },
  { name: "spinner-badge", icon: <Loader2 />, component: SpinnerBadge },
  {
    name: "spinner-input-group",
    icon: <Loader2 />,
    component: SpinnerInputGroup,
  },
  { name: "spinner-empty", icon: <Loader2 />, component: SpinnerEmpty },
  { name: "spinner-color", icon: <Loader2 />, component: SpinnerColor },
  { name: "spinner-custom", icon: <Loader2 />, component: SpinnerCustom },
  { name: "spinner-size", icon: <Loader2 />, component: SpinnerSize },
  { name: "spinner-item", icon: <Loader2 />, component: SpinnerItem },
  { name: "switch-demo", icon: <ToggleLeft />, component: SwitchDemo },
  { name: "switch-form", icon: <ToggleLeft />, component: SwitchForm },
  {
    name: "table-demo",
    icon: <TableIcon />,
    component: TableDemo,
    className: "md:col-span-2",
  },
  { name: "tabs-demo", icon: <Layout />, component: TabsDemo },
  { name: "textarea-demo", icon: <FileText />, component: TextareaDemo },
  {
    name: "textarea-disabled",
    icon: <FileText />,
    component: TextareaDisabled,
  },
  { name: "textarea-form", icon: <FileText />, component: TextareaForm },
  {
    name: "textarea-with-button",
    icon: <FileText />,
    component: TextareaWithButton,
  },
  {
    name: "textarea-with-label",
    icon: <FileText />,
    component: TextareaWithLabel,
  },
  {
    name: "textarea-with-text",
    icon: <FileText />,
    component: TextareaWithText,
  },
  {
    name: "toggle-group-demo",
    icon: <ToggleLeft />,
    component: ToggleGroupDemo,
  },
  {
    name: "toggle-group-disabled",
    icon: <ToggleLeft />,
    component: ToggleGroupDisabled,
  },
  { name: "toggle-group-lg", icon: <ToggleLeft />, component: ToggleGroupLg },
  {
    name: "toggle-group-outline",
    icon: <ToggleLeft />,
    component: ToggleGroupOutline,
  },
  { name: "toggle-group-sm", icon: <ToggleLeft />, component: ToggleGroupSm },
  {
    name: "toggle-group-single",
    icon: <ToggleLeft />,
    component: ToggleGroupSingle,
  },
  {
    name: "toggle-group-spacing",
    icon: <ToggleLeft />,
    component: ToggleGroupSpacing,
  },
  { name: "toggle-demo", icon: <ToggleLeft />, component: ToggleDemo },
  { name: "toggle-disabled", icon: <ToggleLeft />, component: ToggleDisabled },
  { name: "toggle-lg", icon: <ToggleLeft />, component: ToggleLg },
  { name: "toggle-outline", icon: <ToggleLeft />, component: ToggleOutline },
  { name: "toggle-sm", icon: <ToggleLeft />, component: ToggleSm },
  { name: "toggle-with-text", icon: <ToggleLeft />, component: ToggleWithText },
  { name: "tooltip-demo", icon: <Info />, component: TooltipDemo },
  {
    name: "typography-blockquote",
    icon: <Type />,
    component: TypographyBlockquote,
  },
  { name: "typography-h1", icon: <Type />, component: TypographyH1 },
  { name: "typography-h2", icon: <Type />, component: TypographyH2 },
  { name: "typography-h3", icon: <Type />, component: TypographyH3 },
  { name: "typography-h4", icon: <Type />, component: TypographyH4 },
  {
    name: "typography-inline-code",
    icon: <Type />,
    component: TypographyInlineCode,
  },
  { name: "typography-large", icon: <Type />, component: TypographyLarge },
  { name: "typography-lead", icon: <Type />, component: TypographyLead },
  { name: "typography-list", icon: <Type />, component: TypographyList },
  { name: "typography-muted", icon: <Type />, component: TypographyMuted },
  { name: "typography-p", icon: <Type />, component: TypographyP },
  { name: "typography-small", icon: <Type />, component: TypographySmall },
  { name: "typography-table", icon: <Type />, component: TypographyTable },
  { name: "mode-toggle", icon: <Sparkles />, component: ModeToggle },
  { name: "chart-bar-demo", icon: <BarChart3 />, component: ChartBarDemo },
  {
    name: "chart-bar-demo-grid",
    icon: <BarChart3 />,
    component: ChartBarDemoGrid,
  },
  {
    name: "chart-bar-demo-axis",
    icon: <BarChart3 />,
    component: ChartBarDemoAxis,
  },
  {
    name: "chart-bar-demo-tooltip",
    icon: <BarChart3 />,
    component: ChartBarDemoTooltip,
  },
  {
    name: "chart-bar-demo-legend",
    icon: <BarChart3 />,
    component: ChartBarDemoLegend,
  },
  {
    name: "chart-tooltip-demo",
    icon: <BarChart3 />,
    component: ChartTooltipDemo,
  },
  { name: "calendar-hijri", icon: <CalendarIcon />, component: CalendarHijri },
]

export default async function ComponentsPage() {

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <ComponentDisplay
            key={comp.name}
            path={comp.name}
            icon={comp.icon}
            className={comp.className}
          >
            <comp.component />
          </ComponentDisplay>
        ))}
      </div>
    </div>
  )
}
