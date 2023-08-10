// Create a function, which will calculate (  a + b)2 ( whole square). When we pass a and b parameters.

function find_WholeSquare(num1, num2) {
  const wholeSquare_result = [];

  const sum = num1 * num1 + num2 * num2 + 2 * num1 * num2;
  wholeSquare_result.push(sum);

  return wholeSquare_result;
}

const result = find_WholeSquare(2, 4);
console.log(result);
