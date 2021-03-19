/* exported numVowels */
function numVowels(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'A') {
      counter++;
    } else if (string.charAt(i) === 'e' || string.charAt(i) === 'E') {
      counter++;
    } else if (string.charAt(i) === 'i' || string.charAt(i) === 'I') {
      counter++;
    } else if (string.charAt(i) === 'o' || string.charAt(i) === 'O') {
      counter++;
    } else if (string.charAt(i) === 'u' || string.charAt(i) === 'U') {
      counter++;
    }
  }
  return counter;
}
