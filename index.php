<?php 

	/* Navigazione */

	if (isset($_GET["pag"])) { // Se il parametro pagina è settato
	
		$pag = $_GET["pag"]; // Allora inizializzalo
		
	} else {  // Altrimenti inizializzazione default
		
		$pag = "";  
		
	}
	
	// Impostazione Timezone e Codifica Caratteri

	@date_default_timezone_set('Europe/Rome');
	@setlocale(LC_ALL, 'it_IT');
	@setlocale(LC_TIME, 'ita', 'it_IT.utf8');
	
	// Impostazioni HTACCESS
	
	//variabili per htaccess

	if( $pag == "prodotto" ) { // Se la pagina è
  
  		$siteurl = "http://localhost/progettoa/"; // Allora inizializza l'url
  
	} else { // Altrimenti inizializza default
 
  		$siteurl = "";
 
	} 
  
 	// Menu htaccess 
 
 	$siteurl_base = "http://localhost/progettoa/"; // Inizializzazione URL base

?>

<!doctype html> <!--Dichairazione DOCTYPE-->

<!--Inizio HTML-->

<html>

    <!--Inizio Head-->

	<head>

		<?php 
		
			include ("include/meta.php"); // Inclusione Meta Tags
			
		?>
        
		<!--Inizio Inclusione JavaScript-->
        
        <script type="text/javascript" src="js/aframe.min.js"> <!--A-Frame-->
		</script>
        
        <!--Fine Inclusione JavaScript-->
        
		<!--Inclusione CSS-->

		<link rel="stylesheet" type="text/css" href="<?php echo $siteurl; ?>css/style_lab.css"> <!--CSS Main-->
        <link rel="icon" type="image/png" href="favicon.png" /> <!--FavIcon-->

	</head>
    
    <!--Fine Head-->
    
    <!--Inizio Body-->

	<body>
        	
        <!--Inizio Container-->

		<div id="container">
        
			<?php 
            
             include("include/ui.php"); // Inclusione Intaerfaccia Utente
			 
              /*-- BODY -------------------------------------------------------------------*/
      
               switch($pag):
               
                 case "":
                 
                  include("include/landing.php");
                
                  break;
				  
				  case "landing":
                 
                  include("include/landing.php");
                  
                  break;
                 
                  case "home":
                 
                  include("include/home.php");
                  
                  break;
                
               endswitch;
              
              /*-- END BODY ------------------------------------------------------------------*/
                       
            ?>
            
        </div>

		<!--Fine Container-->

    </body>
    
    <!--Fine Body -->
    
    <?php 
		  
     	include ("include/scripts.php"); // Inclusione JavaScript
		
    ?>
    
</html>

<!--Fine HTML-->