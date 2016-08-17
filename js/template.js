// Inizio Javascript

// Dichiarazione ed Inizializzazione Variabili Globali

var aperto = 0; // Controllo attivazione mappa sito


// Main

$(document).ready(function() {

	inizializza(); // Invocazione Funzione Inizializzazione 
	transizioni(); // Invocazione Funzione Transizioni 
    breadcrumb(); // Invocazione Funzione Breadcrumb
	
});


// Inizializzazioni

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
	  
    });

  }

})();

 // Custom Scrollbar
 
 (function($){   
 
    $(window).on("load", function() {
 
        $("#container_recensioni, #container_contenuti").mCustomScrollbar({
        
            axis: "y",
            autoDraggerLength: true,
            autoHideScrollbar: true,
            autoExpandScrollbar: true,
            mouseWheel: { 
                    
                enable: true,
                axis: "y"
                    
            },
            documentTouchScroll: false,
            contentTouchScroll: 25,
            theme: "rounded"
            
        });
                
    });
    
})(jQuery);

// Funzione Inizializzazione

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
	
	var marker = document.querySelector("#marker_1"); // Marker
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
		
		if (!$(".c-hamburger.c-hamburger--htx").hasClass("attivo")) { // Se il pulsante è attivo
		
			// Allora effettua transizioni
		
			$("#icona_mappa_sito").addClass("evidenzia_3 ruota_sx");		
			$(".c-hamburger.c-hamburger--htx span").addClass("icona_mappa_sopra");
		
		}
		
	}, function() { // Altrimenti all'uscita rimuovi
		
		$("#icona_mappa_sito").removeClass("evidenzia_3 ruota_sx");		
		$(".c-hamburger.c-hamburger--htx span").removeClass("icona_mappa_sopra");
		
	});
	
	// Controllo apertura mappa sito
	
	$("#icona_mappa_sito").on("click tap", function() { // Al click sul pulsante
		
		if (aperto === 0) { // Se il menu è chiuso allora aprilo
			
			$("#mappa_sito").removeClass("mappa_sito_out"); // Modifica la transizione al volo
			$("#mappa_sito").addClass("mappa_sito_attiva");
			$(".mappa_sito_sfondo").addClass("mappa_sito_sfondo_attivo"); // Rimuove la transizione sui pannelli del menu
			$(".pannello_1").addClass("pannello_1_attivo"); // Rimuove la transizione sui pannelli del menu
			$(".pannello_2").addClass("pannello_2_attivo"); // Rimuove la transizione sui pannelli del menu
			$(".pannello_3").addClass("pannello_3_attivo"); // Rimuove la transizione sui pannelli del menu
			$(".pannello_4").addClass("pannello_4_attivo"); // Rimuove la transizione sui pannelli del menu
			$(".pannello_5").addClass("pannello_5_attivo"); // Rimuove la transizione sui pannelli del menu
			
			aperto = 1; // Setta lo stato come aperto
			
		} else { // Altrimenti chiudilo
		
			$("#mappa_sito").addClass("mappa_sito_out"); // Modifica la transizione al volo
			$(".mappa_sito_sfondo").removeClass("mappa_sito_sfondo_in"); // Rimuove la transizione al volo 
			$(".pannello_5").removeClass("pannello_5_attivo"); // Rimuove la transizione sui pannelli del menu
			
			setTimeout(function() {
			
				$(".pannello_4").removeClass("pannello_4_attivo"); // Rimuove la transizione sui pannelli del menu
			
			}, 500);
			setTimeout(function() {
			
				$(".pannello_3").removeClass("pannello_3_attivo"); // Rimuove la transizione sui pannelli del menu
			
			}, 700);
			setTimeout(function() {
			
				$(".pannello_2").removeClass("pannello_2_attivo"); // Rimuove la transizione sui pannelli del menu
			
			}, 1000);
			setTimeout(function() {
			
				$(".pannello_1").removeClass("pannello_1_attivo"); // Rimuove la transizione sui pannelli del menu
			
			}, 1200);
			setTimeout(function() {
				
				$(".mappa_sito_sfondo").removeClass("mappa_sito_sfondo_attivo"); // Rimuove la transizione sui pannelli del menu
			
			}, 1500);
			setTimeout(function() {
			
				$("#mappa_sito").removeClass("mappa_sito_attiva");
			
			}, 3000);
			
			aperto = 0; // Setta lo stato come chiuso
			
		}	
		
	});
		
	$(".mappa_sito_sfondo").hover(function() { // Al passaggio del mouse sulle sezioni

		$(this).addClass("mappa_sito_sfondo_in");//css("transition", "all .5s ease-in-out 0s"); // Aumenta la sensibilità delle transizioni al volo
		
	}, function() {
		
		$(this).siblings().removeClass("mappa_sito_sfondo_in");
		
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
	
	// Home
	
	// Marker
	
	$(".marker").on("stateadded", function() { // Al click sul marker
		
		$(this).attr("src", "#marker_2"); // Effetto rollover
		
	});
	$(".marker").on("stateremoved", function() { // All'uscita dall'elemento
		
		$(this).attr("src", "#marker_1"); // Effetto rollover
		$("a-cursor").attr("position", "0 0 -10"); // Resetta dimensioni
		
	});
    
    // Summary
    
    $("#summary_marker").on("click", function() { // Al click sul marker 
    
        $("#summary_home").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#summary_home").addClass("animated zoomIn"); // "
        
    });
    
    // Web
    
    $("#web_marker").on("click", function() { // Al click sul marker 
    
        $("#web").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#web").addClass("animated zoomIn"); // "
        
    });
    
    // Grafica
    
    $("#grafica_marker").on("click", function() { // Al click sul marker 
    
        $("#grafica").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#grafica").addClass("animated zoomIn"); // "
        
    });
    
    // Recensioni
    
    $("#recensioni_marker").on("click", function() { // Al click sul marker 
    
        $("#recensioni").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#recensioni").addClass("animated zoomIn"); // "
        
    });
    
    // Chi Siamo
    
    $("#chi_siamo_marker").on("click", function() { // Al click sul marker 
    
        $("#chi_siamo").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#chi_siamo").addClass("animated zoomIn"); // "
        
    });
    
    // Chiudi
    
    $(".chiudi").on("click tap", function() { // Al click del pulsante
        
        var cliccato = $(this); // Dichiarazione ed Inizializzazione variabile elemento cliccato
        
        $(this).parent().removeClass("animated zoomIn"); // Chiudi scheda
        $(this).parent().addClass("animated zoomOut"); // "
           
        setTimeout(function() {
            
            cliccato.parent().addClass("nascondi"); // "
            
        }, 500);
          
    });
    
    // Pulsante Scheda
    
    $("#web .scheda_summary_pulsante").on("click tap", function(e) {
        
        e.preventDefault(); // Disabilita funzionalità standard link
        
        var cliccato = $(this); // Dichiarazione ed Inizializzazione variabile elemento cliccato
        
        $(this).parents(".scheda").removeClass("animated zoomIn"); // Chiudi scheda
        $(this).parents(".scheda").addClass("animated zoomOut"); // "
           
        setTimeout(function() {
            
            cliccato.parents(".scheda").addClass("nascondi"); // "
            
            window.location.href = "index.php?pag=web"; // Vai a sezione Web
            
        }, 500);        
        
    });
	
}


// Funzione Breadcrumb

function breadcrumb() {
    
    // Dichiarazione Variabili
    
    var pag = ""; // Inizializzazione Variabile Pagina  
    
    // Controllo Posizione
    
    if ($("#home_pagina").length > 0) { // Se siamo in home
        
        pag = "home";    
        
    } else if ($("#web_pagina").length > 0) { // Se siamo su web
        
        pag = "web";    
        
    } else if ($("#grafica_pagina").length > 0) { // Se siamo su grafica
        
       pag = "grafica";    
        
    } else if ($("#menu_pagina").length > 0) { // Se siamo nel menu
        
       pag = "menu";     
        
    } else if ($("#chi_siamo").length > 0) { // Se siamo nel menu
        
       pag = "chi_siamo";     
        
    }
    
    // Assegnazione posizioni su minimappa
    
    switch(pag) { // Controllo Pagina
        
        case "home": // Se siamo in home
            
            $("#breadcrumb").addClass("minimap_home"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_home"); // Allora segna home su minimappa 
                   
            break;
            
        case "web": // Se siamo su web
            
            $("#breadcrumb").addClass("minimap_web"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_web"); // Allora segna web su minimappa 
            
            break;
            
        case "grafica": // Se siamo su grafica
            
             $("#breadcrumb").addClass("minimap_grafica"); // Aggiorna il breadcrumb
             $("#mappa_breadcrumb .marker").addClass("marker_grafica"); // Allora segna grafica su minimappa
            
            break;
            
        case "menu": // Se siamo nel menu
            
            $("#breadcrumb").addClass("minimap_menu"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_menu"); // Allora segna menu su minimappa 
            
            break;      
            
        case "chi_siamo": // Se siamo nel menu
            
            $("#breadcrumb").addClass("minimap_chi_siamo"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_chi_siamo"); // Allora segna menu su minimappa 
            
            break;   
        
        default: // Standard
        
            $("#breadcrumb").addClass("minimap_home"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_home"); // Allora segna home su minimappa    
        
    }  
    
}