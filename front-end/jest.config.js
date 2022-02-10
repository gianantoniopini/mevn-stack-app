module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**', '!**/__tests__/**'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      lines: 82
    }
  },
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/../shared/src/$1'
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
};
