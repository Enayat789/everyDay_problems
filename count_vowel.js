// Return the number of vowels in a string

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function count_vowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    // console.log(string[i]);
    if (vowels.indexOf(string[i]) !== -1) {
      count += 1;
    }
  }

  return count;
}

const result = count_vowels("Enayatullah");
console.log(result);
