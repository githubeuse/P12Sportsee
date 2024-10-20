import React, { useEffect, useState } from "react";
import { fetchUserPerformance } from "../../services/apiService";
import UserPerformance from "../../models/userPerformance";

const RadarChart = ({ userId }) => {
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

  return (
    <div>
      {userData.data.length > 0 ? (
        userData.data.map((data, index) => (
          <p key={index}>
            {data.value} - {data.kind}
          </p>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default RadarChart;
