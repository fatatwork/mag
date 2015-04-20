$(document).ready(function(){

function scriptsInitDesktop(){
	/*Анимация*/
	addScript("/scripts/viewport-checker.js");
	addScript("/scripts/anim_controller.js");
	/*Мягкая прокрутка из пунктов меню*/
	addScript("/scripts/smooth_scroll.js");
		/*Параллакс*/
	addScript("/scripts/parallax/jquery.parallax-1.1.3.js");
	addScript("/scripts/parallax/parallax-controller.js");
		/*Боковое мобильное меню*/
	addScript("/scripts/slideout/slideout.min.js");
	addScript("/scripts/slideout/slideout_controller.js");
		/*Динамическая загрузка контента*/
	addScript("/dataResponse/ajax-controller.js");
}

function scriptsInitMobile(){
	/*Анимация*/
	addScript("/scripts/viewport-checker.js");
	addScript("/scripts/anim_controller.js");
	/*Мягкая прокрутка из пунктов меню*/
	addScript("/scripts/smooth_scroll.js");
		/*Боковое мобильное меню*/
	addScript("/scripts/slideout/slideout.min.js");
	addScript("/scripts/slideout/slideout_controller.js");
		/*Динамическая загрузка контента*/
	addScript("/dataResponse/ajax-controller.js");
}

function addScript(filename){
	var script = document.createElement("SCRIPT"),
	     head = document.getElementsByTagName( "head" )[ 0 ];
	 
	script.type = "text/javascript";
	script.src = filename;
	head.appendChild( script );
}

function searchObjects(myClassOrId){
    var elements = window.document.getElementsByTagName('*');/*Получаем все элементы*/
    var objects = [];
    var regClassName = new RegExp(" {0,}" + myClassOrId + " {0,}", 'ig');
    if(myClassOrId[0] == "#"){
    	myClassOrId = myClassOrId.slice(1); /*Удаляем первый символ*/
    	for(var i = 0; i < elements.length; ++i){
	        if(regClassName.test(elements[i].id)){
	            objects.push(elements[i]);/*Ищем класс*/
	        }
    	}
    	return objects;
    }
    if(myClassOrId[0] == "."){
    	myClassOrId = myClassOrId.slice(1);
    	for(var i = 0; i < elements.length; ++i){
	        if(regClassName.test(elements[i].className)){
	            objects.push(elements[i]);/*Ищем класс*/
	        }
    	}
    	return objects;
    }
    else{
    	return false;
    }
    
}

function addIdEnum(ob_array, newId){
    /*Функция добавляет id с CSS анимацией*/
    for(var i=0; i<ob_array.length; ++i){
        if(ob_array[i].id == ""){
            ob_array[i].id += newId + (i+1);
        }
    }
}

function enableVisibility(){
    $('#rate_lines').addClass("visible");
	var obj_rect = searchObjects(".rect");
	addIdEnum(obj_rect, "rate_rect");
	$('.info_block').addClass("visible");
    //addClass("#rate_lines", "visible");
};

if(window.screen.width <= 1148){
	scriptsInitMobile();
}
else{
	scriptsInitDesktop();
}



});