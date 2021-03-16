/* exported zip */
function zip(first, second) {
  const newArray = [];
  const length = Math.min(first.length, second.length);
  for (let i = 0; i < length; i++) {
    const zipArray = [];
    zipArray.push(first[i]);
    zipArray.push(second[i]);
    newArray.push(zipArray);
  }
  return newArray;
}
