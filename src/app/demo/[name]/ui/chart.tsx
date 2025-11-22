import { AreaChartComponent } from "@/app/demo/[name]/ui/area-chart";
import { BarChartComponent } from "@/app/demo/[name]/ui/bar-chart";
import { PieChartComponent } from "@/app/demo/[name]/ui/pie-chart";

export default function ChartPage() {
  return (
    <div className="w-full max-w-md mx-auto py-10 gap-4">
        <BarChartComponent />
        <AreaChartComponent />
        <PieChartComponent />
    </div>
  );
}
