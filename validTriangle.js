// Check whether a triangle is valid or not if the sides are given.

function validorNotTriangle(s1, s2, s3) {
  let valid_or_not;

  if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
    valid_or_not = "Triangle is Not Valid!";
  } else {
    valid_or_not = "Triangle is Valid!!!";
  }

  return valid_or_not;
}

const result = validorNotTriangle(1, 10, 12);
console.log(result);
