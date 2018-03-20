const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }
        }]
    },
    // mode: 'development',
};

// module.exports = {
//     output: {
//         filename: 'bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js)$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: [
//                         ['latest', { modules: false }],
//                     ],
//                 },
//             },
//         ],
//     },
// };