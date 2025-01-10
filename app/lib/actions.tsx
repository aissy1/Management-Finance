"use server";
import prisma from "@/app/lib/prisma";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

export async function formattedDate(date: string | Date) {
  return format(new Date(date), "dd - MM - yyyy");
}

export async function login(formData: FormData) {
  let message = "";

  const emailUser = formData.get("email")?.toString();
  const passUser = formData.get("password")?.toString();

  const userData = await prisma!.user.findFirst({
    where: {
      Email: emailUser,
    },
  });

  if (userData?.Email === emailUser) {
    if (userData?.Pass === passUser) {
      message = "true";
    } else {
      message = "Invalid Password !";
    }
  } else {
    message = "Invalid Email";
  }

  return { data: userData, message };
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
    return "All fields are required";
  }

  if (!prisma) {
    throw new Error("Prisma client is not initialized");
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
  return "Create New Data Successful !";
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

  await prisma!.invoices.update({
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

  return "Update Successful !";
}

export async function DeleteData(id: string) {
  await prisma!.invoices.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dashboard/invoices");
}
