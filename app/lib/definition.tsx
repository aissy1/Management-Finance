export type Revenue = {
  month: string;
  revenue: number;
};

type FinancialChartProps = {
  data: {
    categories: string[];
    data: number[];
  };
};
