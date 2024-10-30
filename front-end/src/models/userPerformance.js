class UserPerformance {
  /**
   * Crée une instance de userPerformance
   * @param {Object} data - les données userPerformance de l'utilisateur
   * @param {number} data.userId - identifiant de l'utilisateur
   * @param {Object} data.kind - type de données
   * @param {Array<Object>} data.data - données de l'utilisateur
   * @param {number} data.data.value - valeur de la donnée
   * @param {string} data.data.kind - type de la donnée
   */

  constructor({ userId, kind, data }) {
    console.log("Constructor UserPerformance input:", {
      userId,
      kind,
      data,
    });

    this.userId = userId;
    this.kind = kind;
    this.data =
      data?.map((item) => ({
        value: item.value || 0,
        kind: kind[item.kind] || "unknown",
      })) || [];
  }
}
export default UserPerformance;
