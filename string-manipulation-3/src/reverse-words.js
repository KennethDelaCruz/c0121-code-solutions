/* exported reverseWords */
function reverseWords(string) {
  const stringSplit = string.split(' ');
  const reverseString = [];

  for (let i = 0; i < stringSplit.length; i++) {
    const word = stringSplit[i].split('');
    const reverseWord = [];
    for (let j = 0; j < word.length; j++) {
      reverseWord.unshift(word[j]);
    }
    reverseString.push(reverseWord.join(''));
  }

  return reverseString.join(' ');
}
