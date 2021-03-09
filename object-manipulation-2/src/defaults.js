/* exported defaults */
function defaults(target, source){
  var newObject = target;
  for (key in source){
    var trueFalse = target.hasOwnProperty(key);
    console.log(key);
    console.log(trueFalse);
    if(trueFalse === false){
      newObject[key] = source[key];
    }

  }
  return newObject;
}
