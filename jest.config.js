'use strict'; // eslint-disable-line

module.exports = {
  transform: {},
  testPathIgnorePatterns: [
    '/coverage/',
    '/node_modules/',
    '/\\.vscode/',
    '/\\.cache/',
    '/\\.git/',
  ],
  collectCoverageFrom: ['<rootDir>/index.js'],
  coverageDirectory: '<rootDir>/test/coverage',
};
