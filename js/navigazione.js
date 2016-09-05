

// Dichiarazione ed Inizializzazione Variabili

// Dichiarazione ed Inizializzazione area sensibile movimento libero

var area = $(window).width() / 4; 
var puntatore = true; // Controllo visibilità mouse
var scena = document.querySelector('a-scene'); // Oggetto Scena
var camera = document.querySelector('a-scene').camera;
//var camera = document.querySelector("a-entity[camera]").components.camera.camera; // Oggetto Camera
//var renderer = document.querySelector('a-scene').renderer; // Oggetto rendering 
var movimentoFree = false; // Selettore movimento libero
var long = 0; // Longitudine
var lat = 0; // Latitudine
var oldX = 0; // Vecchia coordinata X
var oldY = 0; // Vecchia coordinata Y
var oldLong = 0; // Vecchia longitudine
var oldLat = 0; // Vecchia latitudine
		
render(); // calling again render function	 	

// Funzione Render

function render() {
	
	requestAnimationFrame(render); // Reinizializza l'animazione
	
	// Sposta la camera alle coordinate attualmente visualizzate
				
	//lat = Math.max(-85, Math.min(85, lat)); // Blocca la visualizzazione sulla vista orizzontale (no zenit/terra);
	camera.x = 500 * Math.sin(THREE.Math.degToRad(90 - lat)) * Math.cos(THREE.Math.degToRad(long)); // Aggiorna posizione ascisse
	camera.y = 500 * Math.cos(THREE.Math.degToRad(90 - lat)) * Math.sin(THREE.Math.degToRad(long)); // Aggiorna posizione ordinate

	camera.lookAt(camera); // Imposta la visualizzazione
	//renderer.render(scena, camera); // Reinizializza il rendering
	camera.updateProjectionMatrix(); // Reinizializza la camera
	console.log(camera.x, camera.y);
	
}

// Gestione Eventi

window.addEventListener("mousemove", onDocumentMouseMove, false);

$(".a-canvas").hover(function() { // All'entrata del mouse

	puntatore = false; // Imposta il puntatore come nascosto			

}, function() { // All'uscita
	
	puntatore = true; // Imposta il puntatore come nascosto		
	
});
//$(".a-canvas").on("mousemove", function(event) { // Al movimento del mouse
function onDocumentMouseMove(event) {

	if (event.pageX >= area && event.pageX <= area * 3) { // Se ci troviamo all'interno del mirino
					
		 movimentoFree = true; // Attiva la modalità di navigazione libera

		if (puntatore === false) { // Se il puntatore è impostato su nascosto
		
			$("body").css("cursor", "none"); // Nasconde il mouse

		}
		
	}
	if (event.pageX <= area || event.pageX >= area * 3) { // Se ci troviamo all'esterno del mirino
	
	   puntatore = false; // Imposta il puntatore come nascosto		
	
	}
	if (movimentoFree) { // Se la navigazione libera è attiva
	
			long = (oldX - event.clientX) * 0.1 + oldLong; // Assegna la longitudine attuale
			lat = (event.clientY - oldY) * 0.1 + oldLat; // Assegna la latitudine attuale
			oldLong = long; // Salva la longitudine attuale
			oldLat = lat; // Salva la longitudine attuale
			
	}	
	
	oldX = event.clientX; // Salva le coordinate X attuale
	oldY = event.clientY; // Salva le coordinate Y attuale

}
//});
$(window).on("keypress", function(e) { // Alla pressione del tasto

	 var code = e.keyCode || e.which; // Dichiarazione ed Inizializzazione Variabile tasto
	 
	 if (code === 32) { // Se si preme la barra spaziatrice

		movimentoFree = false; // Allora disattiva la navigazione libera
		puntatore = true; // Imposta il puntatore su visibile
		
		if (puntatore === true) { // Se il puntatore è impostato su visibile
		
			$("body").css("cursor", "auto"); // Mostra il mouse

		}
	   
	 }	
	
});