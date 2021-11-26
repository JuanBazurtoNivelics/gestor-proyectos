const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    resolve:{
        extensions:['.js']
    },
    module:{rules:[{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },

    {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader,
            'css-loader',
            'stylus-loader'],

    },{
        test:/\.png/,
        type:'asset/resource'
    },
    {
        test: /\.svg$/,
        loader: 'svg-react-loader'
    }]},
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename:'assets/[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname,"src","assets/images"),
                    to:"assets/images"
                }
            ]
        }),
    ]
}