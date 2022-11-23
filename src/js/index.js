//1.使用ES6导入语法导入jQuery
import $ from "jquery"
import '@/css/index.css'
import '../css/index.less'
import logo from '../images/logo.jpg'

$(function(){
	//2.实现隔行变色
	$('li:odd').css('background-color','green');
	$('li:even').css('background-color','red');
	//给img标签的src动态赋值
	$('.box').attr('src',logo);
	$('.box').css('width','800px');
	$('.box').css('height','300px');
}
)


//定义装饰器函数
function info(target){
	target.info = 'person info';
}

//定义一个普通的类
@info
class Person{}

console.log(Person.info)