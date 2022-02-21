import {
  getDaysInMonth,
  lastDayOfMonth,
  startOfMonth,
  getDay,
  subMonths,
  getMonth,
  getDate,
} from "date-fns";

import "./App.css";

const weekDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

function App() {
  const array = [];
  const date = new Date();

  const data = {
    daysInMonth: getDaysInMonth(date),
    lastDay: lastDayOfMonth(date),
    startOfMonth: startOfMonth(date),
    firstDay: weekDays[getDay(startOfMonth(date))],
    lastDay: weekDays[getDay(lastDayOfMonth(date))],
    prevMonth: subMonths(date, 1),
    month: getMonth(date),
  };

  const isFirstDayMonday = data.firstDay === "Monday";
  if (!isFirstDayMonday) {
    const lastDayOfPrevMonth = lastDayOfMonth(data.prevMonth);
    const lastDay = weekDays[getDay(lastDayOfPrevMonth)];

    if (lastDay === "Monday") {
      array.push([getDate(lastDayOfPrevMonth)]);
      let currentIndex = 1;
      for (let dayIndex = 1; dayIndex <= data.daysInMonth; dayIndex += 1) {
        if (dayIndex % 7 === 0) {
          const arrayIndex = dayIndex / 7 - 1;
          for (let i = currentIndex; i < currentIndex + 7; i += 1) {
            if (!array[arrayIndex]) {
              array[arrayIndex] = [];
            }
            array[arrayIndex].push(i);
          }

          currentIndex += 7;
        }
      }
    }
  }

  console.log(array);

  // const array = [
    // [31, 1, 2, 3, 4, 5, 6],
    // [7, 8, 9, 10, 11, 12, 13],
    // [13, 14, 15, 16, 17, 18, 19],
    // [20, 21, 22, 23, 24, 25, 26],
    // [27, 28, 1, 2, 3, 4, 5],
  // ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="calendar">
          <h3>{months[data.month]}</h3>
          {array.map((week, weekIndex) => (
            <div key={weekIndex} className="row">
              {week.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
