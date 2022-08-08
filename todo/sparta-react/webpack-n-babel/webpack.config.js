// webpack.config.js
const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
		mode: "development",  // 배포된환경  production:개발환경  
    entry: {
        main: './src/index.js'  //파일을 묶기위한 시작점
    },
    output: {    // 번들된 파일들의 결과물
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
	  resolve: { extensions: ["*", ".js", ".jsx"] },  //
    stats: { children: true },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(png|jpg|svg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: { loader:"babel-loader"},
            }
        ]
    }, 
plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-react-start-kit',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
    ]
    
}; 