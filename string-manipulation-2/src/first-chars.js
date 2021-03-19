/* exported firstChars */
function firstChars(length, string) {
  const newString = [];
  for (let i = 0; i < length; i++) {
    newString.push(string.charAt(i));
  }
  return newString.join('');
}
