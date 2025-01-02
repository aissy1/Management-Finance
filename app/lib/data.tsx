import prisma from "./prisma";

export async function fetchData() {
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
    totaltagihan: totaltagihan._sum.amount,
  };
}

export async function fetchInvoicesByID(id: string) {
  const invoice = await prisma.invoices.findUnique({
    where: {
      id: id,
    },
  });

  return invoice;
}

export async function getData() {
  return await prisma.invoices.findMany();
}

export async function getGroupedData() {
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  // Ambil data dari database (misalnya tabel invoices)
  const rawData = await prisma.invoices.findMany({
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

  // Kelompokkan data per bulan
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
  const data = await prisma.invoices.findMany({
    orderBy: {
      Date: "desc",
    },
  });

  return data;
}

const ITEMS_PER_PAGE = 7;

export async function fetchInvoicesData(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await prisma.invoices.findMany({
      where: {
        OR: [
          { Title: { contains: query, mode: "insensitive" } },
          { Subject: { contains: query, mode: "insensitive" } },
          { amount: { equals: parseInt(query, 10) || undefined } },
          { Status: { contains: query, mode: "insensitive" } },
          ...(isNaN(Date.parse(query))
            ? []
            : [{ Date: { equals: new Date(query).toISOString() } }]),
        ],
      },
      orderBy: { Date: "desc" },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });

    return invoices.map((invoice) => ({
      id: invoice.id,
      title: invoice.Title,
      subject: invoice.Subject,
      amount: invoice.amount,
      date: invoice.Date ? new Date(invoice.Date).toISOString() : "N/A",
      status: invoice.Status,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchInvoicesPages(query: string) {
  const row = await prisma.invoices.count();

  const totalPages = Math.ceil(Number(row / ITEMS_PER_PAGE));
  return totalPages;
}
