import TableInvoices from "@/app/ui/invoices/table";
import { inter } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import SearchBar from "@/app/ui/invoices/searchBar";
import { CreateButton } from "@/app/ui/button";
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function Invoices(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="flex flex-col gap-4 h-full w-full items-center">
      <h1
        className={`${inter.className} text-2xl w-full font-medium text-start`}
      >
        Invoices
      </h1>
      <div className="flex w-full gap-2">
        <SearchBar />
        <CreateButton />
      </div>
      <TableInvoices query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
