$(document).ready(function(){
	/*Создаем новое боковое меню*/
	var slideout = new Slideout({
	    'panel': document.getElementById('panel'),
	    'menu': document.getElementById('mob_menu'),
	    'padding': 256,
	    'tolerance': 70,
	    'touch': true
		});
	/*Отслеживаем клик по кнопке мобильного меню*/
	$(".toggle-button").click(function() {
	    slideout.toggle();
	});
});