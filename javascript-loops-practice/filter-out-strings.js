/* exported filterOutStrings */
function filterOutStrings(values) {
  const noStrings = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
