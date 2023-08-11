// Create a function that will return the maximum number from an array.

const numbers = [11, 22, 44, 99999, 55, 102, 222, 324,21];

function maximum_num(numbers) {
  let max_num = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const all_num = numbers[i];

    if (all_num > max_num) {
      max_num = all_num;
    }
  }
  return max_num;
}

const result = maximum_num(numbers);
console.log(result);
