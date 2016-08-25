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
        <script type="text/javascript" src="js/antispam.js" async defer> <!--Anti-Spam-->
		</script>

        <!--Fine Inclusione JavaScript-->
        
		<!--Inizio Inclusione CSS-->

		<link rel="stylesheet" type="text/css" href="<?php echo $siteurl; ?>css/style_lab.css"> <!--CSS Main-->
        <link rel="icon" type="image/png" href="favicon.png" /> <!--FavIcon-->
	
    	<!--Fine Inclusione CSS-->
	
    </head>
    
    <!--Fine Head-->
    
    <!--Inizio Body-->

	<body class="glitch-transition animated fadeIn">
    
        <!--Inizio Ink Transition-->
    
        <main class="cd-main-content">
        	
            <!--Inizio Container-->
    
            <div id="container">
            
                <?php 
                
                 include("include/ui.php"); // Inclusione Interfaccia Utente
                 
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
                      
                      case "web":
                     
                      include("include/web.php");
                      
                      break;
                      
                      case "grafica":
                     
                      include("include/grafica.php");
                      
                      break;
                      
                      case "menu":
                     
                      include("include/menu.php");
                      
                      break;
                      
                      case "chi_siamo":
                     
                      include("include/chi_siamo.php");
                      
                      break;
                      
                      case "fabio_landing":
                     
                      include("include/fabio_landing.php");
                      
                      break;
                      
                      case "radeesh_landing":
                     
                      include("include/radeesh_landing.php");
                      
                      break;
                      
                      case "claudio_landing":
                     
                      include("include/claudio_landing.php");
                      
                      break;
                      
                      case "luca_landing":
                     
                      include("include/luca_landing.php");
                      
                      break;
                      
                      case "giulio_landing":
                     
                      include("include/giulio_landing.php");
                      
                      break;
                      
                      case "fabrizio_landing":
                     
                      include("include/fabrizio_landing.php");
                      
                      break;
                      
                      case "servizi":
                     
                      include("include/servizi.php");
                      
                      break;
                      
                      case "referenze":
                     
                      include("include/referenze.php");
                      
                      break;
                      
                      case "contatti":
                     
                      include("include/contatti.php");
                      
                      break;
                    
                   endswitch;
                  
                  /*-- END BODY ------------------------------------------------------------------*/
                           
                ?>
                
            </div>
    
            <!--Fine Container-->
            
        </main>
        
        <!--Fine Ink Transition-->
        
        <!--Inizio Livello Transizione-->
        
        <div class="cd-transition-layer" data-frame="25"> 
	
            <div class="bg-layer">
            </div>

        </div>
        
        <!--Inizio Livello Transizione-->
    
    </body>
    
    <!--Fine Body -->
    
    <?php 
		  
     	include ("include/scripts.php"); // Inclusione JavaScript
		
    ?>
    
</html>

<!--Fine HTML-->