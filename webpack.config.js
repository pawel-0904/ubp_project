const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");


let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если
                                             // при запуске вебпака было указано --mode=production
    mode = 'production';
}

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    devtool: 'source-map',
    // devServer: {
    //     hot: true, // Включает автоматическую перезагрузку страницы при изменениях
    // },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        static: {
            directory: path.join(__dirname, './build'),
        },
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './public/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
            favicon: path.resolve(__dirname, './public/favicon.ico'),
            manifest: path.resolve(__dirname, './public/manifest.json'),
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new ReactRefreshWebpackPlugin(),
        // new webpack.DefinePlugin()

        // new InterpolateHtmlPlugin({
        //     PUBLIC_URL: 'public' // can modify `static` to another name or get it from `process`
        // })
        // new CopyWebpackPlugin({
        //     // patterns: [
        //     //     // relative path is from src
        //     //     path.resolve(__dirname, './public/favicon.ico'),
        //     //     { from: './public/favicon.ico' }, // <- your path to favicon
        //     // ]
        // })

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // {
            //     test: /\.(png|jpe?g|gif|icons|webp|ico)$/i,
            //     type: mode === 'production' ? 'assets' : 'assets/resource', // В продакшен режиме
            //     // изображения размером до 8кб будут инлайнится в код
            //     // В режиме разработки все изображения будут помещаться в dist/assets
            // },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'assets/resource',
            },

            {  test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            },

            {
                test: /\.module\.(scss|css)$/,
                sideEffects: true,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                            },
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: `postcss.config.js`
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /\.module\.(scss|css)$/,
                use: [
                    {
                        // loader: MiniCssExtractPlugin.loader,
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
        ],
    }

}