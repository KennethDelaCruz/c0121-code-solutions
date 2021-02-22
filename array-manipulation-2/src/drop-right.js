/* exported dropRight */
function dropRight(array,count) {
  var takeRight = array.length - count;
  var newArray = [];
  for(var i = 0; i < takeRight ; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
