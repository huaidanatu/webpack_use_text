//path是node.js中的一个模块
const path = require('path');
//导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
//创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
	template: './src/index.html',//指定原文件的存放路径
	filename: './index.html' //指定生成的文件的存放路径
})
//使用 node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
	//mode用来指定构建模式，可选 development 和 production
	mode: 'development',
	//指定要处理的文件,这里__dirname到根目录了，code下，src上
	entry: path.join(__dirname,'./src/js/index.js'),
	//指定生成的文件要存放的位置及文件名
	output: {
		//存放到目录
		path: path.join(__dirname,'dist'),
		//生成的文件名
		filename: 'main.js' 
	},
	devServer: {
	    static: {
	      directory: __dirname,//指定托管的根目录为根目录
	    },
	    compress: true,
	    port: 9000,
		open: true,//自动打开浏览器
		hot: true//启用热更新
	},
	plugins: [htmlPlugin],  //通过 plugins 节点，使 htmlPlugin 插件生效
	module: {
		rules: [
			//定义了不同模块对应的loader
			{
				test: /\.css$/,use: ['style-loader','css-loader']
			},
			{
				test: /\.less$/,use: ['style-loader','css-loader','less-loader']
			},
			{
				test: /\.jpg|png|gif$/,use: ['url-loader?limit=20000']
			},
			{
				test: /\.js$/,use: ['babel-loader'],exclude: /node_modules/
			}
		]
	}
}
