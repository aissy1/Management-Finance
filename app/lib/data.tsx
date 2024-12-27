// import { sql } from "@vercel/postgres";
import prisma from "./prisma";

// import { Revenue } from "./utils";

export async function getData() {
  return await prisma.invoices.findMany();
}

// export async function createData(data: { amount: number; title: string }) {
//   return await prisma.invoices.create({ data });
// }

// export async function fetchRevenue() {
//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     console.log("Fetching revenue data...");
//     await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await sql<Revenue>`SELECT * FROM revenue`;

//     console.log("Data fetch completed after 3 seconds.");

//     return data.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch revenue data.");
//   }
// }
