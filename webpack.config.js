// webpack.config.js

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                 }
            }
        ]
    },
    devServer: {
        port: 3000
    }
};
