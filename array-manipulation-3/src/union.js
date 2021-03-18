/* exported union */
function union(first, second) {
  const concatArray = first.concat(second);
  const newArray = [];

  for (let i = 0; i < concatArray.length; i++) {
    if (newArray.includes(concatArray[i])) {
      continue;
    } else {
      newArray.push(concatArray[i]);
    }
  }

  return newArray;
}
