/* exported includesSeven */
function includesSeven(array) {
  let i = 0;
  let filter = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      filter = true;
      break;
    }
  }
  return filter;
}
