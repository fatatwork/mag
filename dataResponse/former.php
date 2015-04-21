<?php
	if(isset($_POST["btn_clk"])){
		/*header('Content-Type: text/xml'); Говорим браузеру о том, что в ответе будет xml*/
		echo file_get_contents("http://mag.lol/dataResponse/xmlTestDoc.xml");
		/*Сопоставить кнопку с блоком*/
		/*Сопоставить блок с талицей базы данных*/
		/*Сделать запрос к талице и перебрать */
	}
?>