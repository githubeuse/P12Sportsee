import React, { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../services/apiService";
import UserAverageSessions from "../../models/userAverageSessions";
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from "recharts";
import "./styles.css";

const LineChartComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedUserAverageSessions = await fetchUserAverageSessions(
          userId
        );
        console.log(
          "Raw user data for fetchedUserAverageSessions:",
          fetchedUserAverageSessions
        );
        const data = fetchedUserAverageSessions.data;
        const user = new UserAverageSessions(data);
        console.log(
          "Processed user data for fetchedUserAverageSessions:",
          user
        );
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
    return <div>Error : {error}</div>;
  }
  if (!userData) {
    return <div>Loading</div>;
  }

  const transformedData = userData.sessions.map((session, index) => ({
    index: index,
    day: session.day,
    sessionLength: session.sessionLength,
  }));

  const formatTick = (tick) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[tick];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chartContainer">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={730}
          height={250}
          data={transformedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="index"
            fill="#ffffff"
            tick={{ fill: "#ffffff" }}
            tickLine={false}
            axisLine={{ stroke: "transparent" }}
            tickFormatter={formatTick}
          />

          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
          />
        </LineChart>

        {/* {userData.sessions.length > 0 ? (
          userData.sessions.map((session, index) => (
            <p key={index}>
              date : {session.day} - durée : {session.sessionLength} -
            </p>
          ))
        ) : (
          <p>No sessions available</p>
        )} */}
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
