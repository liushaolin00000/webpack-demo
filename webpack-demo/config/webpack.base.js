const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
//引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // 用对象的方式配置多个入口
    entry: {
        main:'./src/main.js'
    },
    output: {
        // 修改输出路径和文件名，[name]是动态的，读取entry的属性
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    // + 提取公共模块配置
    optimization: {
        splitChunks: {
            chunks: 'all' // 提取所有文件的共同模块
        }
    },
    //模块解释
    resolve:{
        //提供别名，方便查找，模块的路径
        alias:{
            '@':path.resolve(__dirname,'../src')
        },
        //忽略扩展名
        extensions:['.js','.json','.vue']
    },
    // 模块加载器
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        publicPath: "./images/",
                        outputPath: "images"
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
			},
        ]
    },

    plugins: [
        // 提取css样式到单独文件
        new ExtractTextPlugin("style/style2.css"),

        // 每次构建前清除dist目录
        new CleanWebpackPlugin(),

        // 自动生成index.html到dist
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new VueLoaderPlugin()  //vue加载器插件
    ]
}