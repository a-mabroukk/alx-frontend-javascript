export default function appendToEachArrayValue(array, appendString) {
  const arrayy = [];
  for (const idx of array) {
    arrayy.push(appendString + idx);
  }

  return arrayy;
}
