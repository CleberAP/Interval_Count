/* 
	Script: Countdown Timer 
	Font_base: https://www.w3schools.com/howto/howto_js_countdown.asp
	Modified by: Cleber Almeida Pereira
*/

// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
//var countDownDate = new Date(document.getElementById("date_session_expire").value).getTime();
var dt_initial_date_inactive_session = new Date(document.getElementById("initial_date_inactive_session").value);

// Obter o tempo de inatividade setado e ajustar para valor inteiro
var time_sessionIdleEnd = document.getElementById("time_sessionIdleEnd").value; // Obtem o valor (default=string)
var aux = time_sessionIdleEnd.split(",");

if (parseInt(aux[1]) != 0){
	time_sessionIdleEnd = Math.ceil(parseFloat(time_sessionIdleEnd) + 0.45);
} else {
	time_sessionIdleEnd = Math.ceil(parseFloat(time_sessionIdleEnd));
}

//var countDownDate = dt_initial_date_inactive_session.setSeconds(dt_initial_date_inactive_session.getSeconds() + {{ seconds_until_idle_end }} ); // add value type inactive time. e.g.: 600 secs or 10 minutes
var countDownDate = dt_initial_date_inactive_session.setSeconds(dt_initial_date_inactive_session.getSeconds() + time_sessionIdleEnd );

// Update the count down  (session_expired or idle_time) every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="countDownInactiveSessionExpireTimer"
	//document.getElementById("countDownSessionExpireTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

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

	// Set Background Color when time less than 2 minute, e.g: distance < 120000
	// Set Background Color when time less than 5 minute, e.g: distance < 300000
	//if (distance < 300000) {
	if (distance < ((time_sessionIdleEnd/2)*1000)) { // Metade do tempo de inatividade
		document.getElementById("navbarLogon").className = "bg-warning text-white text-right";
		document.getElementById("displaySessionTimer").className = "bg-warning text-white text-right";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
		document.getElementById("menuButtom").className = "navbar-toggler bg-warning text-white text-right";
	}

	// Set Background Color when time less than 1 minute, e.g: distance < 60000
	if (distance < 60000) { // último minuto tempo de inatividade
		document.getElementById("navbarLogon").className = "bg-danger text-white text-right";
		document.getElementById("displaySessionTimer").className = "bg-danger text-white text-right";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
		document.getElementById("menuButtom").className = "navbar-toggler bg-danger text-white text-right";
	}

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countDownInactiveSessionExpireTimer").innerHTML = "EXPIROU";
		document.getElementById("tag_login").innerHTML = "EXPIROU";
	}

}, 1000);

// MAX CONNECT SESSION
var time_session_end = parseFloat(document.getElementById("time_sessionEnd").value);

// Get today's date and time
var now = new Date().getTime();
// Get count date max
var dt_now = new Date(now);
var countDownDateMax = dt_now.setSeconds(dt_now.getSeconds() + time_session_end);

// Update the count down MAX (session_age or sessiont_time) every 1 second
var y = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date max 
	var distance_connect_expiry_age = countDownDateMax - now;

	// Time calculations for days, hours, minutes and seconds
	var days_max = Math.floor(distance_connect_expiry_age / (1000 * 60 * 60 * 24));
	var hours_max = Math.floor((distance_connect_expiry_age % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes_max = Math.floor((distance_connect_expiry_age % (1000 * 60 * 60)) / (1000 * 60));
	var seconds_max = Math.floor((distance_connect_expiry_age % (1000 * 60)) / 1000);

	// Display the result in the element with id="countDownInactiveSessionExpireTimer"
	//document.getElementById("countDownSessionExpireTimer").innerHTML = distance_connect_expiry_age + "s conn";

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

	// Set Background Color when time less than 5 minutes, e.g: distance < 300000
	if (distance_connect_expiry_age < ((time_sessionIdleEnd/2)*1000)) {
		document.getElementById("navbarLogon").className = "bg-warning text-white text-right";
		document.getElementById("displaySessionTimer").className = "bg-warning text-white text-right";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
		document.getElementById("menuButtom").className = "navbar-toggler bg-warning text-white text-right";
	}
	if (distance_connect_expiry_age < 60000) {
		document.getElementById("navbarLogon").className = "bg-danger text-white text-right";
		document.getElementById("displaySessionTimer").className = "bg-danger text-white text-right";
		document.getElementById("countDownInactiveSessionExpireTimer").style.fontWeight = "bold";
		document.getElementById("menuButtom").className = "navbar-toggler bg-danger text-white text-right";
	}

	// If the count down is finished, write some text
	if (distance_connect_expiry_age < 0) {
		clearInterval(y);
		document.getElementById("countDownSessionExpireTimer").innerHTML = "EXPIROU";
	}

}, 1000);