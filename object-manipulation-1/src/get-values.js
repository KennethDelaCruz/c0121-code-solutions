/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (var i in object) {
    var iValue = object[i];
    newArray.push(iValue);
  }
  return newArray;
}
