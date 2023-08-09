// .FizzBuzz: Write a program that prints numbers from 1 to 100,
// but for multiples of 3, print "Fizz," for multiples of 5,
//print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."

function printNumbers_hundred(arrayLength) {
  const forFizz = [];
  const forBuzz = [];
  const forFizzBuzz = [];

  for (let i = 1; i <= arrayLength; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      forFizzBuzz.push(i);
    } else if (i % 3 === 0) {
      forFizz.push(i);
    } else if (i % 5 === 0) {
      forBuzz.push(i);
    }
  }
  return { forFizz, forBuzz, forFizzBuzz };
}

const result = printNumbers_hundred(100);

console.log(result);
