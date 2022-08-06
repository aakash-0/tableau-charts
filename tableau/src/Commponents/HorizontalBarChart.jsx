import React, { useEffect } from 'react'
import { useState } from 'react';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import data from "../data";
import ChartDataLabels from 'chartjs-plugin-datalabels';

function HorizontalBarChart({index,setindex}) {
    
   
    
    const [avgData,setAvgData] = useState({
        labels: data[index===null?0:index].Average.labels,
    datasets: [
      {
        axis: 'y',
        data: data[index===null?0:index].Average.AvgNo ,
        fill: true,
        backgroundColor: "rgb(151,226,231)",
        borderColor: "rgb(151,226,231)",
      },
    ],
    options: {
        legend: { display: false }
      }
    })
    useEffect(() => {
        setAvgData({
          ...avgData,
          datasets: [
            {
              axis: 'y',
              data: data[index===null?0:index].Average.AvgNo ,
              fill: true,
              backgroundColor: "rgb(151,226,231)",
              borderColor: "rgb(151,226,231)",
            },
          ]
        })
      }, [setAvgData,index])
      console.log(avgData)
  return (
    <div>
        <div style={{ width: "50rem" }}>
        
        <Bar  data={avgData} plugins={[ChartDataLabels]} options={{
     indexAxis: 'y',
     plugins:{
          title:{display:false, font:{size: 12, family: 'rubik'}},
          legend: {display: false, position: 'right'}},
     maintainAspectRatio: false
     }}   />
        
      </div>
    </div>
  )
}

export default HorizontalBarChart