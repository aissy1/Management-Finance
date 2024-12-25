import TableInvoices from "@/app/ui/invoices/table";
import SearchBar from "@/app/ui/invoices/searchBar";
import { CreateButton } from "@/app/ui/invoices/button";

export default async function Invoices() {
  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <h1 className="text-2xl font-medium">Invoices</h1>
      <div className="flex w-full gap-2">
        <SearchBar />
        <CreateButton />
      </div>
      <TableInvoices />
    </div>
  );
}
