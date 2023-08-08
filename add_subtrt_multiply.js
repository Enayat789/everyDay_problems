// Make a  Js function that can perform addition, subtraction, and multiplication of two numbers:

function add_subtrt_multiply(num1, num2) {
  var a = num1;
  b = num2;
  for (let i = 1; i <= 1; i++) {
    const sum = a + b;
    console.log("Addition of " + a + " + " + b + " is " + sum);
    for (let j = 0; j < 1; j++) {
      const subtract = a - b;
      console.log("Subtraction of " + a + " - " + b + " is " + subtract);
      for (let k = 0; k < 1; k++) {
        const multiply = a * b;
        console.log("Multiplication of " + a + " x " + b + " is " + multiply);
      }
    }
  }
}

add_subtrt_multiply(2, 4);
