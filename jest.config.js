module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native)/)',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  roots: [
    '<rootDir>/node_modules/',
    '<rootDir>/lib/dist/'
  ],
  collectCoverageFrom: [
    'lib/dist/**/*.js',
    'lib/src/**/*.js',
    'integration/**/*.js',
    '!lib/dist/index.js',
    '!lib/dist/Notifications.js',
    '!lib/dist/NotificationsIOS.js',
    '!lib/dist/NotificationsAndroid.js',
    '!lib/dist/adapters/**/*',
    '!lib/dist/interfaces/**/*',
    '!lib/dist/**/*.test.*',
    '!integration/**/*.test.*',
    '!integration/*.test.*'
  ],
  resetMocks: true,
  resetModules: true,
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'html'
  ],
  testEnvironment: 'node',
};
