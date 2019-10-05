const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: "development",
    
    // 生成map映射文件
    devtool: "source-map",
	
    // 开发服务器配置
    devServer: {
        port: 8000, // 默认端口是8080
      //简化控制台打印的配置，只打印报错信息
        stats: 'errors-only'  
   },
})