class UserActivity {
  /**
   * Crée une instance de userActivity
   * @param {Object} data - les données userActivity de l'utilisateur
   * @param {number} data.userId - identifiant de l'utilisateur
   * @param {Array<Object>} data.sessions - sessions de l'utilisateur
   * @param {string} data.sessions.day - jour de la session
   * @param {number} data.sessions.kilogram - poids de la session
   * @param {number} data.sessions.calories - calories brûlées de la session
   */
  constructor({ userId, sessions }) {
    // console.log("Constructor UserActivity input:", {
    //   userId,
    //   sessions,
    // });
    this.userId = userId;
    this.sessions =
      sessions?.map((session) => ({
        day: session.day || "Unknown",
        kilogram: session.kilogram || 0,
        calories: session.calories || 0,
      })) || [];
  }
}

export default UserActivity;
