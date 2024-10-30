import {
  userMainData,
  userActivity,
  userAverageSessions,
  userPerformance,
} from "../data/mockedData";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

export const fetchUserData = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API
   * @function fetchUserData
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur depuis l'API
   * @throws {Error} - Erreur lors de la récupération des données
   */

  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok (api)");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Fetch error for fetchUserData (api)", error);
    throw error;
  }
};

export const fetchMockedUserData = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir des datas mockées
   * @function fetchMockedUserData
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données mockées de l'utilisateur
   */
  const mockedData = userMainData.find((user) => user.userId === userId);
  return mockedData;
};

export const funcGetUserData = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API ou des datas mockées
   * @function funcGetUserData
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur
   */
  const useMockData = process.env.REACT_APP_MOCK_DATA === "true";
  return useMockData
    ? await fetchMockedUserData(userId)
    : await fetchUserData(userId);
};

export const fetchUserActivity = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API
   * @function fetchUserActivity
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur depuis l'API
   * @throws {Error} - Erreur lors de la récupération des données
   */
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity/`);
    if (!response.ok) {
      throw new Error(
        "Network response was not ok for fetchUserActivity (api)"
      );
    }
    const userActivity = await response.json();
    return userActivity;
  } catch (error) {
    console.error("Fetch error for fetchUserActivity (api)", error);
    throw error;
  }
};

export const fetchMockedUserActivity = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir des datas mockées
   * @function fetchMockedUserActivity
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données mockées de l'utilisateur
   */
  const mockedData = userActivity.find((user) => user.userId === userId);
  return mockedData;
};

export const funcGetUserActivity = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API ou des datas mockées
   * @function funcGetUserActivity
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur
   */
  const useMockData = process.env.REACT_APP_MOCK_DATA === "true";
  return useMockData
    ? await fetchMockedUserActivity(userId)
    : await fetchUserActivity(userId);
};

export const fetchUserAverageSessions = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API
   * @function fetchUserAverageSessions
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur depuis l'API
   * @throws {Error} - Erreur lors de la récupération des données
   */
  try {
    const response = await fetch(
      `${API_BASE_URL}/user/${userId}/average-sessions/`
    );
    if (!response.ok) {
      throw new Error(
        "Network response was not of for fetchUserAverageSessions (api)"
      );
    }
    const userAverageSessions = await response.json();
    return userAverageSessions;
  } catch (error) {
    console.error("Fetch error for fetchUserAverageSessions (api)", error);
    throw error;
  }
};

export const fetchMockedUserAverageSessions = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir des datas mockées
   * @function fetchMockedUserAverageSessions
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données mockées de l'utilisateur
   */
  const mockedData = userAverageSessions.find((user) => user.userId === userId);
  return mockedData;
};

export const funcGetUserAverageSessions = async (userId) => {
  const useMockData = process.Env.REACT_APP_MOCK_DATA === "true";
  return useMockData
    ? await fetchMockedUserAverageSessions(userId)
    : await fetchUserAverageSessions(userId);
};

export const fetchUserPerformance = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API
   * @function fetchUserPerformance
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur depuis l'API
   * @throws {Error} - Erreur lors de la récupération des données
   */
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance/`);
    if (!response.ok) {
      throw new Error(
        "Network response was not ok for fetchUserPerformance (api)"
      );
    }
    const userPerformance = await response.json();
    return userPerformance;
  } catch (error) {
    console.error("Fetch error for fetchUserPerformance (api)", error);
    throw error;
  }
};

export const fetchMockedUserPerformance = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir des datas mockées
   * @function fetchMockedUserPerformance
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données mockées de l'utilisateur
   */
  const mockedData = userPerformance.find((user) => user.userId === userId);
  return mockedData;
};

export const funcGetUserPerformance = async (userId) => {
  /**
   * Récupère les données de l'utilisateur à partir de l'API ou des datas mockées
   * @function funcGetUserPerformance
   * @param {number} userId - identifiant de l'utilisateur
   * @returns {Promise<Object>} - Les données de l'utilisateur
   */
  const useMockData = process.env.REACT_APP_MOCK_DATA === "true";
  return useMockData
    ? await fetchMockedUserActivity(userId)
    : await fetchUserPerformance(userId);
};
