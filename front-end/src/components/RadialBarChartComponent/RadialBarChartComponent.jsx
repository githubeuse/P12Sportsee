import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../services/apiService";
import UserMainData from "../../models/userMainData";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "./styles.css";

/**
 *
 * Composant RadialBarChartComponent permet d'afficher le score en pourcentage atteint par l'utilisateur
 * @component
 * @param {Object} props - propriétés du composant
 * @param {number} props.userId - identifiant de l'utilisateur choisi
 * @returns {JSX.Element} - retourne le composant RadialBarChartComponent
 */

const RadialBarChartComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedUserData = await fetchUserData(userId);
        console.log("Raw user data:", fetchedUserData);
        const data = fetchedUserData.data;
        const user = new UserMainData(data);
        console.log("Processed user data:", user);
        setUserData(user);
      } catch (error) {
        setError(error.message);
      }
    };

    if (userId !== null) {
      getUserData();
    }
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      name: "score",
      value: userData.todayScore * 100,
      fill: "#ff0000",
    },
  ];

  return (
    <div className="chart">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={200} className="radialBarChart">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450} // 360 + 90 pour faire un tour complet
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={15}
            background={{ fill: "#ffffff" }}
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
          {/* <Tooltip /> */}
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="legendChart">
        <span className="percentageValue">{data[0].value}%</span>
        <br />
        <span className="percentageText">de votre objectif</span>
      </div>
    </div>
  );
};

export default RadialBarChartComponent;
