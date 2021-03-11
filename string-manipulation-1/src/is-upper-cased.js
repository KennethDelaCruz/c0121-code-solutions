/* exported isUpperCased */
function isUpperCased(word) {
  var ifTrue = null;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      ifTrue = true;
    } else {
      ifTrue = false;
      break;
    }
  }

  return ifTrue;
}
