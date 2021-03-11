module.exports = object => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};
