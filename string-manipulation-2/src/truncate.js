/* exported truncate */
function truncate(length, string) {
  var splitString = string.split('');
  var dots = '...';
  var newString = [];

  for (var i = 0; i < length; i++) {
    newString.push(splitString[i]);
  }

  newString.push(dots);

  var joined = newString.join('');
  return joined;
}
