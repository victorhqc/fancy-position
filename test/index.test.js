/* eslint import/no-extraneous-dependencies: 0*/
const expect = require('expect.js');
const deepFreeze = require('deep-freeze');

const {
  getRandom,
  isWordAlreadyUsed,
  accumulateValidWords,
  generateTechPosition,
} = require('../src');


const seniorities = [
  'Senior',
  '',
];

const titles = [
  'Backend',
];

const specialization = [
  'Engineer',
  'Backend',
];

const wordSources = { seniorities, titles, specialization };
deepFreeze(wordSources);

describe('getRandom', () => {
  it('Should return a random element from an array', () => {
    const arr = ['foo', 'bar'];
    deepFreeze(arr);

    expect(getRandom(arr)).to.match(/foo|bar/gi);
  });

  it('Should ignore the banned elements given to it', () => {
    const arr = ['foo', 'bar'];
    deepFreeze(arr);
    const banned = ['foo'];

    expect(getRandom(arr, banned)).to.be('bar');
  });
});

describe('isWordAlreadyUsed', () => {
  it('Should return true if word is already used', () => {
    const word = 'foo';
    const techPosition = 'some fancy foo position';

    expect(isWordAlreadyUsed({ techPosition, word })).to.be.ok();
  });

  it('Should return false if word is not being used', () => {
    const word = 'bar';
    const techPosition = 'some fancy foo position';

    expect(isWordAlreadyUsed({ techPosition, word })).to.not.be.ok();
  });

  it('Should return false if word is \'\'', () => {
    const word = '';
    const techPosition = 'some fancy foo position';

    expect(isWordAlreadyUsed({ techPosition, word })).to.not.be.ok();
  });
});

describe('accumulateValidWords', () => {
  it('Should return a valid set of words', () => {
    const words = accumulateValidWords(wordSources, {
      techPosition: 'Backend',
      source: 'specialization',
    });

    expect(words).to.be('Backend Engineer');
  });
});

describe('generateTechPosition', () => {
  it('Should return a valid tech position', () => {
    const regexp = new RegExp(/Senior Backend Engineer|Backend Engineer/gi);

    expect(generateTechPosition(wordSources)).to.match(regexp);
  });
});
