import React from "react";
import "../HourlyChart.css";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import countFrequency from "../functions/countFrequency";
import { IoIosArrowBack } from "react-icons/io";
ChartJS.register(...registerables);

const HourlyChart = ({
  indexOfElementClicked,
  arrayOfAggregatedData,
  back,
}) => {
  const hourLabels = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const hourlyScheduledData = [];

  const hoursAtParticularInstance = arrayOfAggregatedData[
    indexOfElementClicked
  ].map((x) => Math.floor(new Date(x.schedule_time).getHours()));
  const freqMap = countFrequency(
    hoursAtParticularInstance,
    hoursAtParticularInstance.length,
    24
  );

  for (let [key, value] of freqMap.entries()) {
    hourlyScheduledData.push(value);
  }

  const hourlyData = {
    labels: hourLabels,
    datasets: [
      {
        label: "Scheduled",
        data: hourlyScheduledData,
        borderColor: "rgba(252, 100, 113, 1)",
        backgroundColor: "rgba(252, 100, 113, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Hours vs Scheduled",
      },
    },
    ticks: {
      stepSize: 1,
    },
  };
  return (
    <div>
      <button className="backBtn" onClick={back}>
        <IoIosArrowBack size={24} />
      </button>

      <Bar data={hourlyData} options={options} />
    </div>
  );
};

export default HourlyChart;
