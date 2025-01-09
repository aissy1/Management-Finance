"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createForm } from "@/app/lib/actions";
import { useNotification } from "@/app/ui/message";

export default function CreateForm() {
  const router = useRouter();
  const { setMessage } = useNotification();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const result = await createForm(formData);
    setMessage(result);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard/invoices");
      setMessage("");
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-2 border-secondary rounded-md w-full p-2 gap-2">
        <div className="flex flex-col gap-2 p-2">
          <label className="text-xl pl-2 font-medium">Title :</label>
          <input
            type="text"
            name="title"
            placeholder="Input a title of report here"
            className="w-1/2 p-2 pl-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <label className="text-xl pl-2 font-medium">Subject :</label>
          <input
            type="text"
            name="subject"
            placeholder="Input a subject here"
            className="w-1/2 p-2 pl-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <label className="text-xl pl-2 font-medium">Amount :</label>
          <input
            type="number"
            name="amount"
            placeholder="Input amount of report here"
            className="w-1/2 p-2 pl-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <label className="text-xl pl-2 font-medium">Date :</label>
          <input
            type="date"
            name="date"
            className="w-1/4 p-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <label className="text-xl pl-2 font-medium">Status :</label>
          <div className="flex flex-row w-1/4 items-center justify-between pl-1">
            <div className="w-1/2">
              <input
                id="Unpaid"
                type="radio"
                name="status"
                value={"Unpaid"}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="Unpaid"
                className="ml-2 cursor-pointer rounded-xl bg-gray-200 px-3 py-1 font-medium text-black"
              >
                Unpaid
              </label>
            </div>
            <div>
              <input
                id="Paid"
                type="radio"
                name="status"
                value={"Paid"}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="Paid"
                className="ml-2 cursor-pointer rounded-xl bg-green-600 px-3 py-1 font-medium text-white"
              >
                Paid
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-3 gap-5">
        <Link
          href={"/dashboard/invoices"}
          className="border bg-font px-3 py-1 rounded-md hover:bg-gray-600 hover:text-white text-xl"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={isSubmitting}
          className="border bg-blue-400 px-3 py-1 rounded-md hover:bg-blue-600 text-white text-xl"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
