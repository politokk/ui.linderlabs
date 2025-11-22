import { ChartBarMixed } from "@/app/demo/[name]/blocks/sidebar/components/demos/chart-bar-mixed"
import { ChartAreaDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/chart-area-demo"
import { ChartBarDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/chart-bar-demo"
import { ChartLineDemo } from "@/app/demo/[name]/blocks/sidebar/components/demos/chart-line-demo"

export function ChartDemo() {
  return (
    <div className="grid w-full max-w-screen-2xl gap-4 *:data-[slot=card]:flex-1 @2xl:grid-cols-2 @6xl:grid-cols-3">
      <ChartAreaDemo />
      <ChartBarDemo />
      <ChartBarMixed />
      <div className="@6xl:hidden">
        <ChartLineDemo />
      </div>
    </div>
  )
}
