import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../services/apiService";
import UserMainData from "../../models/userMainData";

const NutritionSummary = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const fetchedUserData = await fetchUserData(userId);
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
    <div>
      <p>
        {userData.calorieCount
          ? userData.calorieCount
          : "CalorieCount Not Available"}{" "}
        <span>kCal</span>
        <br />
        <span>Calories</span>
      </p>
      <p>
        {userData.proteinCount
          ? userData.proteinCount
          : "proteinCount Not Available"}{" "}
        <span>g</span>
        <br />
        <span>Glucides</span>
      </p>
      <p>
        {userData.carhohydrateCount
          ? userData.carhohydrateCount
          : "carhohydrateCount Not Available"}{" "}
        <span>g</span>
        <br />
        <span>Glucides</span>
      </p>
      <p>
        {userData.lipidCount ? userData.lipidCount : "lipidCount Not Available"}{" "}
        <span>g</span>
        <br />
        <span>Lipides</span>
      </p>
    </div>
  );
};
// };

//   return (
//     <div>
//       <p>Summary</p>
//     </div>
//   );
// };

export default NutritionSummary;
