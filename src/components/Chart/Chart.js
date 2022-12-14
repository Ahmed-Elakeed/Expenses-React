import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            dataPoint={dataPoint}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
