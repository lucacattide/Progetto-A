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
    
    	<!-- Google Tag Manager -->
		
       <!-- <noscript>
        
        	<iframe src="//www.googletagmanager.com/ns.html?id=GTM-N2FH2T" height="0" width="0" style="display:none;visibility:hidden">
            </iframe>
            
        </noscript>

		<script>
		
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-N2FH2T');
            
        </script>-->

		<!-- End Google Tag Manager -->
    	
        <!--Inizio Container-->

		<div id="container">
        
			<?php 
            
             include ("include/banner_cookies.php"); // Inclusione Banner Cookies
             include("include/ui.php"); // Inclusione Intaerfaccia Utente
			 
              /*-- BODY -------------------------------------------------------------------*/
      
               switch($pag):
               
                 case "":
                 
                  include("include/landing.php");
                
                  break;
                 
                  case "cookies":
                 
                  include("include/cookies.php");
                  
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