const path = require('path');

module.exports={
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build')
  }
}

/**
 *  NOTE :
 *  => path.join() documentation : https://nodejs.org/api/path.html#path_path_join_paths
 *
 */