export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
  };
  