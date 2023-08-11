//  Convert Hours into Seconds

function convertMinute_second(hour) {
  const min_second = [];

  const convert_toSecond = hour * 60 * 60;

  min_second.push(convert_toSecond);

  return min_second;
}

const result = convertMinute_second(1);
console.log(result);
