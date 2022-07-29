import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { Chart } from "react-google-charts";

const chartData = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const chartOptions = {
  title: "My Daily Activities",
};

function App() {
    return (
        <Chart
          chartType="PieChart"
          data={chartData}
          options={chartOptions}
          width={"100%"}
          height={"400px"}
        />
    );
}

export default App;
