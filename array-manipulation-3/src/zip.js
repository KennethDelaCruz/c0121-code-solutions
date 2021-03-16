/* exported zip */
function zip(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!first[i] || !second[i]) {
      break;
    }
    const zipArray = [];
    zipArray.push(first[i]);
    zipArray.push(second[i]);
    newArray.push(zipArray);
  }
  return newArray;
}
