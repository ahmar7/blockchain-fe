import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const options = {
    responsive: true,
    scales: {
      x: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
      y: [
        {
          type: "linear",
          position: "left",
        },
      ],
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            if (label) {
              return `${label}: $${context.parsed.y}`;
            }
            return `$${context.parsed.y}`;
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    backgroundColor: "white",
  };

  const purpleLine = {
    label: "BTC Price",
    data: data?.datasets?.[0]?.data || [],
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: data?.datasets?.[0]?.data.map((value, index, array) => {
      if (index > 0) {
        return value > array[index - 1] ? "green" : "red";
      }
      return "rgba(0,0,0,0.2)";
    }),
    fill: true,
    pointRadius: 0,
    pointHoverRadius: 0,
  };

  const purpleData = {
    labels: data ? data.labels : [],
    datasets: [purpleLine],
  };

  return (
    <div style={{ height: "400px", cursor: "pointer" }}>
      <Line data={purpleData} options={options} />
    </div>
  );
};

export default LineChart;
