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
                var obj_rect = searchObjects("rect");
                addIdEnum(obj_rect, "rate_rect");
                $('.info_block').addClass("appearRateInfo");
            }
/*.separator_rate, .eye_icon, .rect span*/

    }); 

    $('#cat_block').viewportChecker({
        classToAdd: 'visible animated flipInX', offset: 200, repeat: false
    });
    
    $('#btn1, #btn2, .content_button_header, .article_actual').viewportChecker({
        classToAdd: 'visible animated fadeIn', offset: 20, repeat: false
    });    
    
    $('#issues').viewportChecker({
        classToAdd: 'visible animated zoomInUp', offset: 100, repeat: false
    });

    $('#block1, #block2').viewportChecker({
        classToAdd: 'visible animated zoomInUp', offset: 200, repeat: false
    });

    $('#block3, #block4').viewportChecker({
        classToAdd: 'visible animated zoomInUp', offset: 100, repeat: false
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
    /*Функция добавляет id с CSS анимацией*/
    for(var i=0; i<ob_array.length; ++i){
        if(ob_array[i].id == ""){
            ob_array[i].id += newId + (i+1);
        }
    }
}

