/* exported flatten */
function flatten(array) {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
