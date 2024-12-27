"use client";
import { getGroupedData } from "@/app/lib/actions";
import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

// Import Chart hanya di sisi klien
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface FinancialChartProps {
  chartData: { month: Number; amount: number }[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({ chartData }) => {
  if (!chartData || chartData.length === 0) {
    return <div>No data available</div>;
  }

  const categories = chartData.map((item) => `Month ${item.month}`);
  const data = chartData.map((item) => item.amount);

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories,
      title: {
        text: "Months",
      },
    },
    yaxis: {
      title: {
        text: "Revenue (Rp)",
      },
    },
    title: {
      text: "Monthly Financial Data",
      align: "center",
    },
  };

  const series = [
    {
      name: "Revenue",
      data,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

// Fungsi getServerSideProps
export async function getStaticProps() {
  const chartData = await getGroupedData();
  console.log(chartData);
  return {
    props: {
      chartData,
    },
    revalidate: 60, // Rebuild halaman setiap 60 detik
  };
}
// Komponen utama
export default function ChartWrapper({
  chartData,
}: {
  chartData: { month: number; amount: number }[];
}) {
  return (
    <div className="w-full md:col-span-4">
      <div className="rounded-xl bg-font p-4">
        <div className="gap-2 rounded-md bg-primary p-4">
          <FinancialChart chartData={chartData} />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
