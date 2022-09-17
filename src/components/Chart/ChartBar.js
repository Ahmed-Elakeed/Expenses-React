import React from "react";
import "./ChartBar.css";

const CharBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight =
      Math.round((props.dataPoint.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        <div className="chart-bar__label">{props.dataPoint.label}</div>
      </div>
    </div>
  );
};
export default CharBar;
