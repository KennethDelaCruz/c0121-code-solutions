/* exported ransomCase */
function ransomCase(string) {
  const lowercase = string.toLowerCase();
  const stringArray = lowercase.split('');
  const newWord = [];

  for (let i = 0; i < stringArray.length; i++) {
    const evenOdd = i % 2;
    if (evenOdd === 1) {
      const capital = stringArray[i].toUpperCase();
      newWord.push(capital);
    } else {
      const lowered = stringArray[i].toLowerCase();
      newWord.push(lowered);
    }

  }
  return newWord.join('');
}
