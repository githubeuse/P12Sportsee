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
        kind: item.kind || 0,
      })) || [];
    //   this.data = this.transformData(data, kind);
    // }
    // transformData(data, kind) {
    //   return data.map((item) => ({
    //     ...item,
    //     kind: kind[item.kind],
    //   }));
    // }

    // getPerformanceByKind(kindName) {
    //   return this.data.find((item) => item.kind === kindName);
    // }
  }
}
export default UserPerformance;
