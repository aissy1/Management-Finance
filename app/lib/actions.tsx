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

export async function getChartData() {
  const data = await prisma.invoices.groupBy({
    by: ["Date"],
    _sum: {
      amount: true,
    },
    orderBy: {
      Date: "asc",
    },
  });

  // Format data untuk chart
  return {
    categories: data.map((item) => item.Date.toISOString().slice(0, 7)), // Format YYYY-MM
    data: data.map((item) => item._sum.amount || 0),
  };
}
