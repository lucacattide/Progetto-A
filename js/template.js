// Inizio Javascript

$(document).ready(function() {

	inizializza(); // Invocazione Funzione Inizializzazione 
	transizioni(); // Invocazione Funzione Transizioni 
	
});


// Funzione Inizializzazione

function inizializza() {   
}


// Funzione Transizioni 

function transizioni() {
	
	$("#entra").on("click tap", function() {
		
		$(this).addClass("animated fadeOutDown");
		$("#tagline").addClass("animated fadeOutDown");
		$("#headline").addClass("animated fadeOutDown");
		
		setTimeout(function() {
			
			window.location.href = "index.php?pag=home";
		
		}, 2500);
		
	});
	
}