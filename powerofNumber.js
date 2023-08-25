// Write a JS code to find the power of a number using for loop

function findPower(num, pow) {
  let power = 1;

  for (let i = 0; i < pow; i++) {
    // console.log(i);
    power = power * num;
  }

  return power;
}

const result = findPower(4, 5);
console.log(result);
