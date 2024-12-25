import { CiMoneyCheck1 } from "react-icons/ci";

const iconMap = {
  element1: CiMoneyCheck1,
  element2: CiMoneyCheck1,
  element3: CiMoneyCheck1,
  element4: CiMoneyCheck1,
};

export function Card({
  title,
  type,
}: {
  title: string;
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
        {title}
      </p>
    </div>
  );
}

export default async function Cards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card title="element1" type="element1"></Card>
      <Card title="element2" type="element2"></Card>
      <Card title="element3" type="element3"></Card>
      <Card title="element4" type="element4"></Card>
    </div>
  );
}
