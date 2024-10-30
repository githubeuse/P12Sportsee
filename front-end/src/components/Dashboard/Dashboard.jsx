import React from "react";
import NutritionSummary from "../NutritionSummary/NutritionSummary";
import Charts from "../Charts/Charts";
import "./styles.css";

/**
 * Composant Dashboard qui contient les composants Charts et NutritionSummary
 * @component
 * @param {Object} props - propriétés du composant
 * @param {number} props.userId - identifiant de l'utilisateur choisi
 * @returns {JSX.Element} - retourne le composant Dashboard
 */

const Dashboard = ({ userId }) => {
  return (
    <div className="dashboardContainer">
      <div className="chartsAndSummary">
        <Charts userId={userId} />
        <NutritionSummary userId={userId} />
      </div>
    </div>
  );
};

export default Dashboard;
