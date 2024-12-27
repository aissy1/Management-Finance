import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface FinancialChartProps {
  data: number[]; // Data grafik
  categories: string[]; // Label sumbu x
}

const FinancialChart: React.FC<FinancialChartProps> = ({
  data,
  categories,
}) => {
  const options: ApexOptions = {
    chart: {
      type: "bar", // Tipe grafik
      toolbar: {
        show: true, // Menampilkan toolbar grafik
      },
    },
    xaxis: {
      categories, // Kategori pada sumbu x
      title: {
        text: "Months", // Judul sumbu x
      },
    },
    yaxis: {
      title: {
        text: "Revenue (Rp)", // Judul sumbu y
      },
    },
    title: {
      text: "Monthly Financial Data", // Judul grafik
      align: "center", // Penempatan judul
    },
  };

  const series = [
    {
      name: "Revenue",
      data, // Data untuk grafik
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default FinancialChart;
