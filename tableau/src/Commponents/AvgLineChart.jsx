import React from "react";

import { Line, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import data from "../data";
import { useState, useEffect } from "react";

function AvgLineChart({ index, setindex }) {
  const [avgNo, setAvgNo] = useState({
    //getting averag data
    labels: data.map((e) => e.year),
    datasets: [
      {
        data:
          index === null
            ? data.map((e) => e.Average.avg) //set the avrage data on bases of index
            : [data[index].Average.avg],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });
  useEffect(() => {
    let avgArr = new Array(9).fill(0);
    if (index != null) {
      avgArr[index] = data[index].Average.avg;
    }
    setAvgNo({
      //update the data according to the index every time the line graph is clicked
      labels:
        index == null
          ? data.map((e) => e.year)
          : [data[index].year - 1, data[index].year, data[index].year + 1], //if index is null ,value of labels
      datasets: [
        {
          data:
            index === null // if value of index is null
              ? data.map((e) => e.Average.avg)
              : [0, data[index].Average.avg, 0],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    });
  }, [index]);

  return (
    <div style={{ width: "20rem" }}>
      <div style={{ fontSize: "1.4rem" }} className="ls">
        Avg Time to Adopt over Time
      </div>
      <Line
        data={avgNo}
        options={{
          legend: { display: false },
          plugins: {
            title: { display: false, font: { size: 12, family: "rubik" } },
            legend: { display: false, position: "right" },
          },
          scales: {
            yAxis: {
              ticks: {
                // setting the step size if the y-axis
                min: 0,
                max: 60,
                beginAtZero: true,
                stepSize: 20,
                font: { weight: "bold", color: "black" },

                // align:'center'
              },
              grid: {
                display: false, //grid display none
              },
              paddingRight: 200,
            },
            xAxis: {
              ticks: {
                position: "center",
                font: { weight: "bold", color: "black" },
              },
              grid: {
                display: false,
              },
              paddingLeft: 200,
            },
          },
        }}
      />
    </div>
  );
}

export default AvgLineChart;
