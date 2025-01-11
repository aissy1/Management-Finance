import prisma from "@/app/lib/prisma";

export async function fetchData() {
  if (!prisma) {
    throw new Error("Prisma Client is not initialized");
  }
  const jumlahTagihan = await prisma.invoices.count();
  const totaltagihan = await prisma.invoices.aggregate({
    _sum: {
      amount: true,
    },
  });

  const totalUnpaid = await prisma.invoices.count({
    where: {
      Status: "Unpaid",
    },
  });

  const totalPaid = await prisma.invoices.count({
    where: {
      Status: "Paid",
    },
  });

  return {
    jumlahTagihan,
    totalPaid,
    totalUnpaid,
    totaltagihan: totaltagihan._sum.amount ?? 0,
  };
}

export async function fetchInvoicesByID(id: string) {
  const invoice = await prisma!.invoices.findUnique({
    where: {
      id: id,
    },
  });

  return invoice;
}

export async function getData() {
  return await prisma!.invoices.findMany();
}

export async function getGroupedData() {
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const rawData = await prisma!.invoices.findMany({
    where: {
      Date: {
        gte: new Date(`${year}-01-01`),
        lte: new Date(`${year}-12-31`),
      },
    },
    select: {
      amount: true,
      Date: true,
    },
  });

  const groupedData = months.map((month) => {
    const currentYear = new Date().getFullYear();
    const records = rawData.filter(
      (entry) =>
        new Date(entry.Date).getFullYear() === currentYear &&
        new Date(entry.Date).getMonth() + 1 === month
    );

    const totalAmount = records.reduce((sum, record) => sum + record.amount, 0);
    return {
      month,
      amount: totalAmount,
    };
  });

  return groupedData;
}

export async function getDataTable() {
  const data = await prisma!.invoices.findMany({
    orderBy: {
      Date: "desc",
    },
  });

  return data;
}

export async function fetchInvoicesPages(
  query: string,
  page: number,
  itemsPerPage: number
) {
  const skip = (page - 1) * itemsPerPage;

  const invoices = await prisma!.invoices.findMany({
    where: {
      OR: [
        { Title: { contains: query, mode: "insensitive" } },
        { Subject: { contains: query, mode: "insensitive" } },

        { Status: { contains: query, mode: "insensitive" } },
      ],
    },
    skip,
    take: itemsPerPage,
  });

  const totalItems = await prisma!.invoices.count({
    where: {
      OR: [
        { Title: { contains: query, mode: "insensitive" } },
        { Subject: { contains: query, mode: "insensitive" } },

        { Status: { contains: query, mode: "insensitive" } },
      ],
    },
  });

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    data: invoices.map((invoice) => ({
      id: invoice.id,
      title: invoice.Title,
      subject: invoice.Subject,
      amount: invoice.amount,
      date: invoice.Date ? invoice.Date.toISOString().split("T")[0] : "N/A",
      status: invoice.Status,
    })),
    totalPages,
  };
}
