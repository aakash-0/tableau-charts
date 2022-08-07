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
      <div style={{ width: "40rem"}}>
        <div className="heading">
           Lives Saved
           </div>
          <div className="count">
          {index == null ?10875: count} {/* set count to 1087 if count is null */}
        </div>
        <Line ref={chartRef} data={dogsData} onClick={onClick}  options={ {
        // legend: { display: false },
        plugins:{
            title:{display:false, font:{size: 12, family: 'rubik'}},
            legend: {display: false, position: 'right'}},
        scales: {
            yAxis: 
                {
                    ticks: {
                        
                        min: 0,
                        max: 18000,
                        beginAtZero: true,
                        stepSize: 2000,
                        
                    }
                },

      }}}  />
      </div>
    
  );
}

export default LineChart;
