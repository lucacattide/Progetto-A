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
	
	$('.countdown').ClassyCountdown({
		
		theme: "black",
		end: Math.round($.now() + 4492800000),
		labelsOptions: {
			lang: {
				days: 'GG',
				hours: 'H',
				minutes: 'M',
				seconds: 'S'
			},
			style: 'font-size:1.5rem; text-transform:uppercase;font-family:"AtlasBold", sans-serif;'
		},		
	});
   
}