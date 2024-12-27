import Cards from "../ui/dashboard/cards";
import Chart from "../ui/dashboard/graph";
import { getChartData } from "@/app/lib/actions";
import dynamic from "next/dynamic";

const FinancialChart = dynamic(() => import("@/app/ui/dashboard/chart"), {
  ssr: false,
});

export default async function Page() {
  const { categories, data } = await getChartData();

  console.log(data);
  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <Cards />
      <h1 className="text-2xl font-medium">FinancialCharts</h1>
      {/* <Chart /> */}
      <FinancialChart categories={categories} data={data} />
    </div>
  );
}
