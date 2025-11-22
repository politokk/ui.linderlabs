import { getActiveStyle } from "@/lib/styles"

import {
  AreaChartIcon,
  BarChartIcon,
  LineChartIcon,
  PieChartIcon,
  ActivityIcon,
  TrendingUpIcon,
  InfoIcon,
} from "lucide-react"

// Area chart
import { ChartAreaAxes } from "@/components/demos/chart/chart-area-axes"
import { ChartAreaDefault } from "@/components/demos/chart/chart-area-default"
import { ChartAreaGradient } from "@/components/demos/chart/chart-area-gradient"
import { ChartAreaIcons } from "@/components/demos/chart/chart-area-icons"
import { ChartAreaInteractive } from "@/components/demos/chart/chart-area-interactive"
import { ChartAreaLegend } from "@/components/demos/chart/chart-area-legend"
import { ChartAreaLinear } from "@/components/demos/chart/chart-area-linear"
import { ChartAreaStackedExpand } from "@/components/demos/chart/chart-area-stacked-expand"
import { ChartAreaStacked } from "@/components/demos/chart/chart-area-stacked"
import { ChartAreaStep } from "@/components/demos/chart/chart-area-step"

// Bar chart
import { ChartBarActive } from "@/components/demos/chart/chart-bar-active"
import { ChartBarDefault } from "@/components/demos/chart/chart-bar-default"
import { ChartBarHorizontal } from "@/components/demos/chart/chart-bar-horizontal"
import { ChartBarInteractive } from "@/components/demos/chart/chart-bar-interactive"
import { ChartBarLabelCustom } from "@/components/demos/chart/chart-bar-label-custom"
import { ChartBarLabel } from "@/components/demos/chart/chart-bar-label"
import { ChartBarMixed } from "@/components/demos/chart/chart-bar-mixed"
import { ChartBarMultiple } from "@/components/demos/chart/chart-bar-multiple"
import { ChartBarNegative } from "@/components/demos/chart/chart-bar-negative"
import { ChartBarStacked } from "@/components/demos/chart/chart-bar-stacked"

// Line chart
import { ChartLineDefault } from "@/components/demos/chart/chart-line-default"
import { ChartLineDotsColors } from "@/components/demos/chart/chart-line-dots-colors"
import { ChartLineDotsCustom } from "@/components/demos/chart/chart-line-dots-custom"
import { ChartLineDots } from "@/components/demos/chart/chart-line-dots"
import { ChartLineInteractive } from "@/components/demos/chart/chart-line-interactive"
import { ChartLineLabelCustom } from "@/components/demos/chart/chart-line-label-custom"
import { ChartLineLabel } from "@/components/demos/chart/chart-line-label"
import { ChartLineLinear } from "@/components/demos/chart/chart-line-linear"
import { ChartLineMultiple } from "@/components/demos/chart/chart-line-multiple"
import { ChartLineStep } from "@/components/demos/chart/chart-line-step"

// Pie chart
import { ChartPieDonutActive } from "@/components/demos/chart/chart-pie-donut-active"
import { ChartPieDonutText } from "@/components/demos/chart/chart-pie-donut-text"
import { ChartPieDonut } from "@/components/demos/chart/chart-pie-donut"
import { ChartPieInteractive } from "@/components/demos/chart/chart-pie-interactive"
import { ChartPieLabelCustom } from "@/components/demos/chart/chart-pie-label-custom"
import { ChartPieLabelList } from "@/components/demos/chart/chart-pie-label-list"
import { ChartPieLabel } from "@/components/demos/chart/chart-pie-label"
import { ChartPieLegend } from "@/components/demos/chart/chart-pie-legend"
import { ChartPieSeparatorNone } from "@/components/demos/chart/chart-pie-separator-none"
import { ChartPieSimple } from "@/components/demos/chart/chart-pie-simple"
import { ChartPieStacked } from "@/components/demos/chart/chart-pie-stacked"

