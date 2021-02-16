/* exported ransomCase */
function ransomCase(string){
  var lowercase = string.toLowerCase();
  var something = lowercase.split('');
  var newWord = [];
  console.log(something);

  for (var i = 0; i < something.length; i++)
  var evenOdd = i % 2;
  if (evenOdd === 0) {
  var capital = something[i].toUpperCase();
    newWord.push(capital);
  } else {
  var lowered = something[i].toLowerCase();
    newWord.push(lowered);
  }

  return newWord.join('')

}
