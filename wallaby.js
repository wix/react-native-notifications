const babelOptions = require('./package.json').babel;

module.exports = function (wallaby) {
  return {
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    files: [
      'package.json',
      'lib/src/**/*.js',
      'lib/src/**/*.ts',
      'lib/src/**/*.tsx'
    ],

    tests: [
      'test/**/*.spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel(babelOptions),
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        jsx: 'React'
      })
    },

    setup: (w) => {
      w.testFramework.configure(require('./package.json').jest);
    }
  };
};
