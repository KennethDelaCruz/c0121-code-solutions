/* exported capitalizeWords */
function capitalizeWord(word) {
  var lower = word.toLowerCase();
  var newWord = []
  var splitWord = word.split('');
  if (lower === 'javascript'){
    return 'JavaScript';
  }

  for (var i = 0; i < splitWord.length; i++){
    if (i === 0){
      var capital = splitWord[i].toUpperCase();
      newWord.push(capital);
    } else {
      var lowerLetter = splitWord[i].toLowerCase();
      newWord.push(lowerLetter)
    }
  }
  return newWord.join('')
}
