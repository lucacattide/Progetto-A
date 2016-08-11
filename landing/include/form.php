<?php

	// Invio Form
	
	$email_proprietario = "info@laboratorio-a.it, luca@laboratorio-a.it"; // Dichiarazione ed Inizializzazione Variabile Destinatario
	$oggetto = "Notifiche | Progetto A"; // Dichiarazione ed Inizializzazione Variabile Oggetto
	$corpo_destinatario = "Laboratorio-a\n\nGrazie per esserti iscritto alla newsletter.\nRiceverai presto novità ed aggiornamento su Progetto A.\n\nProssimamente su laboratorio-a.it\n_____________________\nIl Team di Laboratorio-a"; // Dichiarazione ed inizializzazione corpo email destinatario
	
	// Controllo Input

	if ((!isset($_POST['email'])) || (!isset($_POST['accettazione']))) { // Se non sono stati inseriti tutti i campi richiesti

		// RIATTIVARE L'INVOCAZIONE IN PRODUZIONE
		
		//chiudi('<div id="banner_email"><p>Errore: compilare tutti i campi del modulo</p></div>'); // Allora lancia l'eccezione
        
    } else { // Altrimenti
		
		// Assegnazione campi
		
        $email = $_POST['email'];
		
		// Validazione Input
		
		$pattern_email = "#^[a-z0-9][_.a-z0-9-]+@([a-z0-9][0-9a-z-]+.)+([a-z]{2,4})#"; // Impostazione pattern di controllo email
		
		if (!@preg_match($pattern_email, $email)) { // Se l'input non rispetta la condizione
        
            $messaggio_errore .= "<div id='banner_email'><p>Inserire un indirizzo di posta elettronica valido</p></div>"; // Allora errore
        
        }	
		        
        if (@strlen($messaggio_errore) > 0) { // Se il messaggio di errore è stato prodotto
        
            chiudi($messaggio_errore); // Allora lancia l'eccezione
        
        }
		
		$email_corpo = "Notifiche Progetto A:\n\n"; // Separatore Mail
		
		// Definizione corpo del messaggio

        $email_corpo .= "E-Mail: ".@strip_tags(clean_stringa($email))."\n";
		
		// Definizione Headers
        
        $headers = 'From: '.$email.' <'.$email.">\r\n".'Reply-To: '.$email."\r\n".'Return-Path: '.$email."\r\n".'Inviato da laboratorio-a (laboratorio-a.it) con (X-Mailer): PHP/' . @phpversion();
        $headers_destinatario = 'From: Laboratorio-a'.' <'.$email_proprietario.">\r\n".'Reply-To: '.$email_proprietario."\r\n".'Return-Path: '.$email_proprietario."\r\n";
		 
        if (@mail($email_proprietario, $oggetto, $email_corpo, $headers) && @mail($email, $oggetto, $corpo_destinatario, $headers_destinatario)) { // Funzione Mail
		
			echo "<div id='banner_email'><p>Indirizzo <span class='straniere'>e-mail</span> inviato correttamente.<br />Riceverai a breve una notifica di avvenuta registrazione.</p></div>";
		
		}
		
	}
	
	
	// Funzione Formattazione Mail
    
    function clean_stringa($stringa) {
    
      $escluse = array("content-type", "bcc:", "to:", "cc:", "href"); // Dichiarazione ed Inizializzazione intestazioni
    
      return @str_replace($escluse, "", $stringa); // Restituisci la stringa formattata
    
    }
    
   
    // Funzione Gestione Eccezioni

    function chiudi($errore) {
        
        // Messaggio di errore
  
        echo $errore;
 
        die(); // Termina la sessione
 
    }

?>