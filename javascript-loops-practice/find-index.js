/* exported findIndex */
function findIndex(array, value) {
  let i = 0;
  let foundIndex = -1;
  while (i <= array.length) {
    if (array[i] === value) {
      foundIndex = i;
      break;
    }
    i++;
  }
  return foundIndex;
}
