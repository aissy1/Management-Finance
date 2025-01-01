"use server";
import prisma from "./prisma";
import { format } from "date-fns";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function formattedDate(date: string | Date) {
  return format(new Date(date), "dd - MM - yyyy");
}

export async function createForm(formData: FormData) {
  const newDate = Date.now();

  const title = formData.get("title")?.toString();
  const subject = formData.get("subject")?.toString();
  const amount = Number(formData.get("amount"));
  const status = formData.get("status")?.toString();
  const dateInput = formData.get("date")?.toString();

  const date = dateInput ? new Date(dateInput) : new Date(newDate);

  if (!title || !subject || isNaN(amount) || amount <= 0 || !status) {
    throw new Error("All fields are required");
  }

  await prisma.invoices.create({
    data: {
      Date: date,
      Title: title,
      Subject: subject,
      amount: amount,
      Status: status,
    },
  });
}

export async function editForm(formData: FormData) {
  const newDate = Date.now();

  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString();
  const subject = formData.get("subject")?.toString();
  const amount = Number(formData.get("amount"));
  const status = formData.get("status")?.toString();
  const dateInput = formData.get("date")?.toString();

  const date = dateInput ? new Date(dateInput) : new Date(newDate);

  if (!title || !subject || isNaN(amount) || amount <= 0 || !status) {
    return "All fields are required";
  }

  await prisma.invoices.update({
    where: {
      id: id,
    },
    data: {
      Date: date,
      Title: title,
      Subject: subject,
      amount: amount,
      Status: status,
    },
  });

  // redirect("/dashboard/invoices");
  return "Update Success !";
}

export async function DeleteData(id: string) {
  await prisma.invoices.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/invoices");
}
