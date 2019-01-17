var path = require('path');

module.exports = {
  debug: false,
  // verbose: true,
  modulesDirectories: [
    path.resolve(__dirname, '..', 'node_modules'),
    '../client',
  ],
  assets: {
    css: {
      extensions: ['css'],
    },
    images: {
      extensions: ['png', 'jpg','jpeg', 'gif', 'ico','svg'],
    },
  },
};
