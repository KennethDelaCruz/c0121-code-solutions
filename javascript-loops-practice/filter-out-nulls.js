/* exported filterOutNulls */
function filterOutNulls(values) {
  let i = 0;
  const noNulls = [];
  while (i <= values.length) {
    if (values[i] != null) {
      noNulls.push(values[i]);
    }
    i++;
  }
  return noNulls;
}
