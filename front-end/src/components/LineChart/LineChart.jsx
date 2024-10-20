import React, { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../services/apiService";
import UserAverageSessions from "../../models/userAverageSessions";

const LineChart = ({ userId }) => {
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
  return (
    <div>
      {userData.sessions.length > 0 ? (
        userData.sessions.map((session, index) => (
          <p key={index}>
            date : {session.day} - durée : {session.sessionLength} -
          </p>
        ))
      ) : (
        <p>No sessions available</p>
      )}
    </div>
  );
};

export default LineChart;
