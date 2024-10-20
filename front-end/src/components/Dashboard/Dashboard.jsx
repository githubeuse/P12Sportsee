import React from "react";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import NutritionSummary from "../NutritionSummary/NutritionSummary";
import Charts from "../Charts/Charts";

import "./styles.css";

const Dashboard = ({ userId }) => {
  return (
    <div className="dashboardContainer">
      <div className="welcomeMessageContainer">
        <WelcomeMessage />
      </div>
      <div className="chartsAndSummary">
        <Charts userId={userId} />
        <NutritionSummary userId={userId} />
      </div>
    </div>
  );
};

export default Dashboard;
