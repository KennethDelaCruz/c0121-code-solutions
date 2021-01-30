/* global expect, oddOrEven */

describe('oddOrEven(array)', function () {

  beforeEach(function () {
    expect(oddOrEven).to.be.a('function');
  });

  it('takes [1, 2, 3] and returns ["odd", "even", "odd"]', function () {
    const input = [1, 2, 3];
    const output = oddOrEven(input);
    expect(output).to.deep.equal(['odd', 'even', 'odd']);
  });

  it('takes [100, 121, 7] and returns ["even", "odd", "odd"]', function () {
    const input = [100, 121, 7];
    const output = oddOrEven(input);
    expect(output).to.deep.equal(['even', 'odd', 'odd']);
  });

  it('takes [2, 2, 2, 2] and returns ["even", "even", "even", "even"]', function () {
    const input = [2, 2, 2, 2];
    const output = oddOrEven(input);
    expect(output).to.deep.equal(['even', 'even', 'even', 'even']);
  });

});
