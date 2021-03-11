/* exported getWords */
function getWords(string) {
  if (string === '') {
    string = [];
    return string;
  } else {
    return string.split(' ');
  }
}
