/* exported countdown */
function countdown(number) {
  const count = [];
  while (number >= 0) {
    count.push(number);
    number--;
  }
  return count;
}
