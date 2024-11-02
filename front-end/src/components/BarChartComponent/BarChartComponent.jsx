import React, { useEffect, useState } from "react";
import { fetchUserActivity } from "../../services/apiService";
import UserActivity from "../../models/userActivity";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./styles.css";

/**
 * Composant BarChartComponent permet d'afficher l'activité quotidienne de l'utilisateur sous forme de graphique en barres
 * @component
 * @param {number} userId - identifiant de l'utilisateur choisi
 * @returns {JSX.Element} - retourne le composant BarChartComponent
 */

const BarChartComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedUserActivity = await fetchUserActivity(userId);
        console.log("Raw user data:", fetchedUserActivity);
        const data = fetchedUserActivity.data;
        const user = new UserActivity(data);
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
    return <div>Loading</div>;
  }

  const transformedData = userData.sessions.map((session, index) => ({
    index: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="custom-legend">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {entry.value === "kilogram"
              ? "Poids (kg)"
              : "Calories brûlées (kCal)"}
          </li>
        ))}
      </ul>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barchart-custom-tooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chartContainer">
      <h2 className="barChartTitle">Activité quotidienne</h2>
      <ResponsiveContainer
        width="100%"
        height={200}
        className="responsiveContainer"
      >
        <BarChart data={transformedData} className="chart">
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="index" />
          <YAxis orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            className="legendChart"
            content={renderLegend}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            barSize={7}
            barGap="8"
            className="bar"
          />{" "}
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            barSize={7}
            barGap="8"
          />{" "}
        </BarChart>
      </ResponsiveContainer>

      {/* {userData.sessions.length > 0 ? (
        userData.sessions.map((session, index) => (
          <p key={index}>
            {session.day} - {session.kilogram} kg - {session.calories} kcal
          </p>
        ))
      ) : (
        <p>No sessions avalaible</p>
      )} */}
    </div>
  );
};

export default BarChartComponent;
