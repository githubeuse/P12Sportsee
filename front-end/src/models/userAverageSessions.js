class UserAverageSessions {
  constructor({ userId, sessions }) {
    console.log("Constructor UserAverageSessions input:", {
      userId,
      sessions,
    });
    this.userId = userId;
    this.sessions =
      sessions?.map((session) => ({
        day: session.day || "Unknown",
        sessionLength: session.sessionLength || 0,
      })) || [];
  }
}

export default UserAverageSessions;
