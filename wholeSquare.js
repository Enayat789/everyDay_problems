// Create a function, which will calculate (  a + b)2 ( whole square). When we pass a and b parameters.

function find_WholeSquare(num1, num2) {
  var wholeSquare_result = [];

  let a = num1;
  b = num2;
  const sum = a * a + b * b + 2 * a * b;
  wholeSquare_result.push(sum);

  return wholeSquare_result;
}

const result = find_WholeSquare(2, 4);
console.log(result);
