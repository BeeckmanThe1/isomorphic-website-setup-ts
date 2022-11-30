const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/server/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './../../build'),
    },
    "resolve": {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }
};