import ApexCharts from "react-apexcharts";
import { motion } from "motion/react";
import User from "./User";
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
    colors: ["#1814F3"],
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
  colors: ["#1814F3"],
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#2D60FF"],
      inverseColors: false,
      opacityFrom: 0.7,
      opacityTo: 0.3,
      stops: [0, 100],
    },
  },
};

export default function TotalRevenue() {
  return (
    <div className=" *:p-8 *:rounded-xl lg:max-h-110 overflow-hidden gap-x-4 rounded-xl  lg:grid grid-cols-[max-content_1fr] w-full grid-rows-2  gap-y-2">
      <div className=" space-y-2 max-w-120">
        <h2 className="text-2xl flex gap-2 items-center">Quick Transfer</h2>
        <div className="bg-(--background2) p-4 space-y-5 rounded-3xl overflow-hidden">
          <div className="flex gap-8 text-center">
            <User job="CEO" name="Livia Bator" />
            <User job="Director" name="Randy Press" />
            <User job="Designer" name="Workman" />
            <User job="CEO" name="Livia Bator" />
            <User job="Director" name="Randy Press" />
            <User job="Designer" name="Workman" />
          </div>
          <div className="flex justify-between gap-4 items-center">
            <div className="text-lg whitespace-nowrap">Write Amount</div>
            <div className="bg-(--natural1) flex rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="525.50"
                className="w-full text-center"
              />
              <button className="cursor-pointer bg-(--secondary2) flex px-6 py-3 gap-4 rounded-full text-(--secondary2-text)">
                Send
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
