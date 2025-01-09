import TableInvoices from "@/app/ui/invoices/table";
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function Invoices({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await searchParamsPromise;
  const ITEMS_PER_PAGE = 7;

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page || "1");

  const result = await fetchInvoicesPages(query, currentPage, ITEMS_PER_PAGE);
  const { data: invoices, totalPages } = result;

  return (
    <div className="flex flex-col gap-4 h-full w-full items-center">
      <h1 className="text-2xl w-full font-medium text-start">Invoices</h1>
      <TableInvoices invoices={invoices} totalPages={totalPages} />
    </div>
  );
}
