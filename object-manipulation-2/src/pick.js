/* exported pick */
function pick(source,keys) {
  var newObject = {};
  keys.forEach(function(key){
    if(source[key] === undefined){
      return
    }
    newObject[key]=source[key];
  });
  return newObject

}
