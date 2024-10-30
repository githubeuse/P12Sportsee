class UserAverageSessions {
  /**
   * Crée une instance de userAverageSessions
   * @param {Object} data - les données userAverageSessions de l'utilisateur
   * @param {number} data.userId - identifiant de l'utilisateur
   * @param {Array<Object>} data.sessions - sessions de l'utilisateur
   * @param {number} data.sessions.day - jour de la session
   * @param {number} data.sessions.sessionLength - durée de la session
   */

  constructor({ userId, sessions }) {
    // console.log("Constructor UserAverageSessions input:", {
    //   userId,
    //   sessions,
    // });
    this.userId = userId;
    this.sessions =
      sessions?.map((session) => ({
        day: session.day || "Unknown",
        sessionLength: session.sessionLength || 0,
      })) || [];
  }
}

export default UserAverageSessions;
