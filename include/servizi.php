<!--Inizio Scena Chi Siamo-->

<a-scene keyboard-shortcuts vr-mode-ui id="servizi_pagina"> 

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="servizi_sfondo" src="img/chi_siamo.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#servizi_sfondo" transparent="true" rotation="0 -150 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
<!--    <a-image id="home_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-10 0 10" scale="1.5 1.5 1.5" rotation="0 5 0" data-href="index.php?pag=home" look-at="#camera"> <!--Marker Home-->   
    </a-image>
    <a-image id="chi_siamo_marker" class="marker" src="#marker_1" width="1" height="1" position="3 0 -1" scale="0.2 0.2 0.2" rotation="0 90 0" look-at="#camera"> <!--Marker Chi Siamo-->   
    </a-image>
    <a-image id="fabio_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-1.5 -2 -1" scale="0.2 0.2 0.2" rotation="-45 0 40" data-href="index.php?pag=fabio_landing" look-at="#camera"> <!--Marker Fabio-->  
    </a-image>
    <a-image id="radeesh_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-3 0 -1.5" scale="0.2 0.2 0.2" rotation="0 20 0" data-href="index.php?pag=radeesh_landing" look-at="#camera"> <!--Marker Radeesh-->   
    </a-image>
    <a-image id="claudio_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-1.5 0.7 -2" scale="0.2 0.2 0.2" rotation="0 40 0" data-href="index.php?pag=claudio_landing" look-at="#camera"> <!--Marker Claudio-->   
    </a-image>
    <a-image id="luca_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-0.5 0.7 -2.5" scale="0.2 0.2 0.2" rotation="0 20 0" data-href="index.php?pag=luca_landing" look-at="#camera"> <!--Marker Giulio-->   
    </a-image>
    <a-image id="giulio_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="1 1.5 -3.5" scale="0.2 0.2 0.2" rotation="0 0 0" data-href="index.php?pag=giulio_landing" look-at="#camera"> <!--Marker Luca-->   
    </a-image>
    <a-image id="fabrizio_landing_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="2 -0.5 -2" scale="0.2 0.2 0.2" rotation="0 120 0" data-href="index.php?pag=fabrizio_landing" look-at="#camera"> <!--Marker Fabrizio-->   
    </a-image>
    <a-image id="menu_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="2 0 2" scale="0.2 0.2 0.2" rotation="0 0 0" data-href="index.php?pag=menu" look-at="#camera"> <!--Marker Menu-->    
    </a-image>
    
-->    <a-sphere color="yellow" radius="5" position="0 0 -2">
    </a-sphere>
    
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

<!--Fine Scena Chi Siamo-->

<!--Inizio Layout Home Web-->

<!--Inizio Links Associativi-->

<!--Inizio Chi Siamo-->

<section id="chi_siamo" class="scheda secondo_livello nascondi" rel="laboratorio_a">

    <h7> <!--Titolo-->
    
        Chi Siamo
            
    </h7>
    
    <!--Inizio Menu Contestuale-->
    
    <nav class="menu_contestuale deseleziona">
    
        <h7>
        
            Menu Contestuale
        
        </h7>
        
        <ul>
        
             <a href="include/laboratorio_a.php" title="" rel="laboratorio_a">
             
                <li>
            
                    Laboratorio-a
                    
                </li>
                
            </a>
            <a href="include/team.php" title="" rel="team">
             
                <li class="straniere">
                
                    Team
                    
                </li>
                
            </a>
            <a href="include/traguardi.php" title="" rel="traguardi">
             
                <li>
            
                    Traguardi
                    
                </li>
                
            </a>
        
        </ul>
    
    </nav>
    
    <!--Fine Menu Contestuale-->
    
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

<!--Fine Chi Siamo-->

<!--Fine Links Associativi-->

<!--Fine Layout Chi Siamo-->