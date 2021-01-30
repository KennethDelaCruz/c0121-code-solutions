/* exported capitalize */
function capitalize(word) {
  var newWord = [];

  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord.push(word[i].toUpperCase());
    } else {
      newWord.push(word[i].toLowerCase());
    }
  }
  return newWord.join('');
}
