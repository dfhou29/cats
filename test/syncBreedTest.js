const breedDetails = require('../syncBreeds');

const assert = require('chai').assert;

describe('Test for breedDetails', () => {
  it('returns details for Balinese', () => {
    const expected = 'Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.';
    const actual = breedDetails('Balinese');
    assert.equal(actual, expected);
  });
  it('returns details for Bombay', () => {
    const expected = 'The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver\'s shoulder.';
    const actual = breedDetails('Bombay');
    assert.equal(actual, expected);
  });
  it('returns undefined if no argument is passed into breedDetails', () => {
    const expected = undefined;
    const actual = breedDetails();
    assert.equal(actual, expected);
  });
})