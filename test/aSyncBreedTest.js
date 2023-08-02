const breedDetailsFromFiles = require('../asyncBreeds');

const assert = require('chai').assert;

describe('Test for breedDetailsFromFile:', () => {
  it('returns details for bombay', (done) => {
    breedDetailsFromFiles('bombay', (bombay) => {
      const expected = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(bombay, expected);
      done();
    })
  });
  it('returns undefined if no matching breed is found', (done) => {
    breedDetailsFromFiles('orange', (orange) => {
      const expected = undefined;
      assert.equal(orange, expected);
      done();
    })
  })
})