"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useThemeConfig } from "@/components/themes/active-theme"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Orb } from "@/components/orb" // if your file is "Orb.tsx", switch to "@/components/Orb"

const DEFAULT_THEMES = [{ name: "Default", value: "default" }] as const

const COLOR_THEMES = [
  { name: "Red", value: "red" },
  { name: "Orange", value: "orange" },
  { name: "Amber", value: "amber" },
  { name: "Yellow", value: "yellow" },
  { name: "Lime", value: "lime" },
  { name: "Green", value: "green" },
  { name: "Emerald", value: "emerald" },
  { name: "Teal", value: "teal" },
  { name: "Cyan", value: "cyan" },
  { name: "Sky", value: "sky" },
  { name: "Blue", value: "blue" },
  { name: "Indigo", value: "indigo" },
  { name: "Violet", value: "violet" },
  { name: "Purple", value: "purple" },
  { name: "Fuchsia", value: "fuchsia" },
  { name: "Pink", value: "pink" },
  { name: "Rose", value: "rose" },
] as const
const NEUTRAL_THEMES = [
  { name: "Slate", value: "slate" },
  { name: "Gray", value: "gray" },
  { name: "Zinc", value: "zinc" },
  { name: "Neutral", value: "neutral" },
  { name: "Stone", value: "stone" },
] as const

const ALL_THEMES = [...DEFAULT_THEMES, ...NEUTRAL_THEMES, ...COLOR_THEMES]

/** Base orb image (measured base hue ≈ 205°) */
const ORB_SRC = "/themes/orb-5.webp"

/** Hue values for all themes (relative to base ≈ 205°) */
const HUE_BY_THEME: Record<string, number> = {
  // defaults
  default: 40,
  // colors
  red: 155,
  orange: 185,
  amber: 200,
  yellow: 215,
  lime: 230,
  green: 275,
  emerald: 295,
  teal: 335,
  cyan: 345,
  sky: 355,
  blue: 5,
  indigo: 40,
  violet: 65,
  purple: 85,
  fuchsia: 105,
  pink: 125,
  rose: 145,
}

const NEUTRAL_THEMES_LIST = ["slate", "gray", "zinc", "neutral", "stone"]

const NEUTRAL_BRIGHTNESS: Record<string, number> = {
  slate: 0.85,
  gray: 1.0,
  zinc: 0.75,
  neutral: 1.15,
  stone: 0.65,
}

type ThemeOverride = {
  img?: React.CSSProperties
  wrapper?: React.CSSProperties
  src?: string
}

const THEME_OVERRIDES: Record<string, ThemeOverride> = {
  emerald: {
    src: "/themes/orb-2.webp",
    img: {
      color: "transparent",
      filter: "hue-rotate(316deg) saturate(120%)",
      transform: "rotate(316deg)",
      objectFit: "cover",
      objectPosition: "center center",
    },
  },
  pink: {
    img: {
      color: "transparent",
      filter: "hue-rotate(101deg) saturate(120%)",
      transform: "rotate(101deg)",
      objectFit: "cover",
      objectPosition: "center center",
    },
  },
}

