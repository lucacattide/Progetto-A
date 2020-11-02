<!--Inizio Logo--->

<a href="index.php?pag=home" title="Laboratorio-a" tabindex="0">

    <aside id="logo">
    
        <h7> <!--Titolo-->
        
            Logo
        
        </h7>
    
    </aside>

</a>

<!--Fine Logo--->

<!--Inizio Livestream--

<aside id="live">

	<h7> <!--Titolo--
    
    	Live
        
    </h7>
    
    <div id="pulsante_live"> <!--Pulsante--
    	
        <span>
        </span>
    
    </div>
    
    <h2 id="live_titolo"> <!--Etichetta--
    
    	Live
    
    </h2>
    	

</aside>

<!--Fine Livestream-->

<!--Inizio Bookmarks-->

<aside id="preferiti">

	<h7> <!--Titolo-->
    
    	Preferiti
    
    </h7>
    
    <a id="preferiti_link" href="#" rel="sidebar" title="Aggiungi Laboratorio-a ai tuoi Preferiti" tabindex="1"> <!--Link-->
    
    	Aggiungi ai Preferiti
    
    </a>
    
    <i class="fa fa-bookmark fa-3x" aria-hidden="true"> <!--Icona-->
    </i>

</aside>

<!--Fine Bookmarks-->

<!--Inizio Mappa del Sito-->

<!--Inizio Icona-->

<aside id="icona_mappa_sito">

	<h7>
    
    	Mappa del Sito
        
    </h7>

	<!--Inizio Icona-->

    <button class="c-hamburger c-hamburger--htx">
    
      <span>
        
        toggle menu
        
      </span>
      
    </button>
    
    <!--Fine Icona-->
    
    <div class="icona_sfondo_1"> <!--Sfondo-->
    </div>

</aside>

<!--Fine Icona-->

