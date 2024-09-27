const API_BASE_URL = "http://localhost:3000";

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
