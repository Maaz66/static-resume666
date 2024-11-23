const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js', // You can change this to the path of your entry file

  // Output bundle file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'  // This will be your bundled JavaScript file
  },

  // Mode for the build (development or production)
  mode: 'development',  // Change to 'production' for production builds
};
