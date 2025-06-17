// frontend/src/TemperatureChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function TemperatureChart({ data }) {
  const chartData = {
    labels: data.map(pt => pt.time),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(pt => pt.temp),
        fill: false,
        borderColor: 'red',
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,        // Chart resizes with container:contentReference[oaicite:4]{index=4}
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMin: 10,
        suggestedMax: 50
      }
    }
  };
  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}
