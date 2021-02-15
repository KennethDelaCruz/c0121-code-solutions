/* exported calculator */
var calculator = {
  add: function (x, y) {
    var addedNumbers = x + y;
    return addedNumbers;
  },

  subtract: function (x, y) {
    var subtractNumbers = x - y;
    return subtractNumbers;
  },

  multiply: function (x, y) {
    var product = x * y;
    return product;
  },

  divide: function (x, y) {
    var divide = x / y;
    return divide;
  },

  square: function (x) {
    var square = x * x;
    return square;
  },

  sumAll: function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  },

  getAverage: function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    var average = sum / array.length;
    return average;
  }
};
