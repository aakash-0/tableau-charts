import React from 'react'

import { Line, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import data from '../data';
import { useState , useEffect } from 'react';

function AvgLineChart({index ,setindex }) {
    const [avgNo,setAvgNo] = useState({
        labels: data.map(e=>e.year),
        datasets: [
            {
              data: index===null?data.map(e=>e.Average.avg):[data[index].Average.avg],
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
    })
    useEffect(() => {
        let avgArr = new Array(9).fill(0);
        if(index!=null){
            avgArr[index] = data[index].Average.avg
        }
        setAvgNo({
            labels: index==null?data.map(e=>e.year):[data[index].year,data[index].year,data[index].year+2],
            datasets: [
              {
                data: (index===null?data.map(e=>e.Average.avg):[0,data[index].Average.avg,0]),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
              },
            ]
          })
      
    }, [index])
    
  return (
    <div style={{ width: "50rem" }}>
         <Line  data={avgNo} options={ {
        legend: { display: false },
        scales: {
            yAxis: 
                {
                    ticks: {
                        
                        min: 0,
                        max: 60,
                        beginAtZero: true,
                        stepSize: 20,
                        // align:'center'
                    }
                },
                xAxis: 
                {
                    ticks: {
                        position:'center',
                        
                        
                        
                    },
                    paddingLeft :200,
                    
                },

      }}} />
    </div>
  )
}

export default AvgLineChart