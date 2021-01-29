/* exported countdown */
function countdown(number) {
  const count = [];
  while (number >= 0) {
    count.push(number);
    number -= 1;
  }
  return count;
}
