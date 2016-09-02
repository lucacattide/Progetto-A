<!--Inizio Scena Referenze-->

<a-scene keyboard-shortcuts vr-mode-ui id="referenze_pagina"> 

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="referenze_sfondo" src="img/chi_siamo.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#referenze_sfondo" transparent="true" rotation="0 -150 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
    <a-image id="home_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-10 0 10" scale="1.5 1.5 1.5" rotation="0 5 0" data-href="index.php?pag=home" look-at="#camera"> <!--Marker Home-->   
    </a-image>
    <a-image id="referenze_marker" class="marker" src="#marker_1" width="1" height="1" position="0.7 -2 -2" scale="0.2 0.2 0.2" rotation="-40 0 -10" look-at="#camera"> <!--Marker Referenze-->   
    </a-image>
    <a-image id="menu_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="2 0 2" scale="0.2 0.2 0.2" rotation="0 0 0" data-href="index.php?pag=menu" look-at="#camera"> <!--Marker Menu-->    
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

<!--Fine Scena Referenze-->

<!--Inizio Layout Referenze-->

<!--Inizio Links Associativi-->

<!--Inizio Referenze-->

<section id="referenze" class="scheda secondo_livello nascondi" rel="referenti">

    <h7> <!--Titolo-->
    
        Casi di Successo
            
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

<!--Fine Referenze-->

<!--Fine Links Associativi-->

<!--Fine Layout Referenze-->