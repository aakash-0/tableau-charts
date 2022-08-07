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
            <div className='ls'>
                Avg Time to Atopt
            </div>
            <div className='ls-count'>
                {
                    index===null?45:data[index].Average.avg 
                }
            </div>
            <div style={{fontSize:"1.4rem"}} className='ls' >
                Avg Time to Adopt by Age Bucket
            </div>
        <div style={{ width: "20rem" }}>
            <Bar  data={avgData} plugins={[ChartDataLabels]} options={{
     indexAxis: 'y',
     plugins:{
          title:{display:false, font:{size: 12, family: 'rubik'}},
          legend: {display: false, position: 'right'}},
          
          scales:{
            yAxis:{
                grid: {
                    display: false
                },
            },
            xAxis:{
                grid: {
                    display: false
                },
            }
        },
     maintainAspectRatio: false
     }}   />
        
      </div>
      <h5>Note:Starts at Date of Transport</h5>
    </div>
  )
}

export default HorizontalBarChart