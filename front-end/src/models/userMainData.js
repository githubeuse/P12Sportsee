class UserMainData {
  constructor({ id, userInfos, todayScore, score, keyData }) {
    // console.log("Constructor input:", {
    //   id,
    //   userInfos,
    //   todayScore,
    //   score,
    //   keyData,
    // });

    /**
     * Crée une instance de userMainData
     * @param {Object} data - les données userMainData de l'utilisateur
     * @param {number} data.id - identifiant de l'utilisateur
     * @param {Object} data.userInfos - informations de l'utilisateur
     * @param {string} data.userInfos.firstName - prénom de l'utilisateur
     * @param {string} data.userInfos.lastName - nom de l'utilisateur
     * @param {number} data.userInfos.age - âge de l'utilisateur
     * @param {number} data.todayScore - score de l'utilisateur aujourd'hui
     * @param {number} data.score - score de l'utilisateur aujourd'hui
     * @param {Object} data.keyData - données clés de l'utilisateur
     * @param {number} data.keyData.calorieCount - nombre de calories de l'utilisateur
     * @param {number} data.keyData.proteinCount - nombre de protéines de l'utilisateur
     * @param {number} data.keyData.carbohydrateCount - nombre de carbohydrates de l'utilisateur
     * @param {number} data.keyData.lipidCount - nombre de lipides de l'utilisateur
     *
     */

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
