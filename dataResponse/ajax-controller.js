$( function() {
	$('#btn_more_actual').click(function(){
		var xmlDocRet = getNewData(this.id);
	});

function actualArticleParser(xmlForParse, btn_id){
	var main_elements = xmlForParse.getElementsByTagName("ARTICLE");
	var output ="";
	for(var i=0; i<main_elements.length; ++i){
		var title = main_elements[i].getElementsByTagName("TITLE")[0].textContent;
		var authors_arr = main_elements[i].getElementsByTagName("AUTHOR");
		/*Парсим авторов*/
		var authors = "";
		for(var j=0; j<authors_arr.length; ++j){
			authors += authors_arr[j].textContent;
			if(j+1 < authors_arr.length){
				authors += ", ";
			}
		}
		/*Делаем вывод*/
		output += "<div>" +	title + "<br><span>" + authors + "</span></div>";
		/*Записываем изменения на страницу*/
	}
	var button_ob = $("#"+btn_id);
	button_ob.detach(); /*Удаляем кнопку из прежнего положения*/
	$("#content_actual .clearfix").remove();
	document.getElementById('content_actual').innerHTML += output + "<div class=\"clearfix\"></div>";
	$("#content_actual div:not(#" + btn_id + ", .clearfix)").addClass("article_actual visible animated fadeIn");
	button_ob.appendTo("#content_actual"); /*Возвращаем кнопку на прежнее место*/
}

function getNewData(btn_id){
	var params = "btn_clk=" + btn_id; /*Параметры: пара = значение*/
	request = new ajaxRequest(); /*Создаем новый обьект запроса (функция снизу)*/
	request.open("POST", "/dataResponse/former.php", true); /*Настраиваем обьект на создаение post запроса по адресу файла php сценария. true - указывает на включение асинхронного режима*/
	/*Отправляем http заголовки, для того чтобы сервер знал о поступлении POST запроса*/
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	request.overrideMimeType('text/xml');
	request.onreadystatechange = function(){ /*Указывает на CALLBACK функцию, которая должна вызываться при каждом изменении свойства readyState*/
		if (this.readyState == 4) {
			if(this.status == 200){
				if(this.responseXML != null){
					clearTimeout(timeoutHandle); //Отменяем действие таймера ошибки (ведь все получилось)
					xmlDoc=this.responseXML; /*Получили XML документ с информацией о статьях*/
					actualArticleParser(xmlDoc, btn_id);
			}
				else{
					alert("Ошибка AJAX: Данные не получены");
					clearTimeout(timeoutHandle);
				}
			}
			else{
				errorHandler(this.statusText);
				clearTimeout(timeoutHandle);
			}
		};
	}
	request.send(params); /*Собственно отправка запроса*/
	var timeoutHandle = setTimeout( function(){ /*Таймаут на соединение*/
    	request.abort(); errorHandler("Время ожидания вышло. Проверьте соединение и попробуйте ещё раз.") 
    	}, 10000);

	function ajaxRequest(){
		try{
			var request = new XMLHttpRequest()
		}
		catch(e1){
			try{
				request = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e2){
				try{
					request = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch(e3){
					request = false;
				}
			}
		}
		return request;
	}
return xmlDoc;
}

function errorHandler(errorText){
	alert("Ошибка AJAX: " + errorText);
}

});