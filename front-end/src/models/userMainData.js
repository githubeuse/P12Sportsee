class UserMainData {
  constructor({ id, userInfos, todayScore, score, keyData }) {
    console.log("Constructor input:", {
      id,
      userInfos,
      todayScore,
      score,
      keyData,
    }); // Ajoute ce log

    this.id = id;
    this.firstName = userInfos?.firstName || "Unknown";
    this.lastName = userInfos?.lastName || "Unknown";
    this.age = userInfos?.age || "Unknown";
    this.todayScore = todayScore !== undefined ? todayScore : score;
    this.calorieCount = keyData?.calorieCount || 0;
    this.proteinCount = keyData?.proteinCount || 0;
    this.carhohydrateCount = keyData?.carbohydrateCount || 0;
    this.lipidCount = keyData?.lipidCount || 0;
  }
}

export default UserMainData;
