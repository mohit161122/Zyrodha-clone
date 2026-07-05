import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function VerticalGraph({ data }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // Create chart ONCE on mount
  useEffect(() => {
    if (!canvasRef.current) return;

    // ChartJS.getChart() destroys any existing chart on this canvas.
    // This is the fix for React 19 Strict Mode double-mount causing
    // "Canvas is already in use" error.
    const existingChart = ChartJS.getChart(canvasRef.current);
    if (existingChart) {
      existingChart.destroy();
    }

    chartRef.current = new ChartJS(canvasRef.current, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Holdings - Stock Price" },
        },
        scales: {
          y: { beginAtZero: false },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update chart data WITHOUT recreating the chart when data prop changes
  useEffect(() => {
    if (!chartRef.current || !data) return;
    chartRef.current.data = data;
    chartRef.current.update();
  }, [data]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}
