/* exported oddOrEven */
function oddOrEven(numbers) {
  const numbah = [];
  let i = 0;
  while (i <= numbers.length) {
    if (numbers[i] % 2 === 0) {
      numbah.push('even');
    } else if (numbers[i] % 2 === 1) {
      numbah.push('odd');
    }
    i++;
  }
  return numbah;
}
