module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: 'src',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testPathIgnorePatterns: ['<rootDir>/svgTransform.js'],
  coveragePathIgnorePatterns: ['<rootDir>/svgTransform.js'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
}
