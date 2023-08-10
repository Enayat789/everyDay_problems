// Make a  Js function that can perform addition, subtraction, and multiplication of two numbers:

function add_subtrt_multiply(num1, num2) {
  var all_result = [];
  var a = num1;
  b = num2;
  for (let i = 1; i <= 1; i++) {
    const sum = a + b;
    all_result.push("Addition of " + a + " + " + b + " is " + sum);
    for (let j = 0; j < 1; j++) {
      const subtract = a - b;
      all_result.push("Subtraction of " + a + " - " + b + " is " + subtract);
      for (let k = 0; k < 1; k++) {
        const multiply = a * b;
        all_result.push(
          "Multiplication of " + a + " x " + b + " is " + multiply
        );
      }
    }
  }

  return all_result;
}

const result = add_subtrt_multiply(2, 4);
console.log(result);
