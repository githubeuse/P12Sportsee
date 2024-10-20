class UserPerformance {
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
