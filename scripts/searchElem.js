$(document).ready(function(){ /*Когда документ загружен*/
    $('#rate_lines').viewportChecker({
        // Class to add to the elements when they are visible
        classToAdd: 'visible', /*Добавляем класс видимости*/

        // The offset of the elements (let them appear earlier or later)
        offset: 100,

        // Add the possibility to remove the class if the elements are not visible
        repeat: false,

         // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
        callbackFunction: function(){
                var obj_arr = searchObjects("rect");
                addIdEnum(obj_arr, "rate_rect");
            }
    }); /*Функция добавляет id с CSS анимацией*/

    $('#cat_block').viewportChecker({
        classToAdd: 'visible', offset: 200, repeat: false, callbackFunction: function(){
            var obj_arr = searchObjects("rect_cat");
            addClassTo(obj_arr, "pulse");
        }
    });
});

function searchObjects(myClass){
    var elements = window.document.getElementsByTagName('*');/*Получаем все элементы*/
    var objects = [];
    var regClassName = new RegExp(" {0,}" + myClass + " {0,}", 'ig');
    for(var i = 0; i < elements.length; ++i){
        if(regClassName.test(elements[i].className)){
            objects.push(elements[i]);/*Ищем класс*/
        }
    }
    return objects;
}

function addIdEnum(ob_array, newId){
    for(var i=0; i<ob_array.length; ++i){
        if(ob_array[i].id == ""){
            ob_array[i].id += newId + (i+1);
        }
    }
}

function addClassTo(ob_array, myClass){
    for(var i=0; i<ob_array.length; ++i){
        var regClassName = new RegExp(myClass + "|" + " {0,}" + myClass + " {0,}", 'ig');
        if(regClassName.test(objects[i].className)){
            objects[i].className += " ";
        }
        objects[i].className += myClass;
    }
}