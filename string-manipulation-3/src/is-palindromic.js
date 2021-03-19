/* exported isPalindromic */
function isPalindromic(string) {
  const split = string.split('');
  const foward = [];
  const backward = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i] === ' ') {
      continue;
    } else {
      foward.push(split[i]);
      backward.unshift(split[i]);
    }
  }
  if (foward.join('') === backward.join('')) {
    return true;
  } else {
    return false;
  }
}
