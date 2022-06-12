/*
Fontes de referência: 
	1. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
	2. https://www.freecodecamp.org/portuguese/news/date-now-em-javascript-como-obter-a-data-atual-em-javascript/
*/


function getCurrentDate_toISOString(){
	var dateTimeNow = new Date();
	document.getElementById("initial_date_inactive_session").value = dateTimeNow.toISOString();
	location.reload();
}

function getCurrentDate_toUTCString(){
	var dateTimeNow = new Date();
	document.getElementById("initial_date_inactive_session").value = dateTimeNow.toUTCString();
	location.reload();
}

function appSimulation(){
	var dateTimeNow = Date.now(); // Data atual em milissegundos
	var milliseconds_initials = (document.getElementById("time_sessionEnd").value) * 1000; // Obtem e converte os segundos atuais para milissegundos
	var datetime_initials = Date.parse(document.getElementById("initial_date_inactive_session").value);
	
	var seconds_left = ((dateTimeNow - datetime_initials) - milliseconds_initials); // 

	document.getElementById("time_sessionEnd").value = (seconds_left / 1000) * (-1); // Converte para milissegundos em segundos
	location.reload();
}