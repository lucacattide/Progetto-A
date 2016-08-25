<!--Inizio Scena Contatti-->

<a-scene keyboard-shortcuts vr-mode-ui id="contatti_pagina"> 

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="contatti_sfondo" src="img/chi_siamo.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#contatti_sfondo" transparent="true" rotation="0 -150 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
    <a-image id="home_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-10 0 10" scale="1.5 1.5 1.5" rotation="0 5 0" data-href="index.php?pag=home"> <!--Marker Home-->   
    </a-image>
    <a-image id="recapiti_marker" class="marker" src="#marker_1" width="1" height="1" position="1 -0.5 -2" scale="0.2 0.2 0.2" rotation="-0 -10 0"> <!--Marker Recapiti-->   
    </a-image>
    <a-image id="dove_siamo_marker" class="marker" src="#marker_1" width="1" height="1" position="1 -1 -1.5" scale="0.2 0.2 0.2" rotation="-10 -30 0"> <!--Marker Dove Siamo-->   
    </a-image>
    <a-image id="menu_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="2 0 2" scale="0.2 0.2 0.2" rotation="0 0 0" data-href="index.php?pag=menu"> <!--Marker Menu-->    
    </a-image>
    
    <a-entity id="bgm" position="0 0 0" sound="src: audio/wonder-cycle-chris-zabriskie.mp3; autoplay: true; loop: true" data-cc="Wonder Cycle by Chris Zabriskie - Creative Commons — Attribution 4.0 International— CC BY 4.0"> <!--Audio-->
    </a-entity>
    
    <!--Inizio Entità Camera-->
    
    <a-entity id="camera" position="0 0 0" rotation="0 0 0">
    
        <!--ROTATION
        
            Rispetto a rotation di un elemento, il primo valore è invertito con l'ultimo
            
        -->
  
  		<a-entity camera look-controls> <!--Camera-->
        
        	<a-cursor position="0 0 -10" geometry="primitive: ring" material="color: white; shader: flat; opacity: .7; side: front" scale="0.1 0.1 0.1"> <!--Cursore-->
    
                <a-animation begin="hovering" attribute="position" from="0 0 -10" to="0 0 -2" easing="ease-in-out" fill="both" dur="300"> <!--Hover-->
                </a-animation>
            
            </a-cursor>

        </a-entity>
      
	</a-entity>
    
    <!--Fine Entità Camera-->
      
	<!--Fine Area-->

</a-scene>

<!--Fine Scena Contatti-->

<!--Inizio Layout Home Web-->

<!--Inizio Links Associativi-->

<!--Inizio Recapiti-->

