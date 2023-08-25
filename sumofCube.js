// Find sum of cubes

function sumofCube(a, b) {
  const sum = (a + b) * (a * a - a * b + b * b);

  return sum;
}

const result = sumofCube(2, 3);
console.log(result);
