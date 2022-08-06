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
    return setIndex(a);
  }

  return (
    <div className="App">
      <div className="left">
        <LineChart index={index} setindex={setindex} />
      </div>
      <div className="middle">
        <HorizontalBarChart index={index} setindex={setindex} />
        <AvgLineChart index={index} setindex={setindex} />
      </div>
      <div className="right">
        <StackedHorizontalBarChart index={index} setindex={setindex} />
        <StackedBreed index={index} setindex={setindex} />
      </div>
    </div>
  );
}