<section id="recapiti" class="scheda nascondi">

    <h7> <!--Titolo-->
    
        Recapiti
    
    </h7>
    
    <!--Inizio Pulsante Chiusura-->
    
    <aside class="chiudi deseleziona">
    
        <h7> <!--Titolo-->
        
            Chiudi
        
        </h7>
        
        <i class="fa fa-times" aria-hidden="true"> <!--Icona-->
        </i>
                    
    </aside>
    
    <!--Fine Pulsante Chiusura-->
    
    <!--Inizio Container Recapiti-->
        
    <div id="container_recapiti" class="mCustomScrollbar" data-mcs-theme="rounded">
    
        <!--Inizio Contenuti-->
    
        <article class="scheda_summary_articolo">
        
            <h1 class="scheda_summary_titolo"> <!--Titolo-->
            
                Recapiti
            
            </h1>
        
            <!--Inizio Corpo-->
            
            <p class="scheda_summary">
            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nec felis eget posuere. Fusce luctus tortor suscipit pretium pulvinar. Suspendisse potenti. Proin id iaculis turpis. Aenean pharetra sapien a finibus dapibus. Morbi at rhoncus ex. Nulla a ligula id ipsum bibendum sollicitudin at ut dolor. Mauris eget fringilla nulla. Praesent quis dolor hendrerit, accumsan nulla at, lacinia diam. Sed porta bibendum tempor. Sed tristique sem ut erat auctor tristique.
            
            </p>
            
            <!--Inizio Recapiti-->
            
            <ul class="elenco selettore deseleziona">
                
                <li class="indirizzo">
                
                    <span>
                    
                        <i class="fa fa-envelope-o" aria-hidden="true"> <!--Icona-->
                        </i>
                        
                    </span>
                    <span class="occulta recapito"> <!--Indirizzo-->
                    
                        Via Francesco Soave 24, 20135 Milano MI ITALIA
                    
                    </span>
                
                </li>
                
                <a href="tel:+390283425468" title="" tabindex="t">
                
                    <li class="telefono">
                    
                        <span>
                        
                            <i class="fa fa-phone" aria-hidden="true"> <!--Icona-->
                            </i>
                            
                        </span>
                        <span class="occulta recapito"> <!--Telefono-->
                        
                            +39 02 8342 5468
                        
                        </span>
                    
                    </li>
                
                </a>
                <a href="mailto:info@laboratorio-a.it?subject=Contatti" title="" tabindex="@">
                
                    <li class="email">
                    
                        <span >
                        
                            <i class="fa fa-at" aria-hidden="true"> <!--Icona-->
                            </i>
                            
                        </span>
                        <span class="occulta recapito"> <!--E-Mail-->
                        
                            info@laboratorio-a.it
                        
                        </span>
                    
                    </li>
                
                </a>
                
            </ul>
            
            <!--Fine Recapiti-->
            
            <p class="scheda_summary">
            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nec felis eget posuere. Fusce luctus tortor suscipit pretium pulvinar. Suspendisse potenti. Proin id iaculis turpis. Aenean pharetra sapien a finibus dapibus. Morbi at rhoncus ex. Nulla a ligula id ipsum bibendum sollicitudin at ut dolor. Mauris eget fringilla nulla. Praesent quis dolor hendrerit, accumsan nulla at, lacinia diam. Sed porta bibendum tempor. Sed tristique sem ut erat auctor tristique.
            
            </p>
            
            <!--Inizio Form-->
            
            <form method="post" autocomplete="on" id="form_contatti" accept-charset="utf-8" enctype="application/x-www-form-urlencoded">
            
                <legend> <!--Legenda-->
                
                    Lorem ipsum dolor sit amet    
                
                </legend>
                
                <!--Inizio Dati Anagrafici-->
                
                <fieldset>
                
                    <label for="nome">
                    
                        Nome <span class="richiesto">*</span>
                    
                        <input type="text" id="nome" name="nome" placeholder="Inserire il nome (es. Mario)" required form="form_contatti" tabindex="n" pattern="[a-zA-Zàèìòù' ]+" />        
                
                    </label>
                    <label for="cognome">
                    
                        Cognome <span class="richiesto">*</span>
                    
                        <input type="text" id="cognome" name="cognome" placeholder="Inserire il cognome (es. Rossi)" required form="form_contatti" tabindex="c" pattern="[a-zA-Zàèìòù' ]+" />        
                
                    </label>
                    
                </fieldset>
                
                <!--Fine Dati Anagrafici-->
                
                <!--Inizio Recapiti-->
                
                <fieldset>
               
                    <label for="telefono">
                    
                        Telefono
                    
                        <input type="tel" id="telefono" name="telefono" placeholder="Inserire il telefono (es. 123456789)" form="form_contatti" tabindex="t" pattern="^[0-9]{5,15}$" />        
                
                    </label>
                    <label for="email" class="straniere">
                    
                        E-Mail <span class="richiesto">*</span>
                    
                        <input type="email" id="email" name="email" placeholder="Inserire l'indirizzo l'e-mail (es. m.rossi@email.it)" required form="form_contatti" tabindex="e" pattern="^[a-z0-9][_.a-z0-9-]+@([a-z0-9][0-9a-z-]+.)+([a-z]{2,4})" />        
                
                    </label>
                    
                </fieldset>
                
                <!--Fine Recapiti-->
                
                <!--Inizio Messaggio-->
               
                <label for="messaggio">
                
                    Messaggio <span class="richiesto">*</span>
                
                    <textarea id="messaggio" name="messaggio" required maxlength="300" wrap="hard" placeholder="Inserire il messaggio" form="form_contatti" tabindex="m"></textarea> 
                
                </label>
                
                <!--Fine Messaggio-->
                
                <!--Inizio Privacy-->
                
                <label for="accettazione">
                
                    Lorem ipsum dolor sit amet <span class="richiesto">*</span>
                
                    <input type="checkbox" id="accettazione" name="accettazione" required form="form_contatti" tabindex="o" />        
                    
                </label>
                
                <!--Fine Privacy-->
                
                <div id="antispam" class="g-recaptcha" data-type="image" data-tabindex="s"> <!--Widget Anti-Spam-->
                </div>
                    
                <button type="button" id="invia" class="scheda_summary_pulsante" name="invia" form="form_contatti" tabindex="i"> <!--Invio-->
            
                    Invia
            
                </button>
            
                <!--Inizio messaggio di notifica-->
                
                <div id="messaggio_form">
                
                    <p>                    
                    </p>
                
                </button>
                
                <!--Fine messaggio di notifica-->
            
            </form>
            
            <!--Fine Form-->
            
            <!--Fine Corpo-->
                                    
        </article>
        
        <!--Fine Contenuti-->

    </div>
    
    <!--Fine Container Recapiti-->
    
    <div class="sfondo_scheda"> <!--Sfondo-->
    </div>

