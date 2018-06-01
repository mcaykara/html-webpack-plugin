const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


const PATHS = {
    app: path.join(__dirname, "app"),
    build: path.join(__dirname, "build")
};


// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
];

// the clean options to use
let cleanOptions = {
    root: __dirname,
    //exclude: ['shared.js'],
    verbose: true,
    dry: false
};


module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({
            title: "Webpack demo"
        })
    ]
};