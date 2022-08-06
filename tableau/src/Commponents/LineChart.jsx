import React, { useState } from "react";
import { useRef } from "react";
import { Line, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import data from "../data";
import { useEffect } from "react";

function LineChart({ index, setindex }) {

  const [count, setCount] = useState(0);
//   number of saved dogs at a perticular year

  const [dogsData, setdogsData] = useState({
    labels: data.map((e) => e.year),
    datasets: [
      {
        data: data.map((e) => e.prev),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
   
  });
//   dogs data for LineChart

  const [saved, setSaved] = useState(data.map((e) => e.saved));
//   saved dogs data

  const chartRef = useRef();
  useEffect(() => {
    setCount(saved[index]);
  }, [index, count]);

  const onClick = (event) => {
    var arr = getElementAtEvent(chartRef.current, event);
    setindex(arr[0].element.$context.index);
  };

  return (
    <div className="App">
      <div style={{ width: "50rem" }}>
        <div>
          Total life Save
          <br></br>
          
          <h1>{index == null ?10875: count}</h1> {/* set count to 1087 if count is null */}
        </div>
        <Line ref={chartRef} data={dogsData} onClick={onClick}  options={ {
        legend: { display: false },
        scales: {
            yAxis: 
                {
                    ticks: {
                        
                        min: 0,
                        max: 11000,
                        beginAtZero: true,
                        stepSize: 2000,
                        padding:10
                    }
                },

      }}} />
      </div>
    </div>
  );
}

export default LineChart;
