/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var part = [];
  for (var i = 0; i < array.length; i++) {
    part.push(array[i]);
    if(part.length === size){
      newArray.push(part);
      part = [];
    } else if( i === array.length - 1){
      newArray.push(part);
    }

  }
  return newArray;
}
