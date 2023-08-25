// find volume of a cone

function volumeofCone(radius, height) {
  const volume = 3.14 * radius * radius * (height / 3);

  return volume;
}

const result = volumeofCone(2, 3);
console.log(result);
