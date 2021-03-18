/* exported intersection */
function intersection(first, second) {
  const catArray = first.concat(second);
  const newArray = [];
  for (let i = 0; i < catArray.length; i++) {
    const index = catArray[i];
    if (first.includes(index) && second.includes(index)) {
      if (newArray.includes(index)) {
        continue;
      }
      newArray.push(index);
    }
    continue;
  }
  return newArray;
}
