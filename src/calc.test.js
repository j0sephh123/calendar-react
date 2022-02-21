describe("calc", () => {
  test("calc", () => {
    const result = [];
    const days = 28;
    const row = 7;

    const prevMonthLastDay = 31;
    const firstWeekDay = 4;
    const lastWeekDay = 3;
    const firstWeekRemaining = row - firstWeekDay;
    const lastWeekRemaining = row - lastWeekDay;

    for (let i = 31; i <= 31 - firstWeekRemaining; i--) {
      console.log(i);
    }

    // insert 1st week

    // insert mid
    // insert last week

    expect(result).toEqual([
      [29, 30, 31, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24, 25],
      [26, 27, 28, 1, 2, 3, 4],
    ]);
  });
});
