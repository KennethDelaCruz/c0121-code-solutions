/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {

    if (array[i] === null || array[i] === false || array[i] === undefined || array[i] === 0 || array[i] === '' || Object.is(array[i], NaN)) {
      continue;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
