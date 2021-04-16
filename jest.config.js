// jest.config.js
module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs'],
  testMatch: ['**/__tests__/**/*.?(m)js?(x)', '**/?(*.)(spec|test).?(m)js?(x)'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/index.js', '!src/app.js', '!src/server.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  transformIgnorePatterns: ['node_modules/?!(shared-express)'],
  coverageReporters: ['text', 'html'],
}
