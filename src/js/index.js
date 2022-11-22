//1.使用ES6导入语法导入jQuery
import $ from "jquery"

$(function(){
	//2.实现隔行变色
	$('li:odd').css('background-color','green');
	$('li:even').css('background-color','red');
}
)