// Radar chart
import { ChartRadarDefault } from "@/components/demos/chart/chart-radar-default"
import { ChartRadarDots } from "@/components/demos/chart/chart-radar-dots"
import { ChartRadarGridCircleFill } from "@/components/demos/chart/chart-radar-grid-circle-fill"
import { ChartRadarGridCircleNoLines } from "@/components/demos/chart/chart-radar-grid-circle-no-lines"
import { ChartRadarGridCircle } from "@/components/demos/chart/chart-radar-grid-circle"
import { ChartRadarGridCustom } from "@/components/demos/chart/chart-radar-grid-custom"
import { ChartRadarGridFill } from "@/components/demos/chart/chart-radar-grid-fill"
import { ChartRadarGridNone } from "@/components/demos/chart/chart-radar-grid-none"
import { ChartRadarIcons } from "@/components/demos/chart/chart-radar-icons"
import { ChartRadarLabelCustom } from "@/components/demos/chart/chart-radar-label-custom"
import { ChartRadarLegend } from "@/components/demos/chart/chart-radar-legend"
import { ChartRadarLinesOnly } from "@/components/demos/chart/chart-radar-lines-only"
import { ChartRadarMultiple } from "@/components/demos/chart/chart-radar-multiple"
import { ChartRadarRadius } from "@/components/demos/chart/chart-radar-radius"

// Radial chart
import { ChartRadialGrid } from "@/components/demos/chart/chart-radial-grid"
import { ChartRadialLabel } from "@/components/demos/chart/chart-radial-label"
import { ChartRadialShape } from "@/components/demos/chart/chart-radial-shape"
import { ChartRadialSimple } from "@/components/demos/chart/chart-radial-simple"
import { ChartRadialStacked } from "@/components/demos/chart/chart-radial-stacked"
import { ChartRadialText } from "@/components/demos/chart/chart-radial-text"

// Tooltip chart
import { ChartTooltipDefault } from "@/components/demos/chart/chart-tooltip-default"
import { ChartTooltipIndicatorLine } from "@/components/demos/chart/chart-tooltip-indicator-line"
import { ChartTooltipIndicatorNone } from "@/components/demos/chart/chart-tooltip-indicator-none"
import { ChartTooltipLabelNone } from "@/components/demos/chart/chart-tooltip-label-none"
import { ChartTooltipLabelCustom } from "@/components/demos/chart/chart-tooltip-label-custom"
import { ChartTooltipLabelFormatter } from "@/components/demos/chart/chart-tooltip-label-formatter"
import { ChartTooltipFormatter } from "@/components/demos/chart/chart-tooltip-formatter"
import { ChartTooltipIcons } from "@/components/demos/chart/chart-tooltip-icons"
import { ChartTooltipAdvanced } from "@/components/demos/chart/chart-tooltip-advanced"

import { ComponentDisplay } from "@/components/display/component-display"

export const dynamic = "force-dynamic"

