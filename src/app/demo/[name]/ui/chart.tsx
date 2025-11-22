import { AreaChartComponent } from "./area-chart";
import { BarChartComponent } from "./bar-chart";
import { PieChartComponent } from "./pie-chart";

export default function ChartPage() {
  return (
    <div className="w-full max-w-md mx-auto py-10 gap-4">
        <BarChartComponent />
        <AreaChartComponent />
        <PieChartComponent />
    </div>
  );
}
