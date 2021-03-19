/* exported titleCase */
function titleCase(title) {
  const titleString = title.split(' ');
  const newTitle = [];
  const exceptions = ['and', 'or', 'nor', 'but', 'a', 'the', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < titleString.length; i++) {
    const lower = titleString[i].toLowerCase();

    if (exceptions.includes(lower) && !titleString[i - 1].includes(':')) {
      newTitle.push(titleString[i]);
    } else if (lower.includes('-')) {
      const dashArray = titleString[i].split('-');
      const dashArrayCapital = [];
      dashArray.forEach(string => {
        const $word = string.charAt(0).toUpperCase() + string.slice(1);
        dashArrayCapital.push($word);
      });
      newTitle.push(dashArrayCapital.join('-'));
    } else if (lower === 'javascript') {
      newTitle.push('JavaScript');
    } else if (lower === 'javascript:') {
      newTitle.push('JavaScript:');
    } else if (lower === 'api') {
      newTitle.push('API');
    } else {
      const capitalizedWord = lower.charAt(0).toUpperCase() + lower.slice(1);
      newTitle.push(capitalizedWord);
    }
  }
  return newTitle.join(' ');
}
