module.exports = {
	//声明 babel 可用的插件， webpack 在调用 babel-loader 的时候 ，会先加载下面的插件
	plugins: [
		['@babel/plugin-proposal-decorators',{legacy: true}]
		]
}