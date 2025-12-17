import ApexCharts from "react-apexcharts";
import { motion } from "motion/react";
const series = [
  {
    type: "area",
    name: "درآمد",
    data: [180, 220, 195, 240, 210, 252, 230, 265, 245, 280, 260, 300],
  },
];

const options: ApexCharts.ApexOptions = {
  chart: {
    height: "100%",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
    colors: ["#08baff"],
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return `$${value}K`;
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (value) {
        return `$${(value * 1000).toLocaleString()}`;
      },
    },
  },
  grid: {
    show: false,
  },
  colors: ["#08baff"],
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#57C3FF"],
      inverseColors: false,
      opacityFrom: 0.7,
      opacityTo: 0.3,
      stops: [0, 100],
    },
  },
};

export default function TotalRevenue() {
  return (
    <div className=" *:p-8 *:rounded-xl lg:max-h-110 overflow-hidden gap-x-4 rounded-xl  lg:grid grid-cols-[40%_60%] w-full grid-rows-2  gap-y-2">
      <div className=" space-y-2">
        <h2 className="text-2xl flex gap-2 items-center">Quick Transfer</h2>
        <div className="bg-(--background2) rounded-3xl overflow-hidden"></div>
      </div>
      <div className=" p-1! py-4! pl-4! space-y-2 w-full ">
        <h2 className="text-2xl">Balance History</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="bg-(--background2) rounded-3xl h-60"
        >
          <ApexCharts
            options={options}
            series={series}
            width="100%"
            height="100%"
            type="area"
          />
        </motion.div>
      </div>
    </div>
  );
}
