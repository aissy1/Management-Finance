import Cards from "../ui/dashboard/cards";
import ChartWrapper from "../ui/dashboard/graph";

export default function Page({
  chartData,
}: {
  chartData: { month: number; amount: number }[];
}) {
  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <Cards />
      <h1 className="text-2xl font-medium">FinancialCharts</h1>
      <ChartWrapper chartData={chartData} />
    </div>
  );
}
