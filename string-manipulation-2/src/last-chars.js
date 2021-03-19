/* exported lastChars */
function lastChars(length, string) {
  const newString = [];
  for (let i = string.length - length; i < string.length; i++) {
    newString.push(string.charAt(i));
  }
  return newString.join('');
}