<nav id="mappa_sito">

	<h7>
    
    	Mappa del Sito
        
    </h7>
    
    <!--Inizio Home-->
    
    <div class="mappa_sito_sfondo pannello_1">
    
    	<ul class="container_voci">
        
        	<a class="sottolineata <?php if( $pag == "home"): echo "selezionato"; endif;  ?>" href="index.php?pag=home" title="" tabindex="a">
            
                <li class="straniere sezione <?php if( $pag == "home"): echo "sezione_attiva"; endif;  ?>">
                    
                    Home
                    
                </li>
            
            </a>
            <a class="<?php if( $lang == "ita"): echo "selezionato"; endif;  ?>" href="<?php "index.php?pag=".$_GET["pag"]."?lang=ita" ?>" title="">
            
                <li class="prima_voce">
                
                    Italiano
                
                </li>
                
            </a>
            <a class="<?php if( $lang == "eng"): echo "selezionato"; endif;  ?>" href="<?php "index.php?pag=".$_GET["pag"]."?lang=eng" ?>" title="">
            
                <li>
                
                    Inglese
                
                </li>
                
            </a>
            <a class="spaziatura" href="http://www.facebook.com/laboratorioa" title="Segui Laboratorio-a su Facebook" target="new">            
             
                <li>
                    
                    Facebook
                    
                </li>
                
            </a>
            <a class="spaziatura <?php if( $pag == "privacy"): echo "selezionato"; endif;  ?>" href="index.php?pag=privacy" title="">
             
                <li class="straniere">
                    
                    Cookies / Privacy
                    
                </li>
            
            </a>
            
        </ul>
            
    </div>
    
    <!--Fine Home-->
    
    <!--Inizio Chi Siamo-->
    
    <div class="mappa_sito_sfondo pannello_2">
    
    	<ul class="container_voci">
        
        	<a class="sottolineata <?php if( $pag == "chi_siamo"): echo "selezionato"; endif;  ?>" href="index.php?pag=chi_siamo" title="" tabindex="b">
            
                <li class="sezione <?php if( $pag == "chi_siamo"): echo "sezione_attiva"; endif;  ?>">
                    
                    Chi Siamo
                    
                </li>
            
            </a>
            <a class="<?php if( $pag == "laboratorio_a"): echo "selezionato"; endif;  ?>" href="index.php?pag=laboratorio_a" title="">
            
                <li class="prima_voce">
                    
                    Laboratorio-a
                                    
                </li>
                
            </a>
            <li>
            	
                <a class="spaziatura <?php if( $pag == "team"): echo "selezionato"; endif;  ?>" href="index.php?pag=team" title="">
                
                    <span class="straniere">
                    
                        Team
                        
                    </span>
                
                </a>
                
                <ul>
                
                	<a class="<?php if( $pag == "radeesh"): echo "selezionato"; endif;  ?>" href="index.php?pag=radeesh" title="">
                    
                        <li>
                        
                            Radeesh
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "claudio"): echo "selezionato"; endif;  ?>" href="index.php?pag=claudio" title="">
                    
                        <li>
                        
                            Claudio
                        
                        </li>
                    
                    </a>
                    <a class="<?php if( $pag == "fabrizio"): echo "selezionato"; endif;  ?>" href="index.php?pag=fabrizio" title="">
                    
                        <li>
                        
                            Fabrizio
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "giulio"): echo "selezionato"; endif;  ?>" href="index.php?pag=giulio" title="">
                    
                        <li>
                        
                            Giulio
                        
                        </li> 
                        
                    </a>
                    <a class="<?php if( $pag == "luca"): echo "selezionato"; endif;  ?>" href="index.php?pag=luca" title="">
                    
                        <li>
                        
                            Luca
                        
                        </li>
                        
                    </a>
                    <a class="fabio <?php if( $pag == "fabio"): echo "selezionato"; endif;  ?>" href="index.php?pag=fabio" title="">
                    
                        <li>
                        
                            Fabio
                        
                        </li>
                        
                    </a>
                                       
                </ul>
                
            </li>
            <a class="<?php if( $pag == "traguardi"): echo "selezionato"; endif;  ?>" href="index.php?pag=traguardi" title="">
            
                <li>
                    
                    Traguardi
                    
                </li>
                
            </a>
            
        </ul>
    
    </div>
    
    <!--Fine Chi Siamo-->
    
	<!--Inizio Servizi-->
    
    <div class="mappa_sito_sfondo pannello_3">
    
    	<ul class="container_voci">
        
        	<a class="sottolineata <?php if( $pag == "servizi"): echo "selezionato"; endif;  ?>" href="index.php?pag=servizi" title="" tabindex="c">
        
                <li class="sezione <?php if( $pag == "servizi"): echo "sezione_attiva"; endif;  ?>">
                    
                    Servizi
                    
                </li>
            
            </a>
            <li class="prima_voce">
            	
                <a class="<?php if( $pag == "web_mobile_development"): echo "selezionato"; endif;  ?>" href="index.php?pag=web_mobile_development" title="">
                
                    <span class="straniere">
                    
                        Web & Mobile Development
                        
                    </span>
                
                </a>
                
                 <ul>
                
                	<a class="<?php if( $pag == "studio"): echo "selezionato"; endif;  ?>" href="index.php?pag=studio" title="">
                    
                        <li>
                        
                            Studio
                        
                        </li>
                    
                    </a>
                    <a class="<?php if( $pag == "analisi_web"): echo "selezionato"; endif;  ?>" href="index.php?pag=analisi_web" title="">
                    
                        <li>
                        
                            Analisi
                        
                        </li>
                    
                    </a>
                    <a class="<?php if( $pag == "sviluppo"): echo "selezionato"; endif;  ?>" href="index.php?pag=sviluppo" title="">
                    
                        <li>
                        
                            Sviluppo
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "consegna"): echo "selezionato"; endif;  ?>" href="index.php?pag=consegna" title="">
                        
                        <li>
                        
                            Consegna
                        
                        </li> 
                    
                    </a>
                                       
                </ul>
                                
            </li>
            <li>
            	
                <a class="<?php if( $pag == "visual_brand_identity"): echo "selezionato"; endif;  ?>" href="index.php?pag=visual_brand_identity" title="" tabindex="d">
                
                    <span class="straniere">
                    
                        Visual & Brand Identity
                        
                    </span>
                
                </a>
                
                <ul>
                
                	<a class="<?php if( $pag == "analisi_visual"): echo "selezionato"; endif;  ?>" href="index.php?pag=analisi_visual" title="">
                    
                        <li>
                        
                            Analisi
                        
                        </li>
                    
                    </a>
                    <a class="<?php if( $pag == "creativita"): echo "selezionato"; endif;  ?>" href="index.php?pag=creativita" title="">
                    
                        <li>
                        
                            Creatività
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "produzione"): echo "selezionato"; endif;  ?>" href="index.php?pag=produzione" title="">
                    
                        <li>
                        
                            Produzione
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "presentazione"): echo "selezionato"; endif;  ?>" href="index.php?pag=presentazione" title="">
                    
                        <li>
                        
                            Presentazione
                        
                        </li> 
                        
                    </a>
                                       
                </ul>
                
            </li>
            <li>
            	
                <a class="<?php if( $pag == "social"): echo "selezionato"; endif;  ?>" href="index.php?pag=social" title="">
                
                	<span class="straniere">
                
                		Social Media
                    
                	</span>
                    
                </a>
                
                <ul>
                
                	<a class="<?php if( $pag == "analisi_social"): echo "selezionato"; endif;  ?>" href="index.php?pag=analisi_social" title="">
                    
                        <li>
                        
                            Analisi
                        
                        </li>
                    
                    </a>
                    <a class="<?php if( $pag == "editoria"): echo "selezionato"; endif;  ?>" href="index.php?pag=editoria" title="">
                    
                        <li>
                        
                            Editoria
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "pubblicazione"): echo "selezionato"; endif;  ?>" href="index.php?pag=pubblicazione" title="">
                	
                        <li>
                        
                            Pubblicazione
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "condivisione"): echo "selezionato"; endif;  ?>" href="index.php?pag=condivisione" title="">
                    
                        <li>
                        
                            Condivisione
                        
                        </li> 
                        
                    </a>
                                       
                </ul>
                
            </li>
            <li>
                
                <a class="<?php if( $pag == "eventi"): echo "selezionato"; endif;  ?>" href="index.php?pag=eventi" title="">
                
                	Eventi
                
                </a>
                                    
                <ul>
                
                	<a class="<?php if( $pag == "soggetto"): echo "selezionato"; endif;  ?>" href="index.php?pag=soggetto" title="">
                    
                        <li>
                        
                            Soggetto
                        
                        </li>
                    
                    </a>
                    <a class="<?php if( $pag == "ideazione"): echo "selezionato"; endif;  ?>" href="index.php?pag=ideazione" title="">
                    
                        <li>
                        
                            Ideazione
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "organizzazione"): echo "selezionato"; endif;  ?>" href="index.php?pag=organizzazione" title="">
                    
                        <li>
                        
                            Organizzazione
                        
                        </li>
                        
                    </a>
                    <a class="<?php if( $pag == "lancio"): echo "selezionato"; endif;  ?>" href="index.php?pag=lancio" title="">
                    
                        <li>
                        
                            Lancio
                        
                        </li> 
                        
                    </a>
                                       
                </ul>
                
            </li>
                        
        </ul>
    
    </div>
    
    <!--Fine Chi Siamo-->
    
	<!--Inizio Casi Successo-->
    
    <div class="mappa_sito_sfondo pannello_4">
    
    	<ul class="container_voci">
        
        	<a class="sottolineata <?php if( $pag == "referenze"): echo "selezionato"; endif;  ?>" href="index.php?pag=referenze" title="" tabindex="e">
            
                <li class="sezione <?php if( $pag == "referenze"): echo "sezione_attiva"; endif;  ?>">
                    
                    Casi di Successo
                    
                </li>
            
            </a>
                        
        </ul>
    
    </div>
    
    <!--Fine Casi Successo-->
    
    <!--Inizio Contatti-->
    
    <div class="mappa_sito_sfondo pannello_5">
    
    	<ul class="container_voci">
        
        	<a class="sottolineata <?php if( $pag == "contatti"): echo "selezionato"; endif;  ?>" href="index.php?pag=contatti" title="" tabindex="f">
            
                <li class="sezione <?php if( $pag == "contatti"): echo "sezione_attiva"; endif;  ?>">
                    
                    Contatti
                    
                </li>
            
            </a>
                        
        </ul>
    
    </div>
    
    <!--Fine Contatti-->
            
