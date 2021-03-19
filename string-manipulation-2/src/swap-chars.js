/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const stringArray = string.split('');
  const newString = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (i === firstIndex) {
      newString.push(stringArray[secondIndex]);
      continue;
    } else if (i === secondIndex) {
      newString.push(stringArray[firstIndex]);
      continue;
    }
    newString.push(stringArray[i]);
  }
  return newString.join('');
}
