<?php

	// Invio Form
	
	$email_proprietario = "luca@laboratorio-a.it"; // Dichiarazione ed Inizializzazione Variabile Destinatario
	$oggetto = "Contatti | Laboratorio-a"; // Dichiarazione ed Inizializzazione Variabile Oggetto
	
	// Controllo Input

	//if ((!isset($_POST['nome'])) || (!isset($_POST['cognome'])) || (!isset($_POST['email'])) || (!isset($_POST['messaggio'])) || (!isset($_POST['accettazione']))) { // Se non sono stati inseriti tutti i campi richiesti

		// RIATTIVARE L'INVOCAZIONE IN PRODUZIONE
		
		//chiudi('Errore: compilare tutti i campi del modulo'); // Allora lancia l'eccezione
        
   // } else { // Altrimenti
		
		// Assegnazione campi
		
        $nome = $_POST['nome'];
        $cognome = $_POST['cognome'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
		$messaggio = $_POST['messaggio'];
        
		// Validazione Input
		
		$pattern_nome_cognome = "#[a-zA-Zàèìòù' ]+#"; // Impostazione pattern di controllo nome e cognome
        $pattern_telefono = "#^[0-9]{5,15}$#"; // Impostazione pattern di controllo telefono
        $pattern_email = "#^[a-z0-9][_.a-z0-9-]+@([a-z0-9][0-9a-z-]+.)+([a-z]{2,4})#"; // Impostazione pattern di controllo email
		
		if (!@preg_match($pattern_nome_cognome, $nome)) { // Se l'input non rispetta la condizione
        
            $messaggio_errore .= "Inserire un nome valido"; // Allora errore
        
        }	
        
        if (!@preg_match($pattern_nome_cognome, $cognome)) { // Se l'input non rispetta la condizione
        
            $messaggio_errore .= "Inserire un cognome valido"; // Allora errore
        
        }
		
        if (!@preg_match($pattern_telefono, $telefono) && !empty($telefono)) { // Se l'input non è vuoto e non rispetta la condizione
        
            $messaggio_errore .= "Inserire un numero di telefono valido"; // Allora errore
        
        }	
        
        if (!@preg_match($pattern_email, $email)) { // Se l'input non rispetta la condizione
        
            $messaggio_errore .= "Inserire un indirizzo di posta elettronica valido"; // Allora errore
        
        }	
        
        if (@strlen($messaggio) < 2) { // Se il messaggio è più corto di 2 caratteri
        
            $messaggio_errore .= 'Inserire il testo del messaggio da inviare'; // Allora errore
        
        }
        		        
        if (@strlen($messaggio_errore) > 0) { // Se il messaggio di errore è stato prodotto
        
            chiudi($messaggio_errore); // Allora lancia l'eccezione
        
        }
        		
		$email_corpo = "Richiesta informazioni:\n\n"; // Separatore Mail
		
		// Definizione corpo del messaggio

        $email_corpo .= "Nome: ".@strip_tags(clean_stringa($nome))."\n";
        $email_corpo .= "Cognome: ".@strip_tags(clean_stringa($cognome))."\n";
        $email_corpo .= "Telefono: ".@strip_tags(clean_stringa($telefono))."\n";
        $email_corpo .= "E-Mail: ".@strip_tags(clean_stringa($email))."\n";
        $email_corpo .= "Messaggio: ".@strip_tags(clean_stringa($messaggio))."\n";
		
		// Definizione Headers
        
        $headers = 'From: '.$email.' <'.$email.">\r\n".'Reply-To: '.$email."\r\n".'Return-Path: '.$email."\r\n".'Inviato da laboratorio-a (laboratorio-a.it) con (X-Mailer): PHP/' . @phpversion();
		 
        if (@mail($email_proprietario, $oggetto, $email_corpo, $headers)) { // Funzione Mail
		
			echo "Messaggio inviato con successo.";
		
		}
		
	//}
	
	
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