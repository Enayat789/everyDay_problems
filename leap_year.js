// Find Year is leap or Not

function leap_year(year) {
  let leap_or_not;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    // console.log("leap year");
    leap_or_not = "This is leap Year";
  } else {
    leap_or_not = "This is Not a leap Year";
  }

  return leap_or_not;
}

const result = leap_year(2020);
console.log(result);
