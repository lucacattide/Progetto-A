<!--Inizio Scena Home Web-->

<a-scene keyboard-shortcuts vr-mode-ui id="web_pagina">

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="web_sfondo" src="img/home_web.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#web_sfondo" transparent="true" rotation="0 -90 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
    <a-image id="home_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="15 0 0" scale="1.5 1.5 1.5" rotation="0 -75 0" data-href="index.php?pag=home" look-at="#camera"> <!--Marker Home-->   
    </a-image>
    <a-image id="web_marker" class="marker" src="#marker_1" width="1" height="1" position="0 -0.5 -3" scale="0.2 0.2 0.2" rotation="10 0 0" look-at="#camera"> <!--Marker Web-->   
    </a-image>
    
    <a-entity id="bgm" position="0 0 0" sound="src: audio/wonder-cycle-chris-zabriskie.mp3; autoplay: true; loop: true" data-cc="Wonder Cycle by Chris Zabriskie - Creative Commons — Attribution 4.0 International— CC BY 4.0"> <!--Audio-->
    </a-entity>
    
    <!--Inizio Entità Camera-->
    
    <a-entity id="camera" position="0 0 0">
  
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

<!--Fine Scena Home Web-->

<!--Inizio Layout Home Web-->

<!--Inizio Links Associativi-->

<!--Inizio Web-->

<section id="web" class="scheda nascondi">

    <h7> <!--Titolo-->
    
        Web
    
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
    
    <!--Inizio Contenuti-->
    
    <article class="scheda_summary_articolo">
    
        <!--Inizio Iconografia-->
    
        <div id="icona_web_summary" class="iconografia">
        
            <img src="img/logo.png" alt="" /> <!--Immagine-->
        
        </div>
        
        <!--Fine Iconografia-->
        
        <h1 class="scheda_summary_titolo"> <!--Titolo-->
        
            Web
        
        </h1>
        
        <!--Inizio Corpo-->
        
        <p class="scheda_summary">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nec felis eget posuere. Fusce luctus tortor suscipit pretium pulvinar. Suspendisse potenti. Proin id iaculis turpis. Aenean pharetra sapien a finibus dapibus. Morbi at rhoncus ex. Nulla a ligula id ipsum bibendum sollicitudin at ut dolor. Mauris eget fringilla nulla. Praesent quis dolor hendrerit, accumsan nulla at, lacinia diam. Sed porta bibendum tempor. Sed tristique sem ut erat auctor tristique.
        
        </p>
        
        <!--Fine Corpo-->
        
        <a class="scheda_summary_pulsante deseleziona" href="#" title="" tabindex="g"> <!--Link Associativo-->
        
            Scopri
        
        </a>
    
    </article>
    
    <!--Fine Contenuti-->
    
    <div class="sfondo_scheda">
    </div>

</section>

<!--Fine Web-->

<!--Fine Links Associativi-->

<!--Fine Layout Home Web-->