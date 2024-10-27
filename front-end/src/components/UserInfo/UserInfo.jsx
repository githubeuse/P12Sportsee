import React, { useEffect, useState } from "react";
import { funcGetUserData } from "../../services/apiService";
import UserMainData from "../../models/userMainData";
import "./styles.css";

const UserInfo = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedUserData = await funcGetUserData(userId);
        // console.log("Raw user data:", fetchedUserData);
        const data = fetchedUserData.data;
        const user = new UserMainData(data);
        // console.log("Processed user data:", user);
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

  return (
    <div className="userInfo">
      <h2>
        Bonjour{" "}
        <span className="redFirstName">
          {userData.firstName ? userData.firstName : "First Name Not Available"}
        </span>
        <br />
        <span className="congratsParagraph">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </span>
      </h2>
      {/* <p>{userData.lastName ? userData.lastName : "Last Name Not Available"}</p>
      <p>{userData.age ? userData.age : "Age Not Available"}</p> */}
    </div>
  );
};

export default UserInfo;
