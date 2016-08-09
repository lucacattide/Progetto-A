<!--Inizio Scena Home-->

<a-scene keyboard-shortcuts vr-mode-ui>

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="home" src="img/home.jpg" alt=""> <!--Sfondo-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#home" transparent="true" rotation="0 130 0"> <!--Sfondo-->
    </a-sky>
    
<!--    <a-entity id="bgm" position="0 0 0" sound="src: audio/wonder-cycle-chris-zabriskie.mp3; autoplay: true" data-cc="Wonder Cycle by Chris Zabriskie - Creative Commons — Attribution 4.0 International— CC BY 4.0"> <!--Audio--
    </a-entity>
-->    
    <!--Inizio Entità Camera-->
    
    <a-entity position="0 0 0">
  
  		<a-entity camera look-controls wasd-controls="adInverted: true"> <!--Camera-->
        </a-entity>

	</a-entity>
    
    <!--Fine Entità Camera-->
      
	<!--Fine Area-->

</a-scene>

<!--Fine Scena Home-->
