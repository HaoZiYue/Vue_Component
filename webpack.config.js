const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    // 模式: 生产环境
    mode: 'development',
    // 入口
    entry: {
      app: path.resolve(__dirname, 'src/index.js')
    },
    // 出口(打包生成js)
    output: {
      filename: 'static/js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    // 模块加载器
    module: {
      rules: [
          //处理ES6
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          //处理css
          {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader'], // 多个loader从右到左处理
          },
          //处理图片
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
            }
          },
          {
            test: /\.vue$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'vue-loader'
          },

  
      ]
    },
    // 插件
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html'
      }),
      new VueLoaderPlugin()
    ],
    devServer: {
        open: true, // 自动打开浏览器
        quiet: true, // 不做太多日志输出
      },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
        alias: { // 模块路径别名(简写方式)
          'vue$': 'vue/dist/vue.esm.js',  // 默认查找vue/dist/vue.runtime.js
        //   '@': resolve('src')
        }
      }

  }