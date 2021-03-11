/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let i = 0;
  const suffixArray = [];
  while (i < words.length) {
    suffixArray.push(words[i] + suffix);
    i++;
  }
  return suffixArray;
}
