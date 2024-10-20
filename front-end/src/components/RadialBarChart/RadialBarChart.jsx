import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../services/apiService";
import UserMainData from "../../models/userMainData";
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RadialChart = ({ userId }) => {
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
    <div>
      {data[0].value}%
      <br />
      de votre objectif
    </div>
  );
};

export default RadialChart;
