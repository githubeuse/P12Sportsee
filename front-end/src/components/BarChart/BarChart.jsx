import React, { useEffect, useState } from "react";
import { fetchUserActivity } from "../../services/apiService";
import UserActivity from "../../models/userActivity";

const BarChart = ({ userId }) => {
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

  return (
    <div>
      {userData.sessions.length > 0 ? (
        userData.sessions.map((session, index) => (
          <p key={index}>
            {session.day} - {session.kilogram} kg - {session.calories} kcal
          </p>
        ))
      ) : (
        <p>No sessions avalaible</p>
      )}
    </div>
  );
};

export default BarChart;
