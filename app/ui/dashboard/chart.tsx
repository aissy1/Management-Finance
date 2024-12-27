// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import { ApexOptions } from "apexcharts";

// // Import Chart hanya di sisi klien
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// interface FinancialChartProps {
//   // data: number[]; // Data grafik
//   // categories: string[]; // Label sumbu x
//   chartData: { month: number; amount: number }[];
// }

// const FinancialChart: React.FC<FinancialChartProps> = ({
//   chartData, // data,
//   // categories,
// }) => {
//   if (!chartData || chartData.length === 0) {
//     return <div>No data available</div>;
//   }

//   const categories = chartData.map((item) => `Month ${item.month}`);

//   const data = chartData.map((item) => item.amount);

//   const options: ApexOptions = {
//     chart: {
//       type: "bar", // Tipe grafik
//       toolbar: {
//         show: true, // Menampilkan toolbar grafik
//       },
//     },
//     xaxis: {
//       categories, // Kategori pada sumbu x
//       title: {
//         text: "Months", // Judul sumbu x
//       },
//     },
//     yaxis: {
//       title: {
//         text: "Revenue (Rp)", // Judul sumbu y
//       },
//     },
//     title: {
//       text: "Monthly Financial Data", // Judul grafik
//       align: "center", // Penempatan judul
//     },
//   };

//   const series = [
//     {
//       name: "Revenue",
//       data, // Data untuk grafik
//     },
//   ];

//   return (
//     <div>
//       <Chart options={options} series={series} type="bar" height={350} />
//     </div>
//   );
// };

// export default FinancialChart;
