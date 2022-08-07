import React, { useEffect } from 'react'
import { useState } from 'react';
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import data from "../data";
import ChartDataLabels from 'chartjs-plugin-datalabels';

function StackedBreed({index,setindex}) {

    const [breedData,setBreedData] = useState({
        labels: data[index===null?0:index].primary_breed.labels,
    datasets: [
      {
        axis: 'y',
        data: data[index===null?0:index].primary_breed.numbers ,
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
        setBreedData({
          ...breedData,
          datasets: [
            {
              axis: 'y',
              data: data[index===null?0:index].primary_breed.numbers ,
              fill: true,
              backgroundColor: "rgb(151,226,231)",
              borderColor: "rgb(151,226,231)",
            },
          ]
        })
      }, [setBreedData,index])

  return (
    <div>
        <div style={{fontSize:"1.4rem"}} className='ls'>Top 10 Primary Breeds (including Mixes)</div>
    <div style={{ width: "20rem" ,height:"20rem"}}>
    
    <Bar  data={breedData} plugins={[ChartDataLabels]} options={{
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
</div>
  )
}

export default StackedBreed