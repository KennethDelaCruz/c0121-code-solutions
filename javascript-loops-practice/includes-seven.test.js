/* global expect, sinon, includesSeven */

describe('includesSeven(array)', function () {

  beforeEach(function () {
    expect(includesSeven).to.be.a('function');
  });

  it('takes [1, 2, 3, 4, 5, 6, 7] and returns true', function () {
    const input = noCheating([1, 2, 3, 4, 5, 6, 7]);
    const output = includesSeven(input);
    expect(output).to.equal(true);
  });

  it('takes [77, 200, 700, \'7\'] and returns false', function () {
    const input = noCheating([77, 200, 700, '7']);
    const output = includesSeven(input);
    expect(output).to.equal(false);
  });

  it('takes [] and returns false', function () {
    const input = noCheating([]);
    const output = includesSeven(input);
    expect(output).to.equal(false);
  });

  function noCheating(array) {
    sinon.stub(array, 'indexOf').throws(
      'No Cheating!',
      'Do not use Array.prototype.indexOf in your implementation!'
    );
    sinon.stub(array, 'includes').throws(
      'No Cheating!',
      'Do not use Array.prototype.includes in your implementation!'
    );
    sinon.stub(array, 'findIndex').throws(
      'No Cheating!',
      'Do not use Array.prototype.findIndex in your implementation!'
    );
    return array;
  }

});
