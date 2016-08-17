<!--Inizio Scena Home Web-->

<a-scene keyboard-shortcuts vr-mode-ui id="chi_siamo_pagina">

	<!--Inizio Assets-->
    
     <a-assets>
    
    	<img id="chi_siamo_sfondo" src="img/chi_siamo.jpg" alt=""> <!--Sfondo-->
        <img id="marker_1" src="img/marker_video_1.svg" alt=""> <!--Marker-->
        <img id="marker_2" src="img/marker_video_2.svg" alt=""> <!--"-->
        <audio id="bgm" src="audio/wonder-cycle-chris-zabriskie.mp3"> <!--BGM-->
  
  	</a-assets>
  
  	<!--Fine Assets-->

	<!--Inizio Area-->
        
    <a-sky src="#chi_siamo_sfondo" transparent="true" rotation="0 -150 0"> <!--Sfondo-->
    </a-sky>
    
    <!--
    
       ROTATION (Valori): 
       
       Primo: Su/Giu (Beccheggio)
       Secondo: 3/4 (Rotazione su asse)
       Terzo: Rotazione (Rollio)
       
    -->
    
    <a-image id="home_marker" class="marker cd-btn cd-modal-trigger nascondi" src="#marker_1" width="1" height="1" position="-10 0 10" scale="1.5 1.5 1.5" rotation="0 5 0" data-href="index.php?pag=home"> <!--Marker Home-->   
    </a-image>
    <a-image id="chi_siamo_marker" class="marker" src="#marker_1" width="1" height="1" position="3 0 -1" scale="0.2 0.2 0.2" rotation="0 90 0"> <!--Marker Chi Siamo-->   
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

<!--Fine Scena Home Web-->

<!--Inizio Layout Home Web-->

<!--Inizio Links Associativi-->

<!--Inizio Web-->

<section id="chi_siamo" class="scheda secondo_livello">

    <h7> <!--Titolo-->
    
        Chi Siamo
    
    </h7>
    
    <!--Inizio Menu Contestuale-->
    
    <nav class="menu_contestuale deseleziona">
    
        <h7>
        
            Menu Contestuale
        
        </h7>
        
        <ul>
        
             <a href="" title="">
             
                <li>
            
               
                
                    Laboratorio-a
                    
                </li>
                
            </a>
            <a href="" title="">
             
                <li class="straniere">
                
                    Team
                    
                </li>
                
            </a>
            <a href="" title="">
             
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
     
    <div id="container_contenuti" class="mCustomScrollbar" data-mcs-theme="rounded">
    
    <!--Inizio Multimedia-->

    <object class="video_intro" type="text/html" data="https://www.youtube.com/embed/FdUKN23jIyc" title="">
                
        <embed src="https://www.youtube.com/embed/FdUKN23jIyc" title=""> <!--Video-->
        </embed>
    
    </object>
    
    <!--Fine Multimedia-->

    <!--Inizio Contenuti-->
    
    <article class="scheda_summary_articolo">
            
        <!--Fine Iconografia-->
        
        <h1 class="scheda_summary_titolo"> <!--Titolo-->
        
            Chi Siamo
        
        </h1>
        
        <!--Inizio Corpo-->
        
        <p class="scheda_summary">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas mi non dolor eleifend tincidunt. Donec ante metus, bibendum at ipsum in, venenatis vestibulum nisi. Mauris nec porta odio, et malesuada diam. Donec varius mauris nec dui pulvinar, in efficitur erat mollis. Maecenas lacus risus, tincidunt nec mauris at, ultrices hendrerit eros. Duis quis scelerisque sem, non porta orci. Nulla faucibus dui quis mi tincidunt, non cursus dui volutpat. Proin tincidunt est dui, non gravida neque dapibus eu. Donec elit turpis, mattis quis hendrerit nec, dignissim sed ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed feugiat, ante at euismod interdum, nunc lorem cursus libero, eget faucibus quam lectus ut sapien. Curabitur nec blandit ante. Nullam consectetur semper venenatis. Vivamus pellentesque magna eu feugiat vulputate.
            
        </p>
            
        <div class="illustrazione">
        
            <img src="img/logo.svg" alt="" /> <!--Iconografia-->
            
            <span class="didascalia">
            
                Luca Cattide
            
            </span>
        
        </div>
            
        <p class="scheda_summary">    
            
            In rhoncus lacinia dui, non viverra est tempus vitae. Sed mattis aliquet dictum. Nam vestibulum lectus nibh. Morbi et enim non ipsum tristique molestie ac vel ipsum. Donec sollicitudin augue interdum justo rutrum dictum. Sed consectetur urna eget imperdiet efficitur. Phasellus urna erat, blandit nec arcu nec, sollicitudin ullamcorper erat. Aenean dignissim ultrices mauris, eget faucibus ante convallis in. Vestibulum consectetur tincidunt turpis porttitor tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam auctor consequat ipsum, quis tempor dolor ornare non. Duis fermentum leo id odio tempus, ut faucibus magna venenatis. Etiam varius sem varius, sagittis enim vel, ornare lacus. Proin eu ipsum urna. Cras placerat erat est, ut rutrum enim dapibus molestie.
        
        </p>
        
        <ul class="elenco">
        
            <li>
            
                Lorem ipsum
            
            </li>
            <li>
            
                Lorem ipsum
            
            </li>
            <li>
            
                Lorem ipsum
            
            </li>
        
        </ul>
        
        <!--Fine Corpo-->
        
        <a class="scheda_summary_pulsante deseleziona" href="#" title="" tabindex="g"> <!--Link Associativo-->
        
            Scarica
        
        </a>
    
    </article>
    
    </div>
    
    <!--Fine Contenuti-->
    
    <div class="sfondo_scheda"> <!--Sfondo-->
    </div>

</section>

<!--Fine Web-->

<!--Fine Links Associativi-->

<!--Fine Layout Home Web-->