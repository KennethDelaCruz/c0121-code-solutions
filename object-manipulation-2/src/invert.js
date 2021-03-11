/* exported invert */
function invert(source){
  var newObject = {}
  for (key in source){
    var prop = source[key];
    var value = key;
    newObject[prop] = key;
  }
  return newObject
}
