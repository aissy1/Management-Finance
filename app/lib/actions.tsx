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

export async function getGroupedData() {
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  try {
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

    const groupedData = months.map((month) => {
      const record = rawData.find(
        (entry) => new Date(entry.Date).getMonth() + 1 === month
      );
      return {
        month,
        amount: record ? record.amount : 0,
      };
    });

    return groupedData;
  } catch (error) {
    console.error("Database query failed:", JSON.stringify(error, null, 2));
    throw error;
  }
}

// export default async function getChartData(year: number) {
//   // Daftar bulan (1 = Januari, 2 = Februari, dst.)
//   const months = Array.from({ length: 12 }, (_, i) => i + 1);

//   // Ambil data dari database
//   const rawData = await prisma.invoices.findMany({
//     where: {
//       Date: {
//         gte: new Date(`${year}-01-01`),
//         lte: new Date(`${year}-12-31`),
//       },
//     },
//     select: {
//       amount: true,
//       Date: true,
//     },
//   });

//   // Map data ke dalam format dengan 12 bulan
//   const data = months.map((month) => {
//     const record = rawData.find(
//       (entry) => new Date(entry.Date).getMonth() + 1 === month
//     );
//     return {
//       month,
//       amount: record ? record.amount : 0,
//     };
//   });

//   return data;
// }
