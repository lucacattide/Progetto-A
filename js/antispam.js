// Funzione Widget Anti Spam

<!--

var rispostaJson = null; // Dichiarazione ed Inizializzazione Variabile Globale risposta JSON

// Dichiarazione ed Inizializzazione Callbacks

var token = function(risposta) { // Invio Validazione ReCaptcha
    
    // Chiamata AJAX - Validazione
        
    $.post("https://www.google.com/recaptcha/api/siteverify", { // URL
    
        secret: "6LcLeygTAAAAABoZ9gBre7W5E-z_gpDdkOHNtRKw", // Chiave
        response: risposta // Token Utente
        
    }, function(data) { // A chiamata avenuta 

        rispostaJson = data; // Assegna risposta JSON

    });
    
    // Chiamata AJAX - Risposta
    
    $.post("include/antispam.php", { // Script
        
        risposta: rispostaJson // Risposta Validazione
        
    });    

};
var antiSpam = function() { // Inizializzazione Widget
        
    grecaptcha.render('antispam', { // Rendering Widget
        
        'sitekey' : '6LcLeygTAAAAAGI2qwTeM4P9i3SpzB7H8vyKgVj-', // Chiave Amministratore
        'callback' : token // Callback Validazione

    });   
        
}; 

document.getElementById("invia").addEventListener("click", function() { // Al click del pulsante

    grecaptcha.reset(antiSpam); // Reinizializza il widget

});

//-->