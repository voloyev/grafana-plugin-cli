const webpack = require('webpack');
const path = require('path');


module.exports = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/,
        use: 'raw-loader'
      },
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          plugins: ['syntax-dynamic-import'],
          presets: [
            [
              'env',
              {
                modules: false
              }
            ]
          ]
        },
        test: /\.js$/
      }
    ]
  },

  externals: [
    function (context, request, callback) {
      if(request[0] !== '.') {
        return callback(null, `require('${request}')`);
      }
      callback();
    }
  ],

  resolve: {
    extensions: ['.ts', '.ejs', '.js']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  
  entry: './src/index.ts',


  
};
