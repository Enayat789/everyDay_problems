// Create a function that will return the maximum and minimum number from an array

const numbers = [11, 22, 44, 99999, 55, 5, 102, 222, 324, 21];

function maximum_num(numbers) {
  let max_num = numbers[0];
  let min_num = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const all_num = numbers[i];

    if (min_num > all_num) {
      min_num = all_num;
    }

    if (all_num > max_num) {
      max_num = all_num;
    }
  }
  return [
    "The minimum number is: " + min_num,
    "The maximum number is : " + max_num,
  ];
}

const result = maximum_num(numbers);
console.log(result);