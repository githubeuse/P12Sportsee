import React from "react";
import "./styles.css";
import BarChart from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";
import RadarChart from "../RadarChart/RadarChart";
import RadialBarChart from "../RadialBarChart/RadialBarChart";

const Charts = ({ userId }) => {
  return (
    <div className="chartsContainer">
      <p>Charts</p>
      <div className="topLineCharts">
        <BarChart userId={userId} />
      </div>
      <div className="bottomLineCharts">
        <div className="chart1">
          <LineChart userId={userId} />
        </div>
        <div className="chart2">
          <RadarChart userId={userId} />
        </div>
        <div className="chart3">
          <RadialBarChart userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
