/* exported reverseWord */
function reverseWord(word) {
  var reverseWord = [];
  for (var i = 0; i < word.length; i++) {
    reverseWord.unshift(word[i]);
  }
  return reverseWord.join('');
}
