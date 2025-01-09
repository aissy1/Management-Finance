import Pagination from "./pagination";
import { formattedDate } from "@/app/lib/actions";
import { EditButton, DeleteButton } from "../button";
import SearchBar from "@/app/ui/invoices/searchBar";
import { CreateButton } from "@/app/ui/button";

export default function TableInvoices({
  invoices,
  totalPages,
}: {
  invoices: {
    id: string;
    title: string;
    subject: string;
    amount: number;
    date: string;
    status: string;
  }[];
  totalPages: number;
}) {
  return (
    <>
      <div className="flex w-full gap-2">
        <SearchBar />
        <CreateButton />
      </div>
      <table className="min-w-full bg-secondary text-primary rounded-t-md md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Title
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Subject
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Date
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="w-full border-b py-3 text-sm ">
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                  <p className="text-black">{invoice.title}</p>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 text-black py-3">
                {invoice.subject}
              </td>
              <td className="whitespace-nowrap px-3 text-black py-3">
                {invoice.amount}
              </td>
              <td className="whitespace-nowrap px-3 text-black py-3">
                {formattedDate(invoice.date)}
              </td>
              <td className="whitespace-nowrap px-3 text-black py-3">
                {invoice.status}
              </td>
              <td className="whitespace-nowrap py-3 text-black pl-6 pr-3">
                <div className="  flex justify-end gap-3">
                  <EditButton id={invoice.id} />
                  <div className="h-[36px] border border-black"></div>
                  <DeleteButton id={invoice.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} />
    </>
  );
}
