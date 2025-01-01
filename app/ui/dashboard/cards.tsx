import { CiMoneyCheck1 } from "react-icons/ci";
import { fetchData } from "@/app/lib/data";

const iconMap = {
  element1: CiMoneyCheck1,
  element2: CiMoneyCheck1,
  element3: CiMoneyCheck1,
  element4: CiMoneyCheck1,
};

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string | null;
  type: "element1" | "element2" | "element3" | "element4";
}) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-secondary p-2 shadow-sm">
      <div className="flex p-4 items-center  md:p-2">
        {Icon ? <Icon className="h-6 w-6 text-font" /> : null}
        <h3 className="ml-2 text-sm text-gray-100 font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-primary px-4 py-8 text-center text-2xl md:px-2 md:py-4">
        {value}
      </p>
    </div>
  );
}

export default async function Cards() {
  const { totaltagihan, totalPaid, totalUnpaid, jumlahTagihan } =
    await fetchData();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card title="element1" value={jumlahTagihan} type="element1"></Card>
      <Card title="element2" value={totaltagihan} type="element2"></Card>
      <Card title="element3" value={totalPaid} type="element3"></Card>
      <Card title="element4" value={totalUnpaid} type="element4"></Card>
    </div>
  );
}
