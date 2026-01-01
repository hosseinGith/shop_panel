import ApexCharts from "react-apexcharts";
const series: ApexNonAxisChartSeries = [
  {
    type: "bar",
    name: "درآمد",
    color: "#1A16F3",
    data: [180, 220, 195, 240, 210, 252, 230],
  },
  {
    type: "bar",
    name: "درآمد",
    color: "#FCAA0B",
    data: [200, 100, 300, 10, 210, 252, 230],
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
  colors: ["#000"],
};
export default function DebitCreditOverview() {
  return (
    <div className="space-y-8 w-full">
      <h1 className="title">Debit & Credit Overview</h1>
      <div className="bg-(--background2) h-full p-4 flex flex-col gap-4 shadow rounded-2xl w-full">
        <div className="flex justify-between">
          <p className="text-(--low-text-color) *:mx-1 *:inline-block">
            <span className="font-bold text-gray-500">$7,560</span>
            Debited &<span className="font-bold text-gray-500">$5,420</span>
            Credited in this Week
          </p>
          <div className="flex *:flex *:items-center *:gap-2 gap-4">
            <div>
              <div className="w-4 h-4 rounded bg-[#1A16F3]"></div>
              Debit
            </div>
            <div>
              <div className="w-4 h-4 rounded bg-[#FCAA0B]"></div>
              Credit
            </div>
          </div>
        </div>
        <div>
          <ApexCharts
            options={options}
            series={series}
            width="100%"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
