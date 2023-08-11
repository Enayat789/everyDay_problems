//  Convert Minutes into Seconds

function convertMinute_second(minute) {
  const min_second = [];

  //   const min = 3;
  const convert_toSecond = minute * 60;

  min_second.push(convert_toSecond);

  return min_second;
}

const result = convertMinute_second(4);
console.log(result);