function ColorOrb({
  themeValue,
  size = 18,
}: {
  themeValue: string
  size?: number
}) {
  const override = THEME_OVERRIDES[themeValue]
  const hue = HUE_BY_THEME[themeValue]
  const isNeutral = NEUTRAL_THEMES_LIST.includes(themeValue)

  // Handle neutral themes with desaturation
  if (isNeutral) {
    const brightness = NEUTRAL_BRIGHTNESS[themeValue] ?? 1.0
    return (
      <Orb
        src={override?.src ?? ORB_SRC}
        size={size}
        hueDeg={0}
        saturate={0.15}
        rotateDeg={0}
        imgStyle={{
          filter: `saturate(0.15) brightness(${brightness})`,
          ...override?.img,
        }}
        wrapperStyle={override?.wrapper}
        imgClassName="pointer-events-none select-none"
      />
    )
  }

  // Handle color themes with hue rotation
  const hasMapping = hue !== undefined || override
  return (
    <Orb
      src={override?.src ?? ORB_SRC}
      size={size}
      hueDeg={hasMapping ? (hue ?? 0) : 0}
      saturate={1.2}
      rotateDeg={149}
      imgStyle={override?.img}
      wrapperStyle={override?.wrapper}
      imgClassName="pointer-events-none select-none"
    />
  )
}

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const [open, setOpen] = React.useState(false)

  const selectedTheme = ALL_THEMES.find((t) => t.value === activeTheme)
  const showOrb =
    activeTheme != null &&
    (HUE_BY_THEME[activeTheme] !== undefined ||
      THEME_OVERRIDES[activeTheme] !== undefined ||
      NEUTRAL_THEMES_LIST.includes(activeTheme))

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        {/* === TRIGGER: JUST THE ORB WITH TOOLTIP === */}
        <TooltipProvider>
          <Tooltip>
            <PopoverTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  id="theme-selector"
                  variant="outline"
                  aria-label={
                    selectedTheme
                      ? `${selectedTheme.name} theme`
                      : "Select theme"
                  }
                  className="text-secondary-foreground border-none shadow-none h-6 w-6 p-0 rounded-full flex items-center justify-center"
                >
                  {/* if there is a mapping/override show configured orb; else show base orb */}
                  {showOrb ? (
                    <ColorOrb themeValue={activeTheme!} size={18} />
                  ) : (
                    <Orb
                      src={ORB_SRC}
                      size={18}
                      hueDeg={0}
                      saturate={1.0}
                      rotateDeg={0}
                    />
                  )}
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <TooltipContent sideOffset={8}>
              {selectedTheme ? selectedTheme.name : "Select theme"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* === POPOVER CONTENT === */}
        <PopoverContent className="w-[240px] p-0" align="end">
          <Command>
            <CommandInput placeholder="Search theme..." className="h-9" />
            <CommandList>
              <CommandEmpty>No theme found.</CommandEmpty>

              {/* DEFAULT THEMES */}
              <CommandGroup>
                {DEFAULT_THEMES.map((theme) => (
                  <CommandItem
                    key={theme.value}
                    value={theme.value}
                    onSelect={(currentValue: string) => {
                      setActiveTheme(currentValue)
                      setOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {(HUE_BY_THEME[theme.value] !== undefined ||
                        THEME_OVERRIDES[theme.value] ||
                        NEUTRAL_THEMES_LIST.includes(theme.value)) && (
                        <ColorOrb themeValue={theme.value} />
                      )}
                      <span>{theme.name}</span>
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        activeTheme === theme.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              {/* COLOR THEMES */}
              <CommandGroup heading="Colors">
                {COLOR_THEMES.map((theme) => (
                  <CommandItem
                    key={theme.value}
                    value={theme.value}
                    onSelect={(currentValue: string) => {
                      setActiveTheme(currentValue)
                      setOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {(HUE_BY_THEME[theme.value] !== undefined ||
                        THEME_OVERRIDES[theme.value] ||
                        NEUTRAL_THEMES_LIST.includes(theme.value)) && (
                        <ColorOrb themeValue={theme.value} />
                      )}
                      <span>{theme.name}</span>
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        activeTheme === theme.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              {/* NEUTRAL THEMES */}
              <CommandGroup heading="Neutrals">
                {NEUTRAL_THEMES.map((theme) => (
                  <CommandItem
                    key={theme.value}
                    value={theme.value}
                    onSelect={(currentValue) => {
                      setActiveTheme(currentValue)
                      setOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {(HUE_BY_THEME[theme.value] !== undefined ||
                        THEME_OVERRIDES[theme.value] ||
                        NEUTRAL_THEMES_LIST.includes(theme.value)) && (
                        <ColorOrb themeValue={theme.value} />
                      )}
                      <span>{theme.name}</span>
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        activeTheme === theme.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
