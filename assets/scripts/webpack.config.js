const path = require('path');

module.exports = {
    entry: "./index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};