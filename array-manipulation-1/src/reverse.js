/* exported reverse */
function reverse(array) {
  var reverseArray = [];
  for (var i = 0; i < array.length; i++) {
    reverseArray.unshift(array[i]);
  }
  return reverseArray;
}
