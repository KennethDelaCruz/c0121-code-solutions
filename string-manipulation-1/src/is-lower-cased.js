/* exported isLowerCased */
function isLowerCased(word) {
  var ifTrue = null;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      ifTrue = true;
    } else {
      ifTrue = false;
      break;
    }
  }

  return ifTrue;
}
