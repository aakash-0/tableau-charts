import React, { useEffect } from 'react'
import { useState } from 'react';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import data from "../data";
import ChartDataLabels from 'chartjs-plugin-datalabels';

function StackedHorizontalBarChart({index,setindex}) {

    const [prData,setPrData] = useState({
        labels: data[index===null?0:index].proportion.labels,
    datasets: [
      {
        axis: 'y',
        data: data[index===null?0:index].proportion.does ,
        fill: true,
        backgroundColor: "rgb(151,226,231)",
        borderColor: "rgb(151,226,231)",
      },
      {
        axis: 'y',
        data: data[index===null?0:index].proportion.not,
        fill: true,
        backgroundColor: "rgb(92,96,104)",
        borderColor: "rgb(92,96,104)",
      },
      {
        axis: 'y',
        data: data[index===null?0:index].proportion.not_sure,
        fill: true,
        backgroundColor: "rgb(214,215,219)",
        borderColor: "rgb(214,215,219)",
      },
    ],
    options: {
        legend: { display: false }
      }
    })

    useEffect(() => {
        setPrData({
          ...prData,
          datasets: [
            {
              axis: 'y',
              data: data[index===null?0:index].proportion.does ,
              fill: true,
              backgroundColor: "rgb(151,226,231)",
              borderColor: "rgb(151,226,231)",
            },
            {
                axis: 'y',
                data: data[index===null?0:index].proportion.not ,
                fill: true,
                backgroundColor: "rgb(92,96,104)",
                borderColor: "rgb(92,96,104)",
              },
              {
                axis: 'y',
                data: data[index===null?0:index].proportion.not_sure,
                fill: true,
                backgroundColor: "rgb(214,215,219)",
                borderColor: "rgb(214,215,219)",
              }
          ]
        })
      }, [setPrData,index])

  return (
    <div>
        <div style={{ width: "50rem" }}>
        
        <Bar  data={prData} plugins={[ChartDataLabels]} options={{
     indexAxis: 'y',
     plugins:{
          title:{display:false, font:{size: 12, family: 'rubik'}},
          legend: {display: false, position: 'right'}},
     maintainAspectRatio: false,
     scales: {
        xAxis: 
            {
                ticks: {
                    
                    min: 0,
                    max: 100,
                    beginAtZero: true,
                    stepSize: 20,
                    
                },
                stacked:true
                
            },
        yAxis:{
            stacked:true
        }

  }
     }}   />
        
      </div>
    </div>
  )
}

export default StackedHorizontalBarChart