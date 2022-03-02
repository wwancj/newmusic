const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports={
    lintOnSave:false,
    chainWebpack:(config)=>{
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@',resolve('./src'))//根据目录的层级来决定，也可以自行设
            // .set('components',resolve('./src/components'))
            // .set('views',resolve('./src/views'))
            // .set('assets',resolve('./src/assets'))
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
    }


}