import { EditButton, DeleteButton } from "./button";

export default async function TableInvoices() {
  return (
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
        <tr className="w-full border-b py-3 text-sm ">
          <td className="whitespace-nowrap py-3 pl-6 pr-3">
            <div className="flex items-center gap-3">
              <p className="text-black">a</p>
            </div>
          </td>
          <td className="whitespace-nowrap px-3 text-black py-3">a</td>
          <td className="whitespace-nowrap px-3 text-black py-3">a</td>
          <td className="whitespace-nowrap px-3 text-black py-3">a</td>
          <td className="whitespace-nowrap px-3 text-black py-3">a</td>
          <td className="whitespace-nowrap py-3 text-black pl-6 pr-3">
            <div className="  flex justify-end gap-3">
              <EditButton />
              <div className="h-[36px] border border-black"></div>
              <DeleteButton />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
