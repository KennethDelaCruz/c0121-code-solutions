/* exported capitalizeWords */
function capitalizeWords(string) {
  const stringArray = string.split(' ');
  const newString = [];
  for (let i = 0; i < stringArray.length; i++) {
    const newWord = stringArray[i].split('');
    const pushWord = [];
    for (let j = 0; j < newWord.length; j++) {
      if (j === 0) {
        const capital = newWord[j].toUpperCase();
        pushWord.push(capital);
      } else {
        const lower = newWord[j].toLowerCase();
        pushWord.push(lower);
      }
    }
    newString.push(pushWord.join(''));
  }

  return newString.join(' ');
}
