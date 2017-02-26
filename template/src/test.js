// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')
require('babel-polyfill')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./', true, /\/docs\/test_.*\.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('./', true, /.*\.vue$)/)
// srcContext.keys().forEach(srcContext)
