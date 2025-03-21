import React from "react";
import "./styles.css";
import BarChartComponent from "../BarChartComponent/BarChartComponent";
import LineChartComponent from "../LineChartComponent/LineChartComponent";
import RadarChartComponent from "../RadarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "../RadialBarChartComponent/RadialBarChartComponent";

/**
 * Composant Charts qui contient tous les charts
 * @component
 * @param {Object} props - propriétés du composant
 * @param {number} props.userId - identifiant de l'utilisateur choisi
 * @returns {JSX.Element} - retourne le composant Charts
 */

const Charts = ({ userId }) => {
  return (
    <div className="chartsContainer">
      <div className="topLineChart">
        <BarChartComponent userId={userId} />
      </div>
      <div className="bottomLineCharts">
        <div className="chart1">
          <LineChartComponent userId={userId} />
        </div>
        <div className="chart2">
          <RadarChartComponent userId={userId} />
        </div>
        <div className="chart3">
          <RadialBarChartComponent userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
