import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../services/apiService";
import UserMainData from "../../models/userMainData";
import "./styles.css";
import caloriesIcon from "../../assets/calories-icon.png";
import proteinsIcon from "../../assets/protein-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import lipidsIcon from "../../assets/fat-icon.png";

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
    <div className="nutritionSummaryContainer">
      <div className="nutritionSummaryCard">
        <img src={caloriesIcon} alt="calories" className="icon" />
        <div className="rightCol">
          <div className="score">
            {userData.calorieCount
              ? userData.calorieCount
              : "CalorieCount Not Available"}
            <span>kCal</span>
          </div>
          <span className="legend">Calories</span>
        </div>
      </div>
      <div className="nutritionSummaryCard">
        <img src={proteinsIcon} alt="proteins" className="icon" />
        <div className="rightCol">
          <div className="score">
            {userData.proteinCount
              ? userData.proteinCount
              : "proteinCount Not Available"}{" "}
            <span>g</span>
          </div>
          <span className="legend">Protéines</span>
        </div>
      </div>
      <div className="nutritionSummaryCard">
        <img src={carbsIcon} alt="carbohydrates" className="icon" />
        <div className="rightCol">
          <div className="score">
            {userData.carhohydrateCount
              ? userData.carhohydrateCount
              : "carhohydrateCount Not Available"}{" "}
            <span>g</span>
          </div>
          <span className="legend">Glucides</span>
        </div>
      </div>
      <div className="nutritionSummaryCard">
        <img src={lipidsIcon} alt="lipids" className="icon" />
        <div className="rightCol">
          <div className="score">
            {userData.lipidCount
              ? userData.lipidCount
              : "lipidCount Not Available"}{" "}
            <span>g</span>
          </div>
          <span className="legend">Lipides</span>
        </div>
      </div>
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
