var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        credits: './js/credits.js',
        index: './js/index.js'
    },
    output: {
		path: path.resolve('./dist/'),
		filename: 'js/[name].bundle.js',
		publicPath: '/'
	},
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].bundle.css',
                            context: 'css/',
                            outputPath: 'css/',
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: '/',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          "$":"jquery",
          "jQuery":"jquery",
          "window.jQuery":"jquery"
        })
    ]
};