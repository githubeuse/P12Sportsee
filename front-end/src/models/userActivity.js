class UserActivity {
  constructor({ userId, sessions }) {
    console.log("Constructor UserActivity input:", {
      userId,
      sessions,
    });
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
