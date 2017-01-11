/**
 * Created by lenovo on 2017/1/10.
 */
module.exports = {
    entry: './app.js',  //入口文件
    output: {
        filename: 'bundle.js'
    },  //这些功能起始在命令行里也可以操作，但是写在这个配置文件这里不容易出错且简单
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};

