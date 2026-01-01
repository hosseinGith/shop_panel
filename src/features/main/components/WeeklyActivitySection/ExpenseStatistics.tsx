import type { ApexOptions } from "apexcharts";
import  { useState } from "react";
import Chart from "react-apexcharts";
// تایپ‌های مورد نیاز از ApexCharts را ایمپورت کنید

function ExpenseStatistics() {
  const seriesData: number[] = [35, 20, 30, 15]; // Others, Investment, Entertainment, Bill Expense

  const chartOptions: ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Bill Expense", "Others", "Investment", "Entertainment"],

    colors: ["#fc7900", "#1814f3", "#fa00ff", "#343c6a"],

    dataLabels: {
      enabled: true,
      formatter: function (val: number, opts): string[] | string {
        const label = opts.w.config.labels[opts.seriesIndex];
        return [`${label}:`, `${val.toFixed(0)}%`];
      },
      style: {
        fontSize: "14px",
        colors: ["#fff"],
      },
    },

    legend: {
      show: false,
    },

    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
  };

  const [series] = useState<number[]>(seriesData);
  const [options] = useState<ApexOptions>(chartOptions);

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      width="100%"
      height="350"
    />
  );
}

export default ExpenseStatistics;
