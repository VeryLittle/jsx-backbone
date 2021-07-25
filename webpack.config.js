const path = require('path');

module.exports = {
    mode: 'production', // production development
    entry: './src/index.js',
    output: {
        filename: 'diffDom.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
};