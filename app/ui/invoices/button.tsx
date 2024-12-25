import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";

export function CreateButton() {
  return (
    <div className="w-1/4 flex justify-end">
      <Link
        href="/dashboard"
        className="flex border-[2px] border-font rounded-lg items-center justify-center h-full w-1/2 bg-brown text-white hover:bg-font hover:text-brown hover:border-brown active:-translate-y-[1px]"
      >
        Create Invoice
      </Link>
    </div>
  );
}

export function EditButton() {
  return (
    <Link
      href="/dashboard/invoices"
      className="border border-font rounded-md p-1 text-brown hover:bg-font hover:text-brown"
    >
      <MdOutlineModeEditOutline className="h-6 w-6" />
    </Link>
  );
}

export function DeleteButton() {
  return (
    <Link
      href="/dashboard/invoices"
      className="border border-font rounded-md p-1 bg-white text-font hover:bg-font hover:text-red-600"
    >
      <FaRegTrashCan className="h-6 w-6" />
    </Link>
  );
}
