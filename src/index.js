const curry = require('lodash/curry');

const getRandom = (arr, banned = []) => {
  const availableArr = arr.filter(ar => banned.indexOf(ar) < 0);

  return availableArr[
    Math.floor(Math.random() * availableArr.length)
  ];
};

const isWordAlreadyUsed = ({ techPosition, word }) => {
  if (!word) { return false; }

  const regexp = new RegExp(word, 'gi');

  return techPosition.search(regexp) !== -1;
};

const accumulateValidWords = (wordSources, { techPosition, source, bannedWords }) => {
  const word = getRandom(wordSources[source], bannedWords);
  const isUsed = isWordAlreadyUsed({ techPosition, word });

  if (isUsed) {
    return accumulateValidWords(wordSources, {
      techPosition,
      source,
      // I wish Node.js supported spread operator by now
      bannedWords: (bannedWords || []).concat([word]),
    });
  }

  return `${techPosition} ${word}`;
};

const generateTechPosition = (wordSources) => {
  const sources = ['seniorities', 'titles', 'specialization'];
  const curriedAccumulator = curry(accumulateValidWords)(wordSources);

  const reduce = (techPosition, source) => curriedAccumulator({ techPosition, source });

  return sources.reduce(reduce, '').trim();
};

module.exports = {
  getRandom,
  isWordAlreadyUsed,
  accumulateValidWords,
  generateTechPosition,
};
