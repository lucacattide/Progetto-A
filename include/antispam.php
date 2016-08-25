<?php

	// Invio Form
	
	$email_proprietario = "luca@laboratorio-a.it"; // Dichiarazione ed Inizializzazione Variabile Destinatario
	$oggetto = "Contatti | Laboratorio-a | Filtro Antispam"; // Dichiarazione ed Inizializzazione Variabile Oggetto
	
	// Controllo Input

	if ((!isset($_POST['risposta']))) { // Se non sono stati inseriti tutti i campi richiesti
    
        // Recupera dati dal formato JSON
        
        $dati = json_decode($_POST['risposta'], true); // Decodifica JSON in array associativo
		
		// Assegnazione campi
		
		$email_corpo = "Filtro Antispam:\n\n"; // Separatore Mail
		
		// Definizione corpo del messaggio

        $email_corpo .= print_r($dati, true);
		
		// Definizione Headers
        
        $headers = 'From: '.$email.' <'.$email.">\r\n".'Reply-To: '.$email."\r\n".'Return-Path: '.$email."\r\n".'Inviato da laboratorio-a (laboratorio-a.it) con (X-Mailer): PHP/' . @phpversion();
		 
        @mail($email_proprietario, $oggetto, $email_corpo, $headers); // Funzione Mail
		
	}

?>