import React, { useEffect, useState } from "react";
import { fetchUserPerformance } from "../../services/apiService";
import UserPerformance from "../../models/userPerformance";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  Radar,
} from "recharts";

/**
 * Composant RadarChartComponent permet d'afficher sous la forme d'un radar les scores de l'utilisateur
 * @component
 * @param {Object} props - paramètres du composant
 * @param {number} props.userId - identifiant de l'utilisateur choisi
 * @returns {JSX.Element} - retourne le composant RadarChartComponent
 */

const RadarChartComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedUserPerformance = await fetchUserPerformance(userId);
        console.log("Raw user data:", fetchedUserPerformance);
        const data = fetchedUserPerformance.data;
        const user = new UserPerformance(data);
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
    return <div>Error : {error}</div>;
  }

  if (!userData) {
    return <div>Loading</div>;
  }

  const transformedData = userData.data.map((item, index) => ({
    index: index + 1,
    kind: item.kind,
    value: item.value,
  }));

  return (
    <div className="chartContainer">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart outerRadius={90} data={transformedData}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#FFFFFF", fontSize: 12 }}
          />
          <PolarRadiusAxis angle={30} tick={false} axisLine={false} />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="transparent"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

//   {/* {userData.data.length > 0 ? (
//     userData.data.map((data, index) => (
//       <p key={index}>
//         {data.value} - {data.kind}
//       </p>
//     ))
//   ) : (
//     <p>No data available</p>
//   )} */}

export default RadarChartComponent;
