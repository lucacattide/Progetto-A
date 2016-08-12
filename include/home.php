<!--Inizio Scena Home-->

<a-scene keyboard-shortcuts vr-mode-ui>

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="home" src="img/home.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#home" transparent="true" rotation="0 30 0"> <!--Sfondo-->
    </a-sky>
    
    <a-image id="web_marker" class="marker" src="#marker_1" width="1" height="1" position="-1.8 -1.2 -3" scale="0.2 0.2 0.2"> <!--Marker Web-->   
    </a-image>
    <a-image id="grafica_marker" class="marker" src="#marker_1" width="1" height="1" position="-2.5 -2 -1.5" scale="0.2 0.2 0.2"> <!--Marker Grafica-->    
    </a-image>
    <a-image id="facebook_marker" class="marker" src="#marker_1" width="1" height="1" position="-0.7 2 -4" scale="0.2 0.2 0.2"> <!--Marker Facebook-->    
    </a-image>
    <a-image class="menu_marker" src="#marker_1" width="1" height="1" position="3 -0.5 -5" scale="0.2 0.2 0.2"> <!--Marker Menu-->    
    </a-image>
    
    <a-entity id="bgm" position="0 0 0" sound="src: audio/wonder-cycle-chris-zabriskie.mp3; autoplay: true" data-cc="Wonder Cycle by Chris Zabriskie - Creative Commons — Attribution 4.0 International— CC BY 4.0"> <!--Audio-->
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

<!--Fine Scena Home-->