const components = [
  // Area chart
  {
    name: "chart-area-axes",
    path: "chart/chart-area-axes",
    icon: <AreaChartIcon />,
    component: ChartAreaAxes,
  },
  {
    name: "chart-area-default",
    path: "chart/chart-area-default",
    icon: <AreaChartIcon />,
    component: ChartAreaDefault,
  },
  {
    name: "chart-area-gradient",
    path: "chart/chart-area-gradient",
    icon: <AreaChartIcon />,
    component: ChartAreaGradient,
  },
  {
    name: "chart-area-icons",
    path: "chart/chart-area-icons",
    icon: <AreaChartIcon />,
    component: ChartAreaIcons,
  },
  {
    name: "chart-area-interactive",
    path: "chart/chart-area-interactive",
    icon: <AreaChartIcon />,
    component: ChartAreaInteractive,
  },
  {
    name: "chart-area-legend",
    path: "chart/chart-area-legend",
    icon: <AreaChartIcon />,
    component: ChartAreaLegend,
  },
  {
    name: "chart-area-linear",
    path: "chart/chart-area-linear",
    icon: <AreaChartIcon />,
    component: ChartAreaLinear,
  },
  {
    name: "chart-area-stacked-expand",
    path: "chart/chart-area-stacked-expand",
    icon: <AreaChartIcon />,
    component: ChartAreaStackedExpand,
  },
  {
    name: "chart-area-stacked",
    path: "chart/chart-area-stacked",
    icon: <AreaChartIcon />,
    component: ChartAreaStacked,
  },
  {
    name: "chart-area-step",
    path: "chart/chart-area-step",
    icon: <AreaChartIcon />,
    component: ChartAreaStep,
  },

  // Bar chart
  {
    name: "chart-bar-active",
    path: "chart/chart-bar-active",
    icon: <BarChartIcon />,
    component: ChartBarActive,
  },
  {
    name: "chart-bar-default",
    path: "chart/chart-bar-default",
    icon: <BarChartIcon />,
    component: ChartBarDefault,
  },
  {
    name: "chart-bar-horizontal",
    path: "chart/chart-bar-horizontal",
    icon: <BarChartIcon />,
    component: ChartBarHorizontal,
  },
  {
    name: "chart-bar-interactive",
    path: "chart/chart-bar-interactive",
    icon: <BarChartIcon />,
    component: ChartBarInteractive,
  },
  {
    name: "chart-bar-label-custom",
    path: "chart/chart-bar-label-custom",
    icon: <BarChartIcon />,
    component: ChartBarLabelCustom,
  },
  {
    name: "chart-bar-label",
    path: "chart/chart-bar-label",
    icon: <BarChartIcon />,
    component: ChartBarLabel,
  },
  {
    name: "chart-bar-mixed",
    path: "chart/chart-bar-mixed",
    icon: <BarChartIcon />,
    component: ChartBarMixed,
  },
  {
    name: "chart-bar-multiple",
    path: "chart/chart-bar-multiple",
    icon: <BarChartIcon />,
    component: ChartBarMultiple,
  },
  {
    name: "chart-bar-negative",
    path: "chart/chart-bar-negative",
    icon: <BarChartIcon />,
    component: ChartBarNegative,
  },
  {
    name: "chart-bar-stacked",
    path: "chart/chart-bar-stacked",
    icon: <BarChartIcon />,
    component: ChartBarStacked,
  },

  // Line chart
  {
    name: "chart-line-default",
    path: "chart/chart-line-default",
    icon: <LineChartIcon />,
    component: ChartLineDefault,
  },
  {
    name: "chart-line-dots-colors",
    path: "chart/chart-line-dots-colors",
    icon: <LineChartIcon />,
    component: ChartLineDotsColors,
  },
  {
    name: "chart-line-dots-custom",
    path: "chart/chart-line-dots-custom",
    icon: <LineChartIcon />,
    component: ChartLineDotsCustom,
  },
  {
    name: "chart-line-dots",
    path: "chart/chart-line-dots",
    icon: <LineChartIcon />,
    component: ChartLineDots,
  },
  {
    name: "chart-line-interactive",
    path: "chart/chart-line-interactive",
    icon: <LineChartIcon />,
    component: ChartLineInteractive,
  },
  {
    name: "chart-line-label-custom",
    path: "chart/chart-line-label-custom",
    icon: <LineChartIcon />,
    component: ChartLineLabelCustom,
  },
  {
    name: "chart-line-label",
    path: "chart/chart-line-label",
    icon: <LineChartIcon />,
    component: ChartLineLabel,
  },
  {
    name: "chart-line-linear",
    path: "chart/chart-line-linear",
    icon: <LineChartIcon />,
    component: ChartLineLinear,
  },
  {
    name: "chart-line-multiple",
    path: "chart/chart-line-multiple",
    icon: <LineChartIcon />,
    component: ChartLineMultiple,
  },
  {
    name: "chart-line-step",
    path: "chart/chart-line-step",
    icon: <LineChartIcon />,
    component: ChartLineStep,
  },

  // Pie chart
  {
    name: "chart-pie-donut-active",
    path: "chart/chart-pie-donut-active",
    icon: <PieChartIcon />,
    component: ChartPieDonutActive,
  },
  {
    name: "chart-pie-donut-text",
    path: "chart/chart-pie-donut-text",
    icon: <PieChartIcon />,
    component: ChartPieDonutText,
  },
  {
    name: "chart-pie-donut",
    path: "chart/chart-pie-donut",
    icon: <PieChartIcon />,
    component: ChartPieDonut,
  },
  {
    name: "chart-pie-interactive",
    path: "chart/chart-pie-interactive",
    icon: <PieChartIcon />,
    component: ChartPieInteractive,
  },
  {
    name: "chart-pie-label-custom",
    path: "chart/chart-pie-label-custom",
    icon: <PieChartIcon />,
    component: ChartPieLabelCustom,
  },
  {
    name: "chart-pie-label-list",
    path: "chart/chart-pie-label-list",
    icon: <PieChartIcon />,
    component: ChartPieLabelList,
  },
  {
    name: "chart-pie-label",
    path: "chart/chart-pie-label",
    icon: <PieChartIcon />,
    component: ChartPieLabel,
  },
  {
    name: "chart-pie-legend",
    path: "chart/chart-pie-legend",
    icon: <PieChartIcon />,
    component: ChartPieLegend,
  },
  {
    name: "chart-pie-separator-none",
    path: "chart/chart-pie-separator-none",
    icon: <PieChartIcon />,
    component: ChartPieSeparatorNone,
  },
  {
    name: "chart-pie-simple",
    path: "chart/chart-pie-simple",
    icon: <PieChartIcon />,
    component: ChartPieSimple,
  },
  {
    name: "chart-pie-stacked",
    path: "chart/chart-pie-stacked",
    icon: <PieChartIcon />,
    component: ChartPieStacked,
  },

  // Radar chart
  {
    name: "chart-radar-default",
    path: "chart/chart-radar-default",
    icon: <ActivityIcon />,
    component: ChartRadarDefault,
  },
  {
    name: "chart-radar-dots",
    path: "chart/chart-radar-dots",
    icon: <ActivityIcon />,
    component: ChartRadarDots,
  },
  {
    name: "chart-radar-grid-circle-fill",
    path: "chart/chart-radar-grid-circle-fill",
    icon: <ActivityIcon />,
    component: ChartRadarGridCircleFill,
  },
  {
    name: "chart-radar-grid-circle-no-lines",
    path: "chart/chart-radar-grid-circle-no-lines",
    icon: <ActivityIcon />,
    component: ChartRadarGridCircleNoLines,
  },
  {
    name: "chart-radar-grid-circle",
    path: "chart/chart-radar-grid-circle",
    icon: <ActivityIcon />,
    component: ChartRadarGridCircle,
  },
  {
    name: "chart-radar-grid-custom",
    path: "chart/chart-radar-grid-custom",
    icon: <ActivityIcon />,
    component: ChartRadarGridCustom,
  },
  {
    name: "chart-radar-grid-fill",
    path: "chart/chart-radar-grid-fill",
    icon: <ActivityIcon />,
    component: ChartRadarGridFill,
  },
  {
    name: "chart-radar-grid-none",
    path: "chart/chart-radar-grid-none",
    icon: <ActivityIcon />,
    component: ChartRadarGridNone,
  },
  {
    name: "chart-radar-icons",
    path: "chart/chart-radar-icons",
    icon: <ActivityIcon />,
    component: ChartRadarIcons,
  },
  {
    name: "chart-radar-label-custom",
    path: "chart/chart-radar-label-custom",
    icon: <ActivityIcon />,
    component: ChartRadarLabelCustom,
  },
  {
    name: "chart-radar-legend",
    path: "chart/chart-radar-legend",
    icon: <ActivityIcon />,
    component: ChartRadarLegend,
  },
  {
    name: "chart-radar-lines-only",
    path: "chart/chart-radar-lines-only",
    icon: <ActivityIcon />,
    component: ChartRadarLinesOnly,
  },
  {
    name: "chart-radar-multiple",
    path: "chart/chart-radar-multiple",
    icon: <ActivityIcon />,
    component: ChartRadarMultiple,
  },
  {
    name: "chart-radar-radius",
    path: "chart/chart-radar-radius",
    icon: <ActivityIcon />,
    component: ChartRadarRadius,
  },

  // Radial chart
  {
    name: "chart-radial-grid",
    path: "chart/chart-radial-grid",
    icon: <TrendingUpIcon />,
    component: ChartRadialGrid,
  },
  {
    name: "chart-radial-label",
    path: "chart/chart-radial-label",
    icon: <TrendingUpIcon />,
    component: ChartRadialLabel,
  },
  {
    name: "chart-radial-shape",
    path: "chart/chart-radial-shape",
    icon: <TrendingUpIcon />,
    component: ChartRadialShape,
  },
  {
    name: "chart-radial-simple",
    path: "chart/chart-radial-simple",
    icon: <TrendingUpIcon />,
    component: ChartRadialSimple,
  },
  {
    name: "chart-radial-stacked",
    path: "chart/chart-radial-stacked",
    icon: <TrendingUpIcon />,
    component: ChartRadialStacked,
  },
  {
    name: "chart-radial-text",
    path: "chart/chart-radial-text",
    icon: <TrendingUpIcon />,
    component: ChartRadialText,
  },

  // Tooltip chart
  {
    name: "chart-tooltip-default",
    path: "chart/chart-tooltip-default",
    icon: <InfoIcon />,
    component: ChartTooltipDefault,
  },
  {
    name: "chart-tooltip-indicator-line",
    path: "chart/chart-tooltip-indicator-line",
    icon: <InfoIcon />,
    component: ChartTooltipIndicatorLine,
  },
  {
    name: "chart-tooltip-indicator-none",
    path: "chart/chart-tooltip-indicator-none",
    icon: <InfoIcon />,
    component: ChartTooltipIndicatorNone,
  },
  {
    name: "chart-tooltip-label-none",
    path: "chart/chart-tooltip-label-none",
    icon: <InfoIcon />,
    component: ChartTooltipLabelNone,
  },
  {
    name: "chart-tooltip-label-custom",
    path: "chart/chart-tooltip-label-custom",
    icon: <InfoIcon />,
    component: ChartTooltipLabelCustom,
  },
  {
    name: "chart-tooltip-label-formatter",
    path: "chart/chart-tooltip-label-formatter",
    icon: <InfoIcon />,
    component: ChartTooltipLabelFormatter,
  },
  {
    name: "chart-tooltip-formatter",
    path: "chart/chart-tooltip-formatter",
    icon: <InfoIcon />,
    component: ChartTooltipFormatter,
  },
  {
    name: "chart-tooltip-icons",
    path: "chart/chart-tooltip-icons",
    icon: <InfoIcon />,
    component: ChartTooltipIcons,
  },
  {
    name: "chart-tooltip-advanced",
    path: "chart/chart-tooltip-advanced",
    icon: <InfoIcon />,
    component: ChartTooltipAdvanced,
  },
]

export default async function chartPage() {
  const activeStyle = await getActiveStyle()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 mt-15">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <ComponentDisplay
            key={comp.name}
            path={comp.path}
            icon={comp.icon}
            className="w-full max-w-md mx-auto py-0"
          >
            <comp.component />
          </ComponentDisplay>
        ))}
      </div>
    </div>
  )
}