</section>

<!--Fine Recapiti-->

<!--Inizio Dove Siamo-->

<section id="dove_siamo" class="scheda">

    <h7> <!--Titolo-->
    
        Dove Siamo
    
    </h7>
    
    <!--Inizio Pulsante Chiusura-->
    
    <aside class="chiudi deseleziona">
    
        <h7> <!--Titolo-->
        
            Chiudi
        
        </h7>
        
        <i class="fa fa-times" aria-hidden="true"> <!--Icona-->
        </i>
                    
    </aside>
    
    <!--Fine Pulsante Chiusura-->
    
    <!--Inizio Container Dove Siamo-->
    
    <div id="container_dove_siamo" class="mCustomScrollbar" data-mcs-theme="rounded">
        
        <!--Inizio Contenuti-->
    
        <article class="scheda_summary_articolo">
        
            <h2 class="scheda_summary_titolo"> <!--Titolo-->
            
                Dove Siamo
            
            </h2>
                
            <!--Inizio Corpo-->
            
            <p class="scheda_summary">
            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nec felis eget posuere. Fusce luctus tortor suscipit pretium pulvinar. Suspendisse potenti. Proin id iaculis turpis. Aenean pharetra sapien a finibus dapibus. Morbi at rhoncus ex. Nulla a ligula id ipsum bibendum sollicitudin at ut dolor. Mauris eget fringilla nulla. Praesent quis dolor hendrerit, accumsan nulla at, lacinia diam. Sed porta bibendum tempor. Sed tristique sem ut erat auctor tristique.
            
            </p>
                        
            <div id="mappa"> <!--Mappa-->
            </div>
                        
            <!--Inizio Indicazioni-->
            
            <h2 class="scheda_summary_titolo"> <!--Titolo-->
            
                Come Raggiungerci
            
            </h2>
            
            <ul class="elenco selettore deseleziona">
                
                <li class="aeroporto">
                
                    <span>
                    
                        <i class="fa fa-plane" aria-hidden="true"> <!--Icona-->
                        </i>
                        
                    </span>
                    <span class="occulta mezzo"> <!--Aereo-->
                    
                        Aeroporto
                    
                    </span>
                
                </li>
                <li class="auto">
                
                    <span>
                    
                        <i class="fa fa-taxi" aria-hidden="true"> <!--Icona-->
                        </i>
                        
                    </span>
                    <span class="occulta mezzo"> <!--Taxi-->
                    
                        Auto
                    
                    </span>
                
                </li>
                <li class="metro">
                
                    <span >
                    
                        <i class="fa fa-subway" aria-hidden="true"> <!--Icona-->
                        </i>
                        
                    </span>
                    <span class="occulta mezzo"> <!--Treno-->
                    
                        Mezzi Pubblici
                    
                    </span>
                
                </li>
                
            </ul>
            
            <!--Fine Indicazioni-->
            
            <!--Fine Corpo-->
                    
        </article>
        
        <!--Fine Contenuti-->
    
    </div>
    
    <!--Fine Container Dove Siamo-->
    
    <div class="sfondo_scheda"> <!--Sfondo-->
    </div>

</section>

<!--Fine Dove Siamo-->

<!--Fine Links Associativi-->

<!--Fine Layout Contatti-->