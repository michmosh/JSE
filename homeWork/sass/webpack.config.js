module.exports = {
    entry: ['./js/app.ts','./css/app.scss'],
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [
            { //ts loader for webpack
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                use:  'css-loader'  
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};