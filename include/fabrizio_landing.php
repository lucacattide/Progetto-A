<!--Inizio Scena Fabrizio-->

<a-scene keyboard-shortcuts vr-mode-ui id="fabrizio_pagina">

	<!--Inizio Assets-->
    
    <a-assets>
    
    	<img id="fabrizio_sfondo" src="img/fabrizio_sfondo.png" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#fabrizio_sfondo" transparent="true" rotation="0 -80 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
    <a-image id="fabrizio_marker" class="marker" src="#marker_1" width="1" height="1" position="0 1 -2" scale="0.2 0.2 0.2" rotation="0 0 0"> <!--Marker Fabio-->    
    </a-image>
    <a-image id="chi_siamo_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-4 1 1" scale="0.2 0.2 0.2" rotation="10 75 -10" data-href="index.php?pag=chi_siamo"> <!--Marker Chi Siamo-->    
    </a-image>
    
    <a-entity id="bgm" position="0 0 0" sound="src: audio/wonder-cycle-chris-zabriskie.mp3; autoplay: true; loop: true" data-cc="Wonder Cycle by Chris Zabriskie - Creative Commons — Attribution 4.0 International — CC BY 4.0"> <!--Audio-->
    </a-entity>
    
    <!--Inizio Entità Camera-->
    
    <a-entity position="0 0 0">
  
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

<!--Fine Scena Fabrizio-->

<!--Inizio Layout Fabrizio-->

<!--Inizio Links Associativi-->

<!--Inizio Fabrizio-->

<section id="fabrizio" class="scheda secondo_livello nascondi" rel="fabrizio">

    <h7> <!--Titolo-->
    
        Fabrizio
    
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
        
    <div class="sfondo_scheda"> <!--Sfondo-->
    </div>

</section>

<!--Fine Fabrizio-->

<!--Fine Links Associativi-->

<!--Fine Layout Fabrizio-->