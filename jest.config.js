'use strict'; // eslint-disable-line

module.exports = {
  // preset: '@wearegenki/test',
  // globalSetup: '',
  // globalTeardown: '',
  // testEnvironment: '',
  // setupTestFrameworkScriptFile: '',
  // transform: {},

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
