import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { DeleteData } from "../lib/actions";
import Link from "next/link";

export function CreateButton() {
  return (
    <div className="w-1/4 flex justify-end">
      <Link
        href="/dashboard/invoices/create-form"
        className="flex border-[2px] border-font rounded-lg items-center justify-center h-full w-1/2 bg-brown text-white hover:bg-font hover:text-brown hover:border-brown active:-translate-y-[1px]"
      >
        Create Invoice
      </Link>
    </div>
  );
}

export function EditButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="border border-font rounded-md p-1 text-brown hover:bg-font hover:text-brown"
    >
      <MdOutlineModeEditOutline className="h-6 w-6" />
    </Link>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const deleteRow = DeleteData.bind(null, id);

  return (
    <button
      onClick={deleteRow}
      className="border border-font rounded-md p-1 bg-white text-red-400 hover:bg-font hover:text-red-600"
    >
      <FaRegTrashCan className="h-6 w-6" />
    </button>
  );
}
