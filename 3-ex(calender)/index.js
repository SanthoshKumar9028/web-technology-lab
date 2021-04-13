const getTotalDays = (() => {
  let days = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return (year, month) => {
    if (month === 1) {
      if (isLeapYear(year)) return 29;
      return 28;
    }
    return days[month];
  };
})();

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

function genMonthCalender(year, month) {
  let cal = [];
  for (let i = 0; i < 5; i++) {
    cal.push(new Array(7).fill(0));
  }
  let dateObj = new Date(year, month);
  let weekDay = dateObj.getDay();
  let totalDays = getTotalDays(year, month);
  let curDate = 1;
  //filling the first row
  while (weekDay < 7) {
    cal[0][weekDay++] = curDate++;
  }
  //filling row from second and fourth
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      cal[i][j] = curDate++;
    }
  }
  //filling the last row
  for (let i = 0; i < 7; i++) {
    if (curDate > totalDays) break;
    cal[4][i] = curDate++;
  }
  //filling the remaing dates in first row
  let i = 0;
  while (curDate <= totalDays) {
    cal[0][i++] = curDate++;
  }
  return cal;
}
