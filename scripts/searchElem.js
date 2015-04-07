var elements = window.document.getElementsByTagName('*');
    if(elements.length == 0){
        alert("Crash");
    }
    var objects = [];
    /*elements[0].className += " lol";*/
    /*$("rate_rect1").addClass("lol");*/
    for(var i = 0; i < elements.length; ++i){
        if(elements[i].id == "rate_rect1"){
            elements[i].className += " lol";
        }
    }