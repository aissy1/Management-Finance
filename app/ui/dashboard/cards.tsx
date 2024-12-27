import { CiMoneyCheck1 } from "react-icons/ci";
import { fetchData } from "@/app/lib/actions";

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
      <div className="flex p-4 items-center">
        {Icon ? <Icon className="h-6 w-6 text-font" /> : null}
        <h3 className="ml-2 text-sm text-gray-100 font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-primary px-4 py-8 text-center text-2xl">
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
      <Card title="Jumlah Tagihan" value={jumlahTagihan} type="element1"></Card>
      <Card title="Total Tagihan" value={totaltagihan} type="element1"></Card>
      <Card title="Tagihan Lunas" value={totalPaid} type="element1"></Card>
      <Card
        title="Tagihan Belum Lunas"
        value={totalUnpaid}
        type="element1"
      ></Card>
    </div>
  );
}
