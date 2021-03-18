/* exported difference */
function difference(first, second) {
  const concatArray = first.concat(second);
  const newArray = [];
  for (let i = 0; i < concatArray.length; i++) {
    if (newArray.includes(concatArray[i])) {
      const index = newArray.indexOf(concatArray[i]);
      newArray.splice(index, 1);
      continue;
    }
    newArray.push(concatArray[i]);
  }
  return newArray;
}
