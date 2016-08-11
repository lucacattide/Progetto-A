// Inizio Javascript

$(document).ready(function() {

	inizializza(); // Invocazione Funzione Inizializzazione 
	transizioni(); // Invocazione Funzione Transizioni 
	
});


// Funzione Inizializzazione

// Mappa del Sito

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
	  
    var toggle = toggles[i];
    toggleHandler(toggle);
  
  };

  function toggleHandler(toggle) {

    toggle.addEventListener( "click", function(e) {

      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	  
	  $(".c-hamburger.c-hamburger--htx").toggleClass("attivo"); // Rimuove lo stato attivo dal menu
	  $("#mappa_sito").toggleClass("mappa_sito_attiva");
	  $(".mappa_sito_sfondo").toggleClass("mappa_sito_sfondo_attivo");

    });

  }

})();

function inizializza() {   

	// Aggiungi ai Preferiti
	
	$("#preferiti_link").on("click tap", function() {
    
 		if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
		
			window.sidebar.addPanel(document.title,window.location.href, '');
			
		} else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
		
			window.external.AddFavorite(location.href,document.title); 
			
		} else if(window.opera && window.print) { // Opera Hotlist
		
			this.title = document.title;
			return true;
			
		} else { // webkit - safari/chrome
		
			alert('Premi ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D per aggiungere la pagina.');
		}  	
		
	});

}


// Funzione Transizioni 

function transizioni() {
	
	// Dichiarazione ed inizializzazione variabili
	
	var audio = document.querySelector('[sound]'); // Audio
	
	// UI
	
	// Preferiti
	
	$("#preferiti i").hover(function() { // Al passaggio del mouse
	
		// Mostra link
		
		$("#preferiti i").addClass("evidenzia_1");
		$("#preferiti_link").addClass("evidenzia_2");
		$("#preferiti").addClass("entra_giu");
		
		
	}, function() { // All'uscita nascondi
	});
	$("#preferiti_link").hover(function() { // Al passaggio del mouse
	}, function() { // All'uscita nascondi
		
		$("#preferiti i").removeClass("evidenzia_1");
		$("#preferiti_link").removeClass("evidenzia_2");
		$("#preferiti").removeClass("entra_giu");
				
	});
	
	// Mappa del Sito
	
	$(".c-hamburger.c-hamburger--htx").hover(function() {
		
		$("#icona_mappa_sito").addClass("evidenzia_3 ruota_sx");		
		
	}, function() {
		
		$("#icona_mappa_sito").removeClass("evidenzia_3 ruota_sx");		
		
	});
	
	// Volume
	
	$("#volume").on("click tap", function() { // Al click sul pulsante
		
		if ($("#volume i").hasClass("fa fa-volume-up")) { // Se l'audio è attivo
		
			// Allora disattiva il pulsante
		
			$("#volume i").removeClass("fa fa-volume-up"); 
			$("#volume i").addClass("fa fa-volume-off");
			audio.components.sound.pause(); // Disattiva l'audio
		
		} else { // Altrimenti riattivalo
			
			$("#volume i").removeClass("fa fa-volume-off"); 
			$("#volume i").addClass("fa fa-volume-up");	
			audio.components.sound.play(); // Riattiva l'audio
			
		}
		
	});
	
	// Footer
	
	$("#icona_footer, #footer").hover(function() { // Al passaggio del mouse
		
		// Mostra Footer
		
		$("#icona_footer").addClass("ruota_giu solleva evidenzia");
		$("#footer").addClass("entra_su");
		
	}, function() { // Allu'uscita nascondi
		
		$("#icona_footer").removeClass("ruota_giu solleva evidenzia");
		$("#footer").removeClass("entra_su");
		
	});
	
	// Landing
	
	// Titoli
	
	if ($("#claim").length > 0) { // Se siamo sulla landing
	
		$("#logo").addClass("nascondi"); // Allora nascondi logo
		$("#preferiti").addClass("nascondi"); // Allora nascondi i preferiti
		$("#icona_mappa_sito").addClass("nascondi"); // Allora nascondi la sitemap
		$("#volume").addClass("nascondi"); // Allora nascondi il volume
		$("#breadcrumb").addClass("nascondi"); // Allora nascondi il breadcrumb
		$("#mappa_breadcrumb").addClass("nascondi"); // Allora nascondi il breadcrumb
		$("#icona_footer").addClass("nascondi"); // Allora nascondi il volume
		$("#live").addClass("nascondi"); // Allora nascondi il livestream
		
	} else {
		
		$("#logo").removeClass("nascondi"); // Altrimenti mostra
		$("#preferiti").removeClass("nascondi"); // Alloramostra
		$("#icona_mappa_sito").removeClass("nascondi"); // Allora mostra
		$("#volume").removeClass("nascondi"); // Allora mostra
		$("#breadcrumb").removeClass("nascondi"); // Allora mostra
		$("#mappa_breadcrumb").removeClass("nascondi"); // Allora mostra
		$("#icona_footer").removeClass("nascondi"); // Allora mostra
		$("#live").removeClass("nascondi"); // Allora mostra

    }
	
	// Entra
	
	$("#entra").on("click tap", function() { // Al click del pulsante
		
		// Nascondi elementi
		
		$(this).addClass("animated fadeOutDown");
		$("#tagline").addClass("animated fadeOutDown");
		$("#headline").addClass("animated fadeOutDown");
		
		setTimeout(function() { // Cambia sfondo 
			
			$("#sfondo_landing").attr("src", "#landing_2");
		
		}, 2000);
		setTimeout(function() { // Cambia pagina
			
			window.location.href = "index.php?pag=home";
		
		}, 3500);
		
	});
		
}