import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const dataBar = {
  labels,
  datasets: [
    {
      label: "Images Uploaded Last Week",
      data: [123, 88, 55, 100, 58, 22, 0],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Images Analyzed Last week",
      data: [123, 80, 40, 80, 58, 20, 0],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const dataPie = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export function BarBoard() {
  return (
    <div>
      <Bar options={options} data={dataBar} />
    </div>
  );
}

export const PieBoard = () => {
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <Doughnut style={{ height: "800px", marginTop: "50px" }} data={dataPie} />
    </div>
  );
};
