// Create a function that will add two positive numbers of indefinite size.
// The numbers are received as strings and the result should be also provided as string.

function add_string(string1, string2) {
  const added_string = [];

  const sum = "This is the sum of two string numbers: " + string1 + string2;
  added_string.push(sum);

  return added_string;
}

const result = add_string(4, 8);
console.log(result);
