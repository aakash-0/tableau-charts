import React, { useState } from "react";
import AvgLineChart from "./Commponents/AvgLineChart";
import HorizontalBarChart from "./Commponents/HorizontalBarChart";
import LineChart from "./Commponents/LineChart";
import StackedHorizontalBarChart from "./Commponents/StackedHorizontalBarChart";
export default function App() {
  
  const [index,setIndex] = useState(null);
  function setindex(a){
    return setIndex(a)
  }

  return (
    <div className="App">
     <LineChart index={index} setindex={setindex}  /> 
     <HorizontalBarChart  index={index} setindex={setindex} />
     <AvgLineChart index = {index} setindex = {setindex} />
     <StackedHorizontalBarChart index = {index} setindex = {setindex} />
    </div>
  );
}
