import { inter } from "@/app/ui/fonts";
import { LuCalendarDays } from "react-icons/lu";
export function CardSkeleton() {
  return (
    <div className="rounded-xl bg-secondary p-2 shadow-sm animate-pulse">
      <div className="flex p-4 items-center ">
        <h3 className="ml-2 text-sm text-gray-100 font-medium"></h3>
      </div>
      <p className="truncate rounded-xl bg-primary px-4 py-8 text-center text-2xl animate-pulse"></p>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function FinancialChartSkeleton() {
  return (
    <>
      /* From Uiverse.io by Deri-Kurniawan */
      <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
    </>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <h1 className={`${inter.className} text-2xl font-medium`}>Dashboard</h1>
      <CardSkeleton />
      <div className="w-full">
        <h2 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
          Recent Invoices
        </h2>
        <div className="rounded-xl bg-font p-4">
          <div className="rounded-md bg-primary p-4">
            <div className=" h-3/4 w-full">
              <FinancialChartSkeleton />
            </div>
            <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0"></p>
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
