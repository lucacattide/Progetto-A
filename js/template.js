// Inizio Javascript

<!--

// Dichiarazione ed Inizializzazione Variabili Globali

var aperto = 0; // Controllo attivazione mappa sito

// Main

$(document).ready(function() {

	inizializza(); // Invocazione Funzione Inizializzazione 
    caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
	transizioni(); // Invocazione Funzione Transizioni
	//navigazione(); // Invocazione Funzione Navigazione 
    breadcrumb(); // Invocazione Funzione Breadcrumb
    validaInviaForm(); // Invocazione Funzione Form

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
         
        inizializzaScroll();
                
    });
    
})(jQuery);


// Funzione Inizializzazione Custom Scroll

function  inizializzaScroll() {
    
    $("#container_recensioni, #container_contenuti, #container_recapiti, #container_dove_siamo").mCustomScrollbar({
        
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
        theme: "rounded",
        callbacks:{
            whileScrolling: function() {
            
                animaElementi(this);
                animaElementi_1(this);
        
            }
        
        }
        
    });
        
}


// Counter

(function($) {
    
    $.fn.countTo = function(options) {
        
        // merge the default plugin settings with the custom options
        
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        
        var loops = Math.ceil(options.speed / options.refreshInterval),
        
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    
                    options.onUpdate.call(_this, value);
                    
                }

                if (loopCount >= loops) {
                    
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        
                        options.onComplete.call(_this, value);
                        
                    }
                    
                }
                
            }
            
        });
        
    };

    $.fn.countTo.defaults = {
        
        from: 0,  // the number the element should start at
        to: 999,  // the number the element should end at
        speed: 9000,  // how long it should take to count between the target numbers
        refreshInterval: 90,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
        
    };
    
})(jQuery);
function inizializzaCounter(elemento) {
    
    elemento.countTo({
            
        from: 0,
        to: 999,
        speed: 1000,
        refreshInterval: 90,
        onComplete: function() {
           
            $(this).addClass("animated flipInX"); 
            
        }
        
    }); 
    
} 


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
    var selezionato = null; // Elemento selezionato
	var x, y = 0; // Coordinate puntatore  
	
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
	
	// Mirino
	
	$(document).on("mousemove", function(event) { // Al movimento del mouse

		// Se si sposta a destra
				
		if (event.pageX > $(this).width() / 2) { 
		    
			x = event.pageX;

			$("#mirino_img .quadrante_interno").css({ // Allora ruota in senso orario
				
				"-webkit-transform": "rotate(" + x + "deg)",
				"-moz-transform": "rotate(" + x + "deg)",
				transform: "rotate(" + x + "deg)",
				"transform-origin": "center"
				
			});	
			
		// Altrimenti Se si sposta a sinistra
			
		} else if (event.pageX < $(this).width() / 2) { 
		
			x = event.pageX;
		
			$("#mirino_img .quadrante_interno").css({ // Allora ruota in senso orario
				
				"-webkit-transform": "rotate(-" + x + "deg)",
				"-moz-transform": "rotate(-" + x + "deg)",
				transform: "rotate(-" + x + "deg)",
				"transform-origin": "center"
				
			});	
			
		}
		
		// Se si sposta in alto
				
		if (event.pageY < $(this).height() / 2) { 
		    
			y = event.pageY;

			$("#mirino_img .quadrante_esterno").css({ // Allora ruota in senso orario
				
				"-webkit-transform": "rotate(" + y + "deg)",
				"-moz-transform": "rotate(" + y + "deg)",
				transform: "rotate(" + y + "deg)",
				"transform-origin": "center"
				
			});	
			
		// Altrimenti Se si sposta a sinistra
			
		} else if (event.pageY > $(this).height() / 2) { 
		
			y = event.pageY;
		
			$("#mirino_img .quadrante_esterno").css({ // Allora ruota in senso orario
				
				"-webkit-transform": "rotate(-" + y + "deg)",
				"-moz-transform": "rotate(-" + y + "deg)",
				transform: "rotate(-" + y + "deg)",
				"transform-origin": "center"
				
			});	
			
		}
		
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
		$("#headline").addClass("animated fadeInUp");
		
	} else {
		
		$("#logo").removeClass("nascondi"); // Altrimenti mostra
		$("#preferiti").removeClass("nascondi"); // Alloramostra
		$("#icona_mappa_sito").removeClass("nascondi"); // Allora mostra
		$("#volume").removeClass("nascondi"); // Allora mostra
		$("#breadcrumb").removeClass("nascondi"); // Allora mostra
		$("#mappa_breadcrumb").removeClass("nascondi"); // Allora mostra
		$("#icona_footer").removeClass("nascondi"); // Allora mostra
		$("#live").removeClass("nascondi"); // Allora mostra
		$("#headline").addClass("animated fadeInUp");

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
	
		$(this).attr({
			
			"src": "#marker_2"//,
			//"scale": "0.5 0.5 0.5"
			
		}); // Effetto rollover
		
	});
	$(".marker").on("stateremoved", function() { // All'uscita dall'elemento
		
		$(this).attr({
			
			"src": "#marker_1",
			//"scale": "0.2 0.2 0.2"
			
		}); // Effetto rollover

		$("a-cursor").attr("position", "0 0 -10"); // Resetta dimensioni
		
	});
	$(".marker").on("click tap", function() { // Al click sul marker
		
		$("body").css("cursor", "auto"); // Mostra il puntatore
		
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
        
        if (($("#chi_siamo_pagina").length > 0) && ($("#chi_siamo.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Chi Siamo - Fabio (Landing)
    
    $("#fabio_marker").on("click", function() { // Al click sul marker 

        $("#fabio").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#fabio").addClass("animated zoomIn"); // "
        
        if (($("#fabio_pagina").length > 0) && ($("#fabio.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Chi Siamo - Radeesh (Landing)
    
    $("#radeesh_marker").on("click", function() { // Al click sul marker 

        $("#radeesh").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#radeesh").addClass("animated zoomIn"); // "
        
        if (($("#radeesh_pagina").length > 0) && ($("#radeesh.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Chi Siamo - Claudio (Landing)
    
    $("#claudio_marker").on("click", function() { // Al click sul marker 

        $("#claudio").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#claudio").addClass("animated zoomIn"); // "
        
        if (($("#claudio_pagina").length > 0) && ($("#claudio.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Chi Siamo - Luca (Landing)
    
    $("#luca_marker").on("click", function() { // Al click sul marker 

        $("#luca").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#luca").addClass("animated zoomIn"); // "
        
        if (($("#luca_pagina").length > 0) && ($("#luca.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Chi Siamo - Giulio (Landing)
    
    $("#giulio_marker").on("click", function() { // Al click sul marker 

        $("#giulio").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#giulio").addClass("animated zoomIn"); // "
        
        if (($("#giulio_pagina").length > 0) && ($("#giulio.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Chi Siamo - Fabrizio (Landing)
    
    $("#fabrizio_marker").on("click", function() { // Al click sul marker 

        $("#fabrizio").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#fabrizio").addClass("animated zoomIn"); // "
        
        if (($("#fabrizio_pagina").length > 0) && ($("#fabrizio.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });
    
    // Referenze
    
    $("#referenze_marker").on("click", function() { // Al click sul marker 
    
        $("#referenze").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#referenze").addClass("animated zoomIn"); // "
        
        if (($("#referenze_pagina").length > 0) && ($("#referenze.scheda.secondo_livello #container_contenuti").length === 0)) { // Se siamo sulla pagina di secondo livello e se i contenuti della scheda non sono stati inizializzati

            caricaContenuti(); // Invocazione Funzione Caricamento Contenuti AJAX
            
        }
        
    });      
    
    // Contatti - Recapiti
    
    $("#recapiti_marker").on("click", function() { // Al click sul marker 
    
        $("#recapiti").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#recapiti").addClass("animated zoomIn"); // "
        
    });
    $("#recapiti .selettore li").hover(function() { // Al passaggio del mouse
        
        $(".recapito", this).removeClass("occulta"); // Mostra il recapito

    }, function() { // All'uscita nascondi

        $(".recapito", this).addClass("occulta");
        
    });
    $("#recapiti .selettore .indirizzo").hover(function() { // Al passaggio del mouse
    
        selezionato = this;
        
        setTimeout(function() {
            
            $(".recapito", selezionato).addClass("animated flipInY"); // Anima Indirizzo        
            
        }, 300);
        
    }, function() {  // All'uscita nascondi
        
        $(".recapito", this).removeClass("animated flipInY");       
        
    });
    $("#recapiti .selettore .telefono").hover(function() { // Anima Telefono    
        
        selezionato = this;
        
        setTimeout(function() {
    
            $(".recapito", selezionato).addClass("animated swing"); 
        
        }, 300);      
        
    }, function() { // Al passaggio del mouse
        
        $(".recapito", this).removeClass("animated swing");     
        
    });
    $("#recapiti .selettore .email").hover(function() { // Al passaggio del mouse
    
        selezionato = this;
        
        setTimeout(function() {
        
            $(".recapito", selezionato).addClass("animated rotateIn");  // Anima E-Mail        
            
        }, 300);     
        
    }, function() {  // All'uscita nascondi
        
        $(".recapito", this).removeClass("animated rotateIn");     
        
    });

    // Contatti - Dove Siamo
    
    $("#dove_siamo_marker").on("click", function() { // Al click sul marker 
    
        $("#dove_siamo").removeClass("nascondi animated zoomOut"); // Mostra scheda
        $("#dove_siamo").addClass("animated zoomIn"); // "
        
    });    
    $("#dove_siamo .selettore li").hover(function() { // Al passaggio del mouse
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
        
        	$(".mezzo", this).removeClass("occulta"); // Mostra il recapito
		
		}

    }, function() { // All'uscita nascondi

        if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
		
			$(".mezzo", this).addClass("occulta");
		
		}
        
    });
    $("#dove_siamo .selettore .aeroporto").hover(function() { // Al passaggio del mouse
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
    
		  selezionato = this;
		  
		  setTimeout(function() {
			  
			  $("span i", selezionato).addClass("animated lightSpeedOut"); // Anima Indirizzo        
			  
		  }, 300);
		  setTimeout(function() {
			  
			  $("span i", selezionato).removeClass("animated lightSpeedOut"); // Anima Indirizzo 
			  $("span i", selezionato).addClass("sfuma animated pulse"); // Anima Indirizzo        
			  
		  }, 1300);
		
		}
        
    }, function() {  // All'uscita nascondi
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
        
        	$("span i", this).removeClass("sfuma animated lightSpeedOut pulse");   
			
		}
        
    });
    $("#dove_siamo .selettore .auto").hover(function() { // Anima Telefono    
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
        
		  selezionato = this;
		  
		  setTimeout(function() {
	  
			  $("span i", selezionato).addClass("animated fadeOutLeft"); 
		  
		  }, 300); 
		  setTimeout(function() {
	  
			  $("span i", selezionato).removeClass("animated fadeOutLeft"); 
			  $("span i", selezionato).addClass("sfuma animated pulse"); 
		  
		  }, 1200);      
		
		}
        
    }, function() { // Al passaggio del mouse
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
        
        	$("span i", this).removeClass("sfuma animated fadeOutLeft pulse");     
		
		}
        
    });
    $("#dove_siamo .selettore .metro").hover(function() { // Al passaggio del mouse
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
    
		  selezionato = this;
		  
		  setTimeout(function() {
		  
			  $("span i", selezionato).addClass("animated zoomOut");  // Anima E-Mail   
			  
		  }, 300); 
		  setTimeout(function() {
		  
			  $("span i", selezionato).removeClass("animated zoomOut");  // Anima E-Mail   
			  $("span i", selezionato).addClass("sfuma animated pulse");  // Anima E-Mail         
			  
		  }, 1000);  
		
		}
        
    }, function() {  // All'uscita nascondi
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo allora anima
        
        	$("span i", this).removeClass("sfuma animated zoomOut pulse");  
		
		}
        
    });
	$("#dove_siamo .selettore li").on("click tap", function() { // Al click del selettore
	
		if (!$(this).hasClass("selettore_attivo")) { // Se non c'è nessun selettore attivo
		
			$(this).siblings().removeClass("selettore_attivo"); // Deseleziona elementi precedentemente attivi
			$(".indicazioni").slideUp(); // Nascondi tutte le indicazioni
			$(this).addClass("selettore_attivo"); // Seleziona elemento
			
			// Deseleziona adiacenti
			
			$(this).siblings().removeClass("evidenzia_3");
			$(this).siblings().find(".mezzo").addClass("occulta");	
			$(this).siblings().find("span").children().removeClass("sfuma animated pulse");  
			
			// Seleziona con animazione
				
			$(this).addClass("evidenzia_3");
			$(".mezzo", this).removeClass("occulta");	
			$("span i", this).addClass("sfuma animated pulse");  	
			
			// Controllo Indicazioni
			
			if ($(this).hasClass("aeroporto")) { // Se aeroporto è attivo
				
				$(".indicazioni.aeroporto").slideDown();	 // Mostra indicazioni

			} else if ($(this).hasClass("auto")) { // Altrimenti Se auto è attivo
				
				$(".indicazioni.auto").slideDown();	// Mostra indicazioni
				
			} else if ($(this).hasClass("metro")) { // Altrimenti Se metro è attivo
				
				$(".indicazioni.metro").slideDown();	 // Mostra indicazioni
				
			}
					
		} else { // Altrimenti
		
			$(".indicazioni").slideUp(); // Nascondi indicazioni
			$(this).removeClass("selettore_attivo"); // Deseleziona elemento
			
			// Seleziona con animazione
				
			$(this).removeClass("evidenzia_3");
			$(".mezzo", this).addClass("occulta");	
			$("span i", this).removeClass("sfuma animated pulse");  

		}
				
	});
    
    // Chiudi
    
    $(".chiudi").on("click tap", function() { // Al click del pulsante
        
        var cliccato = $(this); // Dichiarazione ed Inizializzazione variabile elemento cliccato
               
        $(this).parent().removeClass("animated zoomIn"); // Chiudi scheda
        $(this).parent().addClass("animated zoomOut"); // "
           
        setTimeout(function() {
            
            cliccato.parent().addClass("nascondi"); // "
            
        }, 500);
        
        if ($(this).parent(".scheda.secondo_livello").length > 0) { // Se siamo in una scheda di secondo livello
            
            $(this).siblings("#container_contenuti").remove(); // Allora alla chiusura rimuovi contenuti
            
        }
          
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
    
    // Menu Contestuale
   
    $(".menu_contestuale a").on("click tap", function(e) { // Al click di della voce

        e.preventDefault(); // Disabilita funzionalità standard link
        caricaContenutiClick($(this)); // Invocazione Funzione Caricamento Contenuti AJAX
        
        return false; // Blocca il refresh

    });
        
}


// Funzione Transizioni Schede

function transizioniSchede() {
    
    // Dichiarazione Variabili
    
    var selezionato = null; // Inizializzazione variabile selettore selezionato
    var rollover = null; // Inizializzazione Variabile Immagine Rollover

    // Inizializzazione Variabile coordinate postazione

    var postazione = [
        '<a-animation attribute="rotation" from="0 0 0" to="-15 135 -46" easing="ease-out" dur="3000"></a-animation>', // Fabio
        '<a-animation attribute="rotation" from="0 0 0" to="2 135 -1" easing="ease-out" dur="3000"></a-animation>', // Radeesh
        '<a-animation attribute="rotation" from="0 0 0" to="6 110 15" easing="ease-out" dur="3000"></a-animation>', // Claudio
        '<a-animation attribute="rotation" from="0 0 0" to="2 83 15.2" easing="ease-out" dur="3000"></a-animation>', // Luca
        '<a-animation attribute="rotation" from="0 0 0" to="12 58 20" easing="ease-out" dur="3000"></a-animation>', // Giulio
        '<a-animation attribute="rotation" from="0 0 0" to="-2 25 -10" easing="ease-out" dur="3000"></a-animation>' // Fabrizio
    ];
    
    // Menu Contestuale
    
    $(".menu_contestuale a").each(function() { // Per ogni voce del menu contestuale
        
        if ($(this).attr("rel") === $("#container_contenuti").attr("rel")) { // Se la voce corrisponde al contenuto visualizzato

            $(this).addClass("menu_contestuale_attivo"); // Allora seleziona voce
            $("li", this).addClass("menu_contestuale_attivo"); // "
         
        } else { // Altrimenti deseleziona
            
            $(this).removeClass("menu_contestuale_attivo");     
            $("li", this).removeClass("menu_contestuale_attivo"); 
               
        }
        
    }); 
    
    // Selettori
 
    $(".selettore a").hover(function() { // Al passaggio del mouse
          
        selezionato = this; // Inizializzazione variabile selettore selezionato
        
        rollover = $("li", this).parent().attr("rel") + "_1"; // Assegna l'immagine di rollover

        // Anima
        
        $("li", this).addClass("ruota"); // Ruota immagine
        $("li", this).addClass(rollover); // Sostituisci foto
        
        setTimeout(function () {
            
            $("li span:first-child", selezionato).removeClass("occulta"); // Mostra nome
        
        }, 500);
        setTimeout(function () {
            
            $("li span:nth-child(2)", selezionato).removeClass("occulta"); // Mostra nome
            $("li span:nth-child(2)", selezionato).addClass("animated pulse"); // Mostra nome

        }, 700);
        setTimeout(function () {
            
            $("li span:last-child", selezionato).removeClass("occulta"); // Mostra nome
            $("li span:last-child", selezionato).addClass("animated slideInUp"); // Mostra nome

        }, 1000);
        
    }, function() {
        
        $("li span", this).addClass("occulta"); // Nascondi nome
        $("li span", this).removeClass("animated pulse slideInUp"); // Rimuovi animazione nome
        $("li", this).removeClass(rollover); // Sostituisci foto     
        $("li", this).removeClass("ruota"); // Ruota immagine

        selezionato = null; // Dissocia selettore selezionato dall'evento
       
    });
    $(".selettore a").on("click tap", function() { // Al click del selettore
        
        var cliccato = $(this); // Dichiarazione ed Inizializzazione variabile elemento cliccato
               
        $(this).parents(".secondo_livello").removeClass("animated zoomIn"); // Chiudi scheda
        $(this).parents(".secondo_livello").addClass("animated zoomOut"); // "
           
        setTimeout(function() {
            
            cliccato.parents(".scheda.secondo_livello").addClass("nascondi"); // "
            
        }, 500);
        
        if ($(this).parents(".scheda.secondo_livello").length > 0) { // Se siamo in una scheda di secondo livello
            
            $(this).parents(".chiudi").siblings("#container_contenuti").remove(); // Allora alla chiusura rimuovi contenuti
            
        }
        
        // Animazione Navigazione
        
        switch($(this).attr("rel")) { // Controllo Selezione
            
            case "fabio": // Se è stata selezionata la postazione di Fabio
        
                $("#camera").append(postazione[0]); // Sposta la visuale sulla postazione
                
                break;
                
            case "radeesh": // Se è stata selezionata la postazione di Radeesh
        
                $("#camera").append(postazione[1]); // Sposta la visuale sulla postazione
                
                break;
                
            case "claudio": // Se è stata selezionata la postazione di Claudio
        
                $("#camera").append(postazione[2]); // Sposta la visuale sulla postazione
                
                break;
                
            case "luca": // Se è stata selezionata la postazione di Luca
        
                $("#camera").append(postazione[3]); // Sposta la visuale sulla postazione
                
                break;
                
            case "giulio": // Se è stata selezionata la postazione di Giulio
        
                $("#camera").append(postazione[4]); // Sposta la visuale sulla postazione
                
                break;
                
            case "fabrizio": // Se è stata selezionata la postazione di Fabrizio
        
                $("#camera").append(postazione[5]); // Sposta la visuale sulla postazione
                
                break;
                           
        }
        
        $(".marker").on("stateadded", function() { // Al passaggio sul marker
		
		    $(this).siblings().attr("opacity", "0.2"); // Metti in secondo piano gli altri
		
	    });
        //$("#chi_siamo_pagina").attr("fog", "type: exponential; color: #ccc; density: 0.00025"); // Aggiungi la nebbia alla scena
        
    });
        
    // Dati
    
    // Al caricamento anima in sequenza

    setTimeout(function() {    
    
        $(".elenco.dati li:first-child").addClass("animated pulse elenco_attivo");  
                
        inizializzaCounter($(".elenco.dati li:first-child .valore")); // Invocazione Funzione Inizializazione Counter
            
    }, 200);   
    setTimeout(function() {
        
        $(".elenco.dati li:nth-child(2)").addClass("animated pulse elenco_attivo");      
        
        inizializzaCounter($(".elenco.dati li:nth-child(2) .valore")); // Invocazione Funzione Inizializazione Counter
        
    }, 700);  
    setTimeout(function() {
        
        $(".elenco.dati li:nth-child(3)").addClass("animated pulse elenco_attivo");      
        
        inizializzaCounter($(".elenco.dati li:nth-child(3) .valore")); // Invocazione Funzione Inizializazione Counter
        
    }, 900);  
    setTimeout(function() {
        
        $(".elenco.dati li:nth-child(4)").addClass("animated pulse elenco_attivo");  
        
        inizializzaCounter($(".elenco.dati li:nth-child(4) .valore")); // Invocazione Funzione Inizializazione Counter
        
    }, 1100);  
    setTimeout(function() {
        
        $(".elenco.dati li:nth-child(5)").addClass("animated pulse elenco_attivo");    
        
        inizializzaCounter($(".elenco.dati li:nth-child(5) .valore")); // Invocazione Funzione Inizializazione Counter
        
    }, 1300);  
    setTimeout(function() {
        
        $(".elenco.dati li:last-child").addClass("animated pulse elenco_attivo");  
        
        inizializzaCounter($(".elenco.dati li:last-child .valore")); // Invocazione Funzione Inizializazione Counter
        
    }, 1500);

    // Documento
    
    $(".documento a").hover(function() { // Al passaggio del mouse sul link topico
                
        $(".documento a li span:first-child").addClass("nascondi"); // Mostra download
        $(".documento a li span:last-child").removeClass("nascondi"); // "
        
    }, function() { // All'uscita nascondi
        
        $(".documento a li span:first-child").removeClass("nascondi");
        $(".documento a li span:last-child").addClass("nascondi");
        
    });    
    
}


// Funzione Animazione Elementi su scrolling

function animaElementi(el) {
            
    // Elenchi 
           
    if (el.mcs.draggerTop >= ($(".elenco").offset().top - $(".elenco").height())) { // Se lo scrolling ha raggiunto i punti <--- MENO LA RISPETTIVA ALTEZZA / EVITA IL RITARDO DELL'ANIMAZIONE
        
        // Allora animali
        
        $(".elenco:not('.documento, .selettore, .dati') li:first-child").addClass("animated pulse elenco_attivo");  
        
        setTimeout(function() {
            
            $(".elenco:not('.documento, .selettore, .dati') li:nth-child(2)").addClass("animated pulse elenco_attivo");      
            
        }, 700);  
        setTimeout(function() {
            
            $(".elenco:not('.documento, .selettore, .dati') li:last-child").addClass("animated pulse elenco_attivo");      
            
        }, 1000);

    }
        
}


// Funzione Animazione Elementi Referenze su scrolling

function animaElementi_1(el) {
                
    // Elenchi 
    
    $("#referenze .selettore li").each(function(index, elemento) {
                          
        if (el.mcs.draggerTop >= ($(elemento).offset().top - $(elemento).height())) { // Se lo scrolling ha raggiunto i punti <--- MENO LA RISPETTIVA ALTEZZA / EVITA IL RITARDO DELL'ANIMAZIONE
            
            // Allora animali
            
            $(elemento).prev().addClass("animated zoomIn");  
            
            setTimeout(function() {
                
                $(elemento).addClass("animated zoomIn");  
                
            }, 200);
            setTimeout(function() {
                
                $(elemento).next().addClass("animated zoomIn");  
                
            }, 500);
    
        }
    
    });
        
}


// Funzione Navigazione

/*function navigazione() {
	
	// Dichiarazione ed Inizializzazione Variabili
	
	// Dichiarazione ed Inizializzazione area sensibile movimento libero

	var area = $(window).width() / 4; 
	var puntatore = true; // Controllo visibilità mouse
	var scena = document.querySelector('a-scene'); // Oggetto Scena
	var camera = document.querySelector("a-entity[camera]").components.camera.camera; // Oggetto Camera
	var renderer = THREE.WebGLRenderer; // Oggetto rendering 
	var movimentoFree = false; // Selettore movimento libero
	var long = 0; // Longitudine
	var lat = 0; // Latitudine
	var oldX = 0; // Vecchia coordinata X
	var oldY = 0; // Vecchia coordinata Y
	var oldLong = 0; // Vecchia longitudine
	var oldLat = 0; // Vecchia latitudine
	
	// Sposta la camera alle coordinate attualmente visualizzate
			
	lat = Math.max(-85, Math.min(85, lat));
	camera.x = 500 * Math.sin(THREE.Math.degToRad(90 - lat)) * Math.cos(THREE.Math.degToRad(long));
	camera.y = 500 * Math.cos(THREE.Math.degToRad(90 - lat)) * Math.sin(THREE.Math.degToRad(long));

	camera.lookAt(camera); // Imposta la visualizzazione
	camera.updateProjectionMatrix();
	//renderer(scena, camera); // calling again render function	 	
	
	$(".a-canvas").hover(function() { // All'entrata del mouse
	
		puntatore = false; // Imposta il puntatore come nascosto			
	
	}, function() { // All'uscita
		
		puntatore = true; // Imposta il puntatore come nascosto		
		
	});
	$(".a-canvas").on("mousemove", function(event) { // Al movimento del mouse
	
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
			
				
	});
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
	
}
*/
/*function render(lat, long) {
	
	var scena = document.querySelector('a-scene'); // Oggetto Scena
	var camera = document.querySelector("a-entity[camera]").components.camera.camera; // Oggetto Camera
	var renderer = THREE.WebGLRenderer; // Oggetto rendering

	console.log("ok");
	//requestAnimationFrame(render);	
	
	// Sposta la camera alle coordinate attualmente visualizzate
				
	lat = Math.max(-85, Math.min(85, lat));
	camera.x = 500 * Math.sin(THREE.Math.degToRad(90 - lat)) * Math.cos(THREE.Math.degToRad(long));
	camera.y = 500 * Math.cos(THREE.Math.degToRad(90 - lat)) * Math.sin(THREE.Math.degToRad(long));

	camera.lookAt(camera); // Imposta la visualizzazione
	renderer(scena, camera); // calling again render function	
	camera.updateProjectionMatrix();
}

*/
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
        
    } else if ($("#chi_siamo").length > 0) { // Se siamo su laboratorio-a
        
       pag = "chi_siamo";     
        
    } else if ($("#fabio").length > 0) { // Se siamo su fabio
        
       pag = "fabio_landing";     
        
    } else if ($("#radeesh").length > 0) { // Se siamo su radeesh
        
       pag = "radeesh_landing";     
        
    } else if ($("#claudio").length > 0) { // Se siamo su claudio
        
       pag = "claudio_landing";     
        
    } else if ($("#luca").length > 0) { // Se siamo su luca
        
       pag = "claudio_landing";     
        
    } else if ($("#giulio").length > 0) { // Se siamo su giulio
        
       pag = "giulio_landing";     
        
    } else if ($("#fabrizio").length > 0) { // Se siamo su fabrizio
        
       pag = "fabrizio_landing";     
        
    } else if ($("#referenze_pagina").length > 0) { // Se siamo su referenze
        
       pag = "referenze";     
        
    } else if ($("#contatti_pagina").length > 0) { // Se siamo su contatti
        
       pag = "contatti";     
        
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
            
        case "chi_siamo": // Se siamo su laboratorio-a
            
            $("#breadcrumb").addClass("minimap_chi_siamo"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_chi_siamo"); // Allora segna menu su minimappa 
            
            break;   
            
        case "fabio_landing": // Se siamo su Fabio
            
            $("#breadcrumb").addClass("minimap_fabio"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_fabio"); // Allora segna menu su minimappa 
            
            break; 
            
        case "radeesh_landing": // Se siamo su radeesh
            
            $("#breadcrumb").addClass("minimap_radeesh"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_radeesh"); // Allora segna menu su minimappa 
            
            break;
        
        case "claudio_landing": // Se siamo su claudio
            
            $("#breadcrumb").addClass("minimap_claudio"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_claudio"); // Allora segna menu su minimappa 
            
            break;
            
        case "luca_landing": // Se siamo su luca
            
            $("#breadcrumb").addClass("minimap_luca"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_luca"); // Allora segna menu su minimappa 
            
            break;
            
        case "giulio_landing": // Se siamo su giulio
            
            $("#breadcrumb").addClass("minimap_giulio"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_giulio"); // Allora segna menu su minimappa 
            
            break;
            
        case "fabrizio_landing": // Se siamo su fabrizio
            
            $("#breadcrumb").addClass("minimap_fabrizio"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_fabrizio"); // Allora segna menu su minimappa 
            
            break;
			
		case "referenze": // Se siamo su referenze
            
            $("#breadcrumb").addClass("minimap_chi_siamo"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_chi_siamo"); // Allora segna menu su minimappa 
            
            break;
			
		case "contatti": // Se siamo su contatti
            
            $("#breadcrumb").addClass("minimap_chi_siamo"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_chi_siamo"); // Allora segna menu su minimappa 
            
            break;
        
        default: // Standard
        
            $("#breadcrumb").addClass("minimap_home"); // Aggiorna il breadcrumb
            $("#mappa_breadcrumb .marker").addClass("marker_home"); // Allora segna home su minimappa    
        
    }  
    
}


// Funzione Caricamento Contenuti AJAX

function caricaContenuti() {
    
    if ($(".scheda.secondo_livello").length > 0) { // Solo se siamo in una pagina di secondo livello
   
        var urlPagina = "include/" + $(".scheda.secondo_livello").attr("rel") + ".php"; // Dichiarazione ed inizializzazione variabile pagina invocata
    
        contenutiAjax(urlPagina); // Invocazione Funzione iniezione Contenuti AJAX 
        
    }
    
}


// Funzione Caricamento Contenuti AJAX al Click

function caricaContenutiClick(cliccato) {
    
    var urlPagina = cliccato.attr('href'); // Dichiarazione ed inizializzazione variabile pagina invocata
    
    contenutiAjax(urlPagina); // Invocazione Funzione iniezione Contenuti AJAX    
    
}


// Funzione iniezione Contenuti AJAX  

function contenutiAjax(urlPagina) {
    
    // Dichiarazione Variabili
    
    var href = ""; // Inizializzazione Variabile URL attuale
    var path = ""; // Inizializzazione Variabile URL Finale
    var pathFinale = ""; // "
    
    // Controllo Contenuti
    
    if ($("#container_contenuti").length > 0) { // Se è già presente un contenuto precedentemente caricato
    
        $("#container_contenuti").remove(); // Allora rimuovilo        
        
    }

    // Chiamata AJAX
    
    $.ajax({
  
        url: urlPagina + '?get=ajax', // URL da invocare
        success: function(data) { // A chiamata avvenuta
            
            $(".scheda.secondo_livello .sfondo_scheda").before($(data).addClass("animated slideInUp")); // Inietta il contenuto della pagina nella scheda con transizione
            inizializzaScroll(); // Reinizializza Custom Scroll
            video(); // Reinizializza Funzione Video dopo chiamata
            transizioniSchede(); // Reinizializza Transizioni Schede dopo chiamata
  
        }

    });
    
    // Controllo URL
    
    if (($(".scheda.secondo_livello").length > 0) && (urlPagina !== window.location.href)) { // Se siamo in una pagina di secondo livello e se la path caricata è diverso dall'URL visualizzato
    
        href = window.location.href.replace(/#.*$/, ''); // Assegnazione radice URL attuale
        urlPagina = "#" + urlPagina.replace("include/", ""); // Assegnazione deep link
        path = href + urlPagina; // Assegnazione URL finale
        
        // Assegnazione URL finale in modalità SEF senza l'estensione
        
        pathFinale = path.replace(/.php([^/.php]*)$/,'$1', "");
  
        window.history.pushState({ // Allora aggiorna l'URL
            
            path: path // Assegna l'attuale path filtrando l'URL e convertendolo in un deep link eliminando i precedenti
            
        }, '', pathFinale); // Imposta l'URL aggiornato 

    }
    
                
    // Sovrascrittura funzione Back browser e recupero contenuto precedente

    $(window).bind('popstate', function() { // Al cambio di stato del browser
  
        // Chiamata AJAX
  
        $.ajax({
    
            url: location.pathname + '?get=ajax', // Recupera il precedente URL
            success: function(data) { // A chiamata avvenuta
      
                $(".scheda.secondo_livello .sfondo_scheda").before($(data).addClass("animated slideInUp")); // Inietta il contenuto della pagina nella scheda con transizione
                inizializzaScroll(); // Reinizializza Custom Scroll
                video(); // Reinizializza Funzione Video dopo chiamata
                transizioniSchede(); // Reinizializza Transizioni Schede dopo chiamata
    
            }
  
        });

    });
    
}


// Funzione Video

function video() {
        
    $(".video_intro").on("click tap", function() { // Al click sul video

        $(this)[0].play(); // Avvia il video    
        $(this).removeClass("sopra"); // Rimuove transizioni
        
    }); 

}


// Funzione Validazione Form

function validaInviaForm() {
    
    $("#invia").on("click tap", function(e) { // All'invio del form
    
        e.preventDefault(); // Disabilita funzione di default dell'elemento
    
        var campi = []; // Dichiarazione Vettore campi form
            
        if ($("#form_contatti input[required], #form_contatti textarea[required]").val().length === 0) { // Se i campi richiesti risultano ancora vuoti
            
            $("#form_contatti input[required], #form_contatti textarea[required]").filter(function() { // Allora per ogni campo richiesto
                
                $(this).siblings().addClass("richiesto_invalido"); // All'etichetta corrispondente segnala l'errore
                
                return !this.value; // Restituisci i campi non compilati
                
            }).addClass("invalido"); // Al campo corrispondente segnala l'errore
                        
        } else { // Altrimenti invia
            
            // Assegna i campi compilati
            
            campi = [$("#nome").val(), $("#cognome").val(), $("#telefono").val(), $("#email").val(), $("#messaggio").val()];
            
            // Chiamata AJAX
            
            $.post("include/form.php", { 
            
                nome: campi[0], 
                cognome: campi[1],
                telefono: campi[2],
                email: campi[3],
                messaggio: campi[4],
                
            }, function(data) { // A chiamata avenuta 
	 
                $('#messaggio_form').html(data).slideDown(); // Output messaggio con animazione
                
                setTimeout(function() {
                
                    $("#messaggio_form").slideUp(); // Nascondi dopo 3 secondi
                    
                }, 3000); 
                
	            $('#form_contatti')[0].reset(); // Resetta i campi del form
                                    
            });
            
            $("#container_recapiti").mCustomScrollbar("scrollTo", "bottom", { // Scrolla in fondo ai contenuti
                
                scrollEasing: "easeOut" // Anima lo scrolling
            
            });
            
        }
        
        return false; // Blocca il refresh
        
    });    
    
}


// Funzione Inizializza Mappa

function mappaDoveSiamo() {
    
  // Dichiarazione Variabili
  
  var luogo = new google.maps.LatLng(45.4477114,9.1932925); // Posizione

  // Inizializzazione Oggetto Stile
  
  var stileMappa = [
      {
        "featureType": "poi",
        "stylers": [
          { "color": "#14A3A7" }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "color": "#F48E4E" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "color": "#A75725" }
        ]
      },{
      }
    ];
    
  // Dichiarazione ed Istanziazione oggetto mappa con assegnazione stile e nome

  var stilizzata = new google.maps.StyledMapType(stileMappa, {
        
        name: "Laboratorio-a"
        
  });
  var opzioniMappa = {
	  
    zoom: 18, // Livello Zoom
    center: luogo, // Centro
	disableDefaultUI: true, // Disabilita UI
    mapTypeControlOptions: {
      
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, stileMappa] // Tipo di Visualizzazione
    
	}
    
  };
  var mappa = new google.maps.Map(document.getElementById('mappa'), opzioniMappa);
 
  //Assegnazione ID mappa ad elemento ed output
  
  mappa.mapTypes.set('stile_mappa', stilizzata);
  mappa.setMapTypeId('stile_mappa');
 
  // Contenuto Finestra informativa
	
  var contentString = '<div id="content">' +
	  '<div id="siteNotice">' +
	  '</div>' +
	  '<img id="logo_mappa" src="img/logo.png" alt="Laboratorio-a">' +
	  '</img>';

  // Finestra informativa
  
  var infowindow = new google.maps.InfoWindow({
	  
	content: contentString, // Imposta contenuto
	maxWidth: 210
    
  });

  // Marker

  var marker = new google.maps.Marker({
	  
	position: luogo,
	map: mappa,
	title: 'Laboratorio-a'
	
  });
  
  marker.addListener('click', function() { // Al click del marker
	
	infowindow.open(mappa, marker); // Apri finestra informativa
	
  });
  	  
}

//-->