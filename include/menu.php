<!--Inizio Scena Menu Principale-->

<a-scene keyboard-shortcuts vr-mode-ui id="menu_pagina">

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="menu_sfondo" src="img/menu.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#menu_sfondo" transparent="true" rotation="0 120 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
    <a-image id="home_marker"  class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="1.5 0 3" scale="0.2 0.2 0.2" rotation="0 0 0" data-href="index.php?pag=home"> <!--Marker Home-->   
    </a-image>
    <a-image id="chi_siamo_marker"  class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-0.5 -1.5 -2" scale="0.2 0.2 0.2" rotation="-45 0 10" data-href="index.php?pag=chi_siamo"> <!--Marker Chi Siamo-->   
    </a-image>
    <a-image id="servizi_marker"  class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="0.5 -2.5 -2" scale="0.2 0.2 0.2" rotation="-75 0 -10" data-href="index.php?pag=servizi"> <!--Marker Servizi-->    
    </a-image>
    <a-image id="successo_marker"  class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="3 -0.5 1" scale="0.2 0.2 0.2" rotation="-10 45 0" data-href="index.php?pag=referenze"> <!--Marker Referenze-->    
    </a-image>
    <a-image id="contatti_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="2.5 -1 1.5" scale="0.2 0.2 0.2" rotation="0 45 0" data-href="index.php?pag=contatti"> <!--Marker Contatti-->    
    </a-image>
    
    <a-entity id="bgm" position="0 0 0" sound="src: audio/wonder-cycle-chris-zabriskie.mp3; autoplay: true; loop: true" data-cc="Wonder Cycle by Chris Zabriskie - Creative Commons — Attribution 4.0 International— CC BY 4.0"> <!--Audio-->
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

<!--Fine Scena Menu Principale-->