import React, { useState } from "react";
import "./App.css";
import AvgLineChart from "./Commponents/AvgLineChart";
import HorizontalBarChart from "./Commponents/HorizontalBarChart";
import LineChart from "./Commponents/LineChart";
import StackedBreed from "./Commponents/StackedBreed";
import StackedHorizontalBarChart from "./Commponents/StackedHorizontalBarChart";
export default function App() {
  const [index, setIndex] = useState(null);
  function setindex(a) {
    //callback for updating the index
    return setIndex(a);
  }

  return (
    <div className="App">
      {/* Main master-line chart */}
      <div className="left">
        <LineChart index={index} setindex={setindex} />
      </div>
      <div className="middle">
        {/* Horizontal Bar Chart for average data */}
        <HorizontalBarChart index={index} setindex={setindex} />
        {/* Line Chart for yearly average value */}
        <AvgLineChart index={index} setindex={setindex} />
      </div>
      <div className="right">
        <StackedHorizontalBarChart index={index} setindex={setindex} />
        {/* Stacked Bar Chart for dogs saved by breed */}
        <StackedBreed index={index} setindex={setindex} />
      </div>
    </div>
  );
}
