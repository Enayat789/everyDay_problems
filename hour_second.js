//  Convert Hours into Seconds

function convertHour_second(hour) {
  const hour_second = [];

  const convert_toSecond = hour * 60 * 60;

  hour_second.push(convert_toSecond);

  return hour_second;
}

const result = convertHour_second(1);
console.log(result);
