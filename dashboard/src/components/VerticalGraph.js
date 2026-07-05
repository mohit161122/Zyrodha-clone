import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings - Stock Price",
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

export function VerticalGraph({ data }) {
  if (!data) return null;
  return <Bar options={options} data={data} />;
}
