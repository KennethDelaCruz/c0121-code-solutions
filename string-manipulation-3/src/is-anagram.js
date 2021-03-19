/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const firstSplit = firstString.split(' ').join('').split('');
  const secondSplit = secondString.split(' ').join('').split('');
  const length = Math.max(firstString.length, secondString.length);
  for (let i = 0; i < length; i++) {
    if (firstSplit.includes(secondSplit[i])) {
      const index = firstSplit.indexOf(secondSplit[i]);
      firstSplit.splice(index, 1);
      if (firstSplit.length === 0) {
        return true;
      }
    } else {
      return false;
    }
  }
}
