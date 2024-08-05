export default function appendToEachArrayValue(array, appendString) {
    arrayy = []
    for (var idx of array) {
      arrayy.push(appendString + idx);
    }
  
    return arrayy;
  }
