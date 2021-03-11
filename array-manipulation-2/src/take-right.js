/* exported takeRight */
function takeRight(array,count) {
  var take = array.length - count;
  var newArray =[];
  if(array.length === 0){
    return array;
  }
  for (var i = take; i < array.length; i++){
    newArray.push(array[i]);
  }
  return newArray;
}
