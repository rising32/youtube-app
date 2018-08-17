module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './src/bundle.js'
  },
  resolve: {
    alias: {
      searchBar: __dirname + '/src/components/searchBar.js',
      VideoListItem: __dirname + '/src/components/videoListItem.js',
      VideoDetail: __dirname + '/src/components/videoDetail.js',
      // About: __dirname + '/src/components/About.jsx'
    },
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
