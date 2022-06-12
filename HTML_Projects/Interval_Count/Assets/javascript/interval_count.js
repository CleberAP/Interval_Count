/* 
	Script original: Countdown Timer 
	Fonte do script original: https://www.w3schools.com/howto/howto_js_countdown.asp
	Modificado por: Cleber Almeida Pereira
*/

// Define a data para a qual iniciará a contagem regressiva
var dt_initial_date_inactive_session = new Date(document.getElementById("initial_date_inactive_session").value);

// Obtem o tempo de inatividade setado e ajusta para valor inteiro
var time_sessionIdleEnd = document.getElementById("time_sessionIdleEnd").value; // Obtem o valor (default=string)

var aux = "";

if (time_sessionIdleEnd.search(",") > -1){
	aux = time_sessionIdleEnd.split(",");
} else if (time_sessionIdleEnd.search(".") > -1 ){
	aux = time_sessionIdleEnd.split(".");
} else {
	aux = "";
}

if (aux != ""){
	if (parseInt(aux[1]) > 0){
		time_sessionIdleEnd = Math.ceil(parseFloat(time_sessionIdleEnd) + 0.45);
	} else {
		time_sessionIdleEnd = Math.ceil(parseFloat(time_sessionIdleEnd));
	}
}

// Define a data da contagem regressiva
var countDownDate = dt_initial_date_inactive_session.setSeconds(dt_initial_date_inactive_session.getSeconds() + time_sessionIdleEnd );

// Atualiza a contagem regressiva do tempo de inatividade a cada 1 segundo
var x = setInterval(function() {

	// Obtem a data e hora atual
	var now = new Date().getTime();

	// Armazena a distância entre agora e a data da contagem regressiva
	var distance = countDownDate - now;

	// Cálculos de tempo para dias, horas, minutos e segundos
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (days > 0) {
		document.getElementById("countDownInactiveSessionExpireTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	} 
	else if (hours > 0) {
		document.getElementById("countDownInactiveSessionExpireTimer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
	}
	else if (minutes > 0) {
		document.getElementById("countDownInactiveSessionExpireTimer").innerHTML = minutes + "m " + seconds + "s ";
	}
	else {
		document.getElementById("countDownInactiveSessionExpireTimer").innerHTML = seconds + "s ";
	}

	// Altera Background Color quando restar metade do tempo de sessão inativa
	if (distance >= 0 && distance < ((time_sessionIdleEnd/2)*1000)) { // Metade do tempo de inatividade
		document.getElementById("displaySessionTimer").className = "warning";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
	}

	// Altera Background Color quando restar 1 minuto de tempo de sessão inativa
	if (distance >= 0 && distance < 60000) {
		document.getElementById("displaySessionTimer").className = "danger";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
	}

	// Quando zerar exibe o texto especificado
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countDownInactiveSessionExpireTimer").innerHTML = "EXPIROU";
	}

}, 1000);

// Tempo máximo da sessão
var time_session_end = parseFloat(document.getElementById("time_sessionEnd").value);

// Obtem a data e hora atual
var now = new Date().getTime();

// Obter data de contagem máxima
var dt_now = new Date(now);
var countDownDateMax = dt_now.setSeconds(dt_now.getSeconds() + time_session_end);

// Atualiza a contagem regressiva do tempo máximo de sessão a cada 1 segundo
var y = setInterval(function() {

	// Obtem a data e hora atual
	var now = new Date().getTime();

	// Armazena a distância entre agora e a data da contagem regressiva
	var distance_connect_expiry_age = countDownDateMax - now;

	// Cálculos de tempo para dias, horas, minutos e segundos
	var days_max = Math.floor(distance_connect_expiry_age / (1000 * 60 * 60 * 24));
	var hours_max = Math.floor((distance_connect_expiry_age % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes_max = Math.floor((distance_connect_expiry_age % (1000 * 60 * 60)) / (1000 * 60));
	var seconds_max = Math.floor((distance_connect_expiry_age % (1000 * 60)) / 1000);

	if (days_max > 0) {
		document.getElementById("countDownSessionExpireTimer").innerHTML = days_max + "d " + hours_max + "h " + minutes_max + "m " + seconds_max + "s ";
	} 
	else if (hours_max > 0) {
		document.getElementById("countDownSessionExpireTimer").innerHTML = hours_max + "h " + minutes_max + "m " + seconds_max + "s ";
	}
	else if (minutes_max > 0) {
		document.getElementById("countDownSessionExpireTimer").innerHTML = minutes_max + "m " + seconds_max + "s ";
	}
	else {
		document.getElementById("countDownSessionExpireTimer").innerHTML = seconds_max + "s ";
	}

	// Altera Background Color quando restar metade do tempo total de sessão
	if (distance_connect_expiry_age >= 0 && distance_connect_expiry_age < ((time_sessionIdleEnd/2)*1000)) {
		document.getElementById("displaySessionTimer").className = "warning";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
	}
	
	// Altera Background Color quando restar 1 minuto de tempo total de sessão
	if (distance_connect_expiry_age >= 0 && distance_connect_expiry_age < 60000) {
		document.getElementById("displaySessionTimer").className = "danger";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
	}

	// Quando zerar exibe o texto especificado
	if (distance_connect_expiry_age < 0) {
		clearInterval(y);
		document.getElementById("countDownSessionExpireTimer").innerHTML = "EXPIROU";
	}

}, 1000);