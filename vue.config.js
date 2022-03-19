const path = require('path');//引入path模块
// const TerserPlugin = require('terser-webpack-plugin')

const CompressionPlugin = require('compression-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
          
            .set('@', resolve('./src'))//根据目录的层级来决定，也可以自行设
           
            .set('views', resolve('./src/views'))
            .set("public",resolve('./public'))
       
    },
    devServer: {
        port: '8081', // 设置端口号
        proxy: {
            '/': {
                target: 'http://wancj.top/', //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
                pathRewrite: {

                }
            }
        },
    },
    //gzip y'p
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip', // 使用gzip压缩
                test: /\.js$|\.html$|\.css$/, // 匹配文件名
                filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
                minRatio: 1, // 压缩率小于1才会压缩
                threshold: 2000, // 对超过10k的数据压缩
                deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供        非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
            }),
        ],
    }




}