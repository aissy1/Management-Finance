import Cards from "../../ui/dashboard/cards";
import { inter } from "@/app/ui/fonts";
import { LuCalendarDays } from "react-icons/lu";
import { getGroupedData } from "@/app/lib/data";
import FinancialChart from "@/app/ui/dashboard/graph";

export default async function Page() {
  const chartData = await getGroupedData();

  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <h1 className={`${inter.className} text-2xl font-medium`}>Dashboard</h1>
      <Cards />
      <div className="w-full">
        <h2 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
          Recent Invoices
        </h2>
        <div className="rounded-xl bg-font p-4">
          <div className="rounded-md bg-primary p-4">
            <div>
              <FinancialChart chartData={chartData} />
            </div>
          </div>
          <div className="flex flex-row items-center pl-6 pt-3">
            <LuCalendarDays className="h-5 w-5 text-black" />
            <h3 className={`${inter.className} ml-2 text-sm text-black`}>
              Last 12 months
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
