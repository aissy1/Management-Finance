"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface FinancialChartProps {
  chartData: { month: number; amount: number }[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({ chartData }) => {
  if (!chartData || chartData.length === 0) {
    return <div>No data available</div>;
  }

  const currentYear = new Date().getFullYear();
  const categories = chartData.map((item) => `Month ${item.month}`);
  const data = chartData.map((item) => item.amount);

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    xaxis: {
      categories,
      title: { text: "Months", style: { color: "#733E24" } },
    },
    yaxis: {
      title: { text: "Amount (Rp)", style: { color: "#733E24" } },
    },
    title: {
      text: `Monthly Bill Amount ${currentYear}`,
      align: "center",
      style: {
        color: "#733E24",
        fontSize: "14px",
        fontFamily: "inter",
        fontWeight: "bold",
      },
    },

    fill: {
      colors: ["#733E24"],
    },

    dataLabels: {
      style: {
        colors: ["#F2F0EF"],
      },
    },
  };

  const series = [
    {
      name: "Bill",
      data,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default FinancialChart;
