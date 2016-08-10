<!--Inizio Scena Home-->

<a-scene keyboard-shortcuts vr-mode-ui>

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="landing_1" src="img/landing_1.jpg" alt=""> <!--Sfondo-->
    	<img id="landing_2" src="img/landing_2.jpg" alt=""> <!--Sfondo-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky id="sfondo_landing" src="#landing_1" transparent="true" rotation="0 127 0"> <!--Sfondo-->
    </a-sky>
    
    <!--Inizio Entità Camera-->
    
    <a-entity position="0 0 0">
  
  		<a-entity camera look-controls wasd-controls="adInverted: true"> <!--Camera-->
        </a-entity>

	</a-entity>
    
    <!--Fine Entità Camera-->
      
	<!--Fine Area-->

</a-scene>

<!--Fine Scena Home-->

<!--Inizio Claim-->

<section id="claim" class="deseleziona"> 
	
    <h7> <!--Titolo-->
    
        Claim
    
    </h7>
    
    <!--Inizio Titoli-->

    <hgroup>

        <h1 id="headline"> <!--Headline-->
        
            Lorem ipsum dolor sit amet
        
        </h1>
        <h2 id="tagline"> <!--Tagline-->
        
            Consectetur adipiscing elit	
        
        </h2>
        
    </hgroup>
    
    <!--Fine Titoli-->
    
    <a id="entra" href="#" title="" tabindex="100">
    
        Entra	
    
    </a>
    
</section>

<!--Inizio Claim-->