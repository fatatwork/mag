$(document).ready(function(){ /*Когда документ загружен*/
    $('.rect').viewportChecker({
        // Class to add to the elements when they are visible
        classToAdd: 'visible', /*Добавляем класс видимости*/

        // The offset of the elements (let them appear earlier or later)
        offset: 100,

        // Add the possibility to remove the class if the elements are not visible
        repeat: false,

         // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
        callbackFunction: addClassNow /*Функция добавляет id с CSS анимацией*/
    });
});

function addClassNow(){
    var elements = window.document.getElementsByTagName('*');/*Получаем все элементы*/
    if(elements.length == 0){
        alert("Crash");
    }
    var objects = [];
    for(var i = 0; i < elements.length; ++i){
        if(/rect ./ig.test(elements[i].className)){
            objects.push(elements[i]);/*Ищем класс*/
        }
    }

    for(var i=0; i<objects.length; ++i){
        if(objects[i].id == ""){
            objects[i].id += "rate_rect" + (i+1);
        }
    }
}