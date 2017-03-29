const path = require('path');
const config = require('./config');

module.exports = {
  resolve: {
    modules: [
      path.resolve('.'),
      'node_modules',
    ],
  },
  config,
}