</nav>

<!--Fine Mappa del Sito-->

<!--Inizio Container Mirino-->

<aside id="container_mirino" class="nascondi">

	<h7> <!--Titolo-->
    
    	Cursore
        
   	</h7>
    
    <?php 
	
		include "mirino.php"; // Inclusione Mirino
		
	?>
    
</aside>

<!--Fine Container Mirino-->

<!--Inizio Audio-->

<aside id="volume">

	<h7> <!--Titolo-->
    
    	Audio
    
    </h7>

	<i class="fa fa-volume-up fa-2x" aria-hidden="true"> <!--Icona-->
    </i>
    
	<div class="icona_sfondo"> <!--Sfondo-->
    </div>
    
</aside>

<!--Fine Audio-->

<!--Inizio Breadcrumb-->

<aside id="breadcrumb">

	<h7> <!--Titolo-->
    
    	Breadcrumb
        
    </h7>
    
    <div class="marker"> <!--Marker-->
    </div>

</aside>

<aside id="mappa_breadcrumb">

	<h7> <!--Titolo-->
    
    	Planimetria
    
    </h7>
    
    <div class="marker"> <!--Marker-->    
    </div>   

</aside>

<!--Fine Breadcrumb-->

<!--Inizio Footer-->

<!--Inizio Icona-->

<aside id="icona_footer">

	<h7> <!--Titolo-->
    
    	Footer
    
    </h7>

</aside>

<!--Fine Icona-->

<footer id="footer">

	<!--Inizio Contenuti-->

    <p id="footer_summary">
    
        <small>
    
            C.F. | P. IVA: 08601530960
    
        </small>
        
    </p>
    
	<!--Fine Contenuti-->

    <div class="footer_sfondo"> <!--Sfondo-->
    </div>

</footer>

<!--Fine Footer-->