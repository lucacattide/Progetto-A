// Inizio Javascript

$(document).ready(function() {

	inizializza(); // Invocazione Funzione Inizializzazione 
	
	$("#privacy").on("click tap", function() { // Al click sulla voce
		
		$("#tooltip").slideDown(); // Mostra Tooltip
		
		setTimeout(function() {
			
			$("#tooltip").slideUp(); // Nascondi il Tooltip	
		
		}, 3000);
		
	});
	$("#invia").on("click tap", function() {
		
		$("html, body").animate({ scrollTop: $(document).height() });	
		
	});

});


// Funzione Inizializzazione

function inizializza() {
	
	// Countdown
	
	$('.ce-countdown').countEverest({

		day: 30,
		month: 9,
		year: 2016,
		daysLabel: "GIORNI",
		dayLabel: "GIORNO",
		hoursLabel: "ORE",
		hourLabel: "ORA",
		minutesLabel: "MINUTI",
		minuteLabel: "MINUTO",
		secondsLabel: "SECONDI",
		secondLabel: "SECONDO",
		leftHandZeros: false,
		onChange: function() {
			
			drawCircle($('#ce-days').get(0), this.days, 365);
			drawCircle($('#ce-hours').get(0), this.hours, 24);
			drawCircle($('#ce-minutes').get(0), this.minutes, 60);
			drawCircle($('#ce-seconds').get(0), this.seconds, 60);

		}

	});


	function deg(v) {

		return (Math.PI/180) * v - (Math.PI/2);

	}


	function drawCircle(canvas, value, max) {

		var	primaryColor = '#342C38',
			secondaryColor = '#ccc',
			circle = canvas.getContext('2d');

		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 4;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);

		circle.strokeStyle = secondaryColor;

		circle.stroke();
		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);

		circle.strokeStyle = primaryColor;

		circle.stroke();

	}
   
}