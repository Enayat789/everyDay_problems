// Check if a triangle is equilateral, scalene, or isosceles

function findTrianglesTypes(side1, side2, side3) {
  let triangleType;

  if (side1 == side2 && side1 == side3) {
    triangleType = "this is Equilateral triangle";
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    triangleType = "this is Isosceles triangle";
  } else {
    triangleType = "this is Scalene triangle";
  }

  return triangleType;
}

const result = findTrianglesTypes(4, 3, 3);
console.log(result);
