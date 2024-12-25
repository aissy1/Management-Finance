import Cards from "../ui/dashboard/cards";
import Chart from "../ui/dashboard/graph";
export default function Page() {
  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <Cards />
      <h1 className="text-2xl font-medium">Financial Charts</h1>
      <Chart />
    </div>
  );
}
