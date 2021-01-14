const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    {loader: 'file-loader'}
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/, // Per i file con ext .js
                exclude: /node_modules/, // Esclusa la folder /node_modules
                use: {
                    loader: 'babel-loader', // Interprete Babel
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime', // Extra funcs come async/await
                        ]
                    }
                }
            },
        ],
    },
    plugins: [new VueLoaderPlugin()]
}