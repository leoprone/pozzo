/* ********** Menu ********** */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
  
  
  /*  PARA QUE SE REPLIEGUE EL MENÚ AL TOCAR EN CUALQUIER PARTE AFUERA DEL MISMO
  esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  
  d.addEventListener("click", (e) => {
      if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  
  
  const $archivos=document.getElementsByClassName("archivo"),
$homecss=document.getElementById("home-css"),
$display=document.querySelector(".display"),
$blackscreen=document.querySelector(".black-screen"),
$btnpowernotebook=document.querySelector(".btn-power-notebook"),

$videograffiti=document.querySelector("#video-graffiti"),

$videoalmendra=document.querySelector("#video-almendra"),
$videodemocopa=document.querySelector("#video-demo-copa"),

$videojulianbandera=document.querySelector("#video-julian-bandera"),
$videos=document.getElementsByClassName("video"),
$videodibu=document.querySelector("#video-dibu"),
$videomessidoscopas=document.querySelector("#video-messi-dos-copas"),
$vercodigo=document.querySelector(".ver-codigo");




/*
for(let i=0; i< $videos.length; i++){
  $videos[i].addEventListener("click", (e) => {
     if(e.target.matches($videos[i])){
      $videos[i].classList.add("active");
    } 
  
  });
  
}*/




var $file = document.getElementById("file");
var $code = document.createElement("code");
var texto;




function addElemento(texto) {
   
    $code.innerText = texto;
    $file.appendChild($code);
}




function verVideo(video){
  
  //agrega display-none a TODOS los videos y el stop

  for(let i=0; i < $videos.length; i++){
    $videos[i].classList.add("display-none");
    $videos[i].pause(); 
  }

    
  

  // activa el video que se quiere ver y se le da play
  video.classList.remove("display-none");
  video.play(); 
}
 




  
 // QUE SE ELIJAN OPCIONES DE VIDEO

 /* $btngraffiti.onclick= verVideo($videograffiti); */

/* $btngraffiti.addEventListener("click", verVideo($videograffiti)); */



   



document.addEventListener("click", (e)=>{
 
  // elige Graffiti
  if(e.target.matches("#btn-graffiti")){
    verVideo($videograffiti);
  } 

 // elige Almendra
/*   if(e.target.matches("#btn-almendra")){
    verVideo($videoalmendra);
  }
 */

  
 // elige Dibu
/*  if(e.target.matches("#btn-julian-bandera")){
  verVideo($videojulianbandera);
}
 */

 // elige Julián-bandera
 /* if(e.target.matches("#btn-dibu")){
  verVideo($videodibu);
}
 */


 // elige Messi con 2 copas
 /* if(e.target.matches("#btn-messi-dos-copas")){
  verVideo($videomessidoscopas);
}
 */




  if (e.target.matches(".ver-codigo")) {
    
 

    $btnpowernotebook.classList.add("animation-btn-power");

    $display.classList.add("open-display");
    
    setTimeout(function(){
      $blackscreen.classList.add("opacity-cero");
      $vercodigo.classList.add("visibility-hidden");
    }, 6000);

    setTimeout(function(){
      $blackscreen.classList.add("display-none");
      verVideo($videograffiti);
    }, 9000);
    
    

     texto= `
    <li><a href="">cazador_de_mariposas.html</a></li>
    <li><a href="">dromos.html</a>
    <li><a href="">el_antifaz.html</a>
    <li><a href="">ella_respira.html</a>
    <li><a href="">la_cancion_del_mirlo_cantante.html</a>
    <li><a href="">la_fuente</a>
    <li><a href="">la_quimera.html</a>
    <li><a href="">maquina_de_coser.html</a>
    <li><a href="">prende_y_apaga.html</a>
    <li><a href="">tobogan.html</a>
     
      </ul>
    </li>




<li><span>dramatico-y-nocturno</span>
  <ul class="submenu">
    <li><a href="">album_la_ultima_rotacion_del_sol.html</a></li>
    <li><a href="">bailarina_del_futuro.html</a></li>
    <li><a href="">cazador_de_mariposas.html</a></li>
    <li><a href="">dromos.html</a>
    <li><a href="">el_antifaz.html</a>
    <li><a href="">ella_respira.html</a>
    <li><a href="">la_cancion_del_mirlo_cantante.html</a>
    <li><a href="">la_fuente</a>
    <li><a href="">la_quimera.html</a>
    <li><a href="">maquina_de_coser.html</a>
    <li><a href="">prende_y_apaga.html</a>
    <li><a href="">tobogan.html</a>
     
      </ul>
    </li>


<li><span>hambre</span>
  <ul class="submenu">
    <li><a href="">album_la_ultima_rotacion_del_sol.html</a></li>
    <li><a href="">bailarina_del_futuro.html</a></li>
    <li><a href="">cazador_de_mariposas.html</a></li>
    <li><a href="">dromos.html</a>
    <li><a href="">el_antifaz.html</a>
    <li><a href="">ella_respira.html</a>
    <li><a href="">la_cancion_del_mirlo_cantante.html</a>
    <li><a href="">la_fuente</a>
    <li><a href="">la_quimera.html</a>
    <li><a href="">maquina_de_coser.html</a>
    <li><a href="">prende_y_apaga.html</a>
    <li><a href="">tobogan.html</a>
     
      </ul>
    </li>




    <li>
      <span>js</span>
      <ul>
        <li><span class="js">JS</span><a href="">index_final_comas.js</a></li>
        <li><span class="js">JS</span><a href="">pagina_album.js</a></li>
        <li><span class="js">JS</span><a href="">tema_individual.js</a></li>
      </ul>
    </li>



    <li><span>la-ultima-rotacion-sol</span>
      <ul class="submenu">
        <li><a href="">album_la_ultima_rotacion_del_sol.html</a></li>
        <li><a href="">bailarina_del_futuro.html</a></li>
        <li><a href="">cazador_de_mariposas.html</a></li>
        <li><a href="">dromos.html</a>
        <li><a href="">el_antifaz.html</a>
        <li><a href="">ella_respira.html</a>
        <li><a href="">la_cancion_del_mirlo_cantante.html</a>
        <li><a href="">la_fuente</a>
        <li><a href="">la_quimera.html</a>
        <li><a href="">maquina_de_coser.html</a>
        <li><a href="">prende_y_apaga.html</a>
        <li><a href="">tobogan.html</a>
         
          </ul>
        </li>




    <li><span>styles</span>
      <ul class="submenu">
        <li><a href=""><span class="css">#</span>album_basicos.css</a></li>
        <li><a href=""><span class="css">#</span>base.css</a></li>
        <li><a href=""><span class="css">#</span>album_dias_de_fuerza.css</a></li>
        <li><a href=""><span class="css">#</span>dramatico_y_nocturno.css</a>
        <li><a href=""><span class="css">#</span>galeria.css</a>
        <li><a href=""><span class="css">#</span>hambre.css</a>
        <li><a href=""><span class="css">#</span>home.css</a>
        <li><a href=""><span class="css">#</span>la_ultima_rotacion_del_sol.css</a>
        <li><a href=""><span class="css">#</span>tema_individual_basicos.css</a>
         
          </ul>
        </li>



    <li><span>index.html</span></li>

  </ul>


</div> 

<div class="file-container">
<pre id="file" class="file"></pre>
</div>





</div>
<div class="kb">

</div> `;

    addElemento(texto);



  // QUE SE ELIJAN OPCIONES DE VIDEO

/*   $btngraffiti.onclick=verVideo($videograffiti); */
/*  $btngraffiti.onclick=function(){
 
  $videos.forEach(element => {
    element.classList.add("display-none");
  });
  $videograffiti.classList.remove("display-none");
  verVideo($videograffiti);
 }
  */
  
/* 
  $btnalmendra.onclick=function(){
    $videos.forEach(element => {
      element.classList.remove("display-none");
    });
    $videoalmendra.classList.remove("display-none");
   }
     */


    }







    if (e.target.matches(".li-css")) {
       
       texto= `
   

       /* ********** Menu ********** */
       .menu-btn {
         /*outline: thin solid var(--first-color);*/
         border: 0;
         cursor: pointer;
         background-color: rgb(21, 21, 21, 0);
         margin-left: 85%;
         margin-top: -10px;
         
       }
       
       .menu-btn svg {
         fill: var(--menu-btn-color);
           
       }
       
       .menu {
         position: fixed;
         left: 0;
         bottom: 0;
         width: 100%;
         display: flex;
         flex-direction: column;
         background-color: rgba(5, 5, 5, 0.75);
         
         opacity: 0;  /*solo se verá cuando sea activo*/
         pointer-events: none;
         transition: opacity 0.8s ease;
         z-index: -1;
       }
       
       .menu.is-active {
         opacity: 1;
         pointer-events: auto;
       }
       
       .menu a {
         padding: 1rem;
         font-size: 1.5rem;
         font-weight: 100;
         text-align: center;
         text-decoration: none;
         color: var(--menu-btn-color);
       }
       
       .menu a:hover {
         color: gray;
         /*background-color: var(--second-color);*/
         font-size: 1.5rem;
       }
   
       .none {
         display: none;
       }
       
 
    `
    ;
     addElemento(texto);



       /*  Array.prototype.forEach.call($archivos, function($archivos) {
            $archivos.classList.add("visible-none");
        });
        setTimeout(function () {
            $homecss.classList.add("visible-yes"); 
            
        }, 1000); */
       
    }
 
 

    if (e.target.matches(".li-index-html")) {
       
      texto= `
      <li><a href="">cazador_de_mariposas.html</a></li>
      <li><a href="">dromos.html</a>
      <li><a href="">el_antifaz.html</a>
      <li><a href="">ella_respira.html</a>
      <li><a href="">la_cancion_del_mirlo_cantante.html</a>
      <li><a href="">la_fuente</a>
      <li><a href="">la_quimera.html</a>
      <li><a href="">maquina_de_coser.html</a>
      <li><a href="">prende_y_apaga.html</a>
      <li><a href="">tobogan.html</a>
       
        </ul>
      </li>
  
  
  
  
  <li><span>dramatico-y-nocturno</span>
    <ul class="submenu">
      <li><a href="">album_la_ultima_rotacion_del_sol.html</a></li>
      <li><a href="">bailarina_del_futuro.html</a></li>
      <li><a href="">cazador_de_mariposas.html</a></li>
      <li><a href="">dromos.html</a>
      <li><a href="">el_antifaz.html</a>
      <li><a href="">ella_respira.html</a>
      <li><a href="">la_cancion_del_mirlo_cantante.html</a>
      <li><a href="">la_fuente</a>
      <li><a href="">la_quimera.html</a>
      <li><a href="">maquina_de_coser.html</a>
      <li><a href="">prende_y_apaga.html</a>
      <li><a href="">tobogan.html</a>
       
        </ul>
      </li>
  

   `
   ;
    addElemento(texto);



      /*  Array.prototype.forEach.call($archivos, function($archivos) {
           $archivos.classList.add("visible-none");
       });
       setTimeout(function () {
           $homecss.classList.add("visible-yes"); 
           
       }, 1000); */
      
   }


   if (e.target.matches(".li-js")) {
       
    texto= `

 /*  Array.prototype.forEach.call($archivos, function($archivos) {
   $archivos.classList.add("visible-none");
});
setTimeout(function () {
   $homecss.classList.add("visible-yes"); 
   
}, 1000); */
/*  Array.prototype.forEach.call($archivos, function($archivos) {
 $archivos.classList.add("visible-none");
});
setTimeout(function () {
 $homecss.classList.add("visible-yes"); 
 
}, 1000); */
/*  Array.prototype.forEach.call($archivos, function($archivos) {
$archivos.classList.add("visible-none");
});
setTimeout(function () {
$homecss.classList.add("visible-yes"); 

}, 1000); */

 `
 ;
  addElemento(texto);



    /*  Array.prototype.forEach.call($archivos, function($archivos) {
         $archivos.classList.add("visible-none");
     });
     setTimeout(function () {
         $homecss.classList.add("visible-yes"); 
         
     }, 1000); */
    
 }


 if (e.target.matches(".li-tema-html")) {
       
  texto= `



         
  <li>
  <span>js</span>
  <ul>
    <li class="li-js"><span class="js">JS</span><a href="">index_final_comas.js</a></li>
    <li class="li-js"><span class="js">JS</span><a href="">pagina_album.js</a></li>
    <li class="li-js"><span class="js">JS</span><a href="">tema_individual.js</a></li>
  </ul>
</li>



<li><span>la-ultima-rotacion-sol</span>
  <ul class="submenu">
    <li class="li-album"><a href="">album_la_ultima_rotacion_del_sol.html</a></li>
    <li class="li-tema"><a href="">bailarina_del_futuro.html</a></li>
    <li class="li-tema"><a href="">cazador_de_mariposas.html</a></li>
    <li class="li-tema"><a href="">dromos.html</a>
    <li class="li-tema"><a href="">el_antifaz.html</a>
    <li class="li-tema"><a href="">ella_respira.html</a>
    <li class="li-tema"><a href="">la_cancion_del_mirlo_cantante.html</a>
    <li class="li-tema"><a href="">la_fuente</a>
    <li class="li-tema"><a href="">la_quimera.html</a>
    <li class="li-tema"><a href="">maquina_de_coser.html</a>
    <li class="li-tema"><a href="">prende_y_apaga.html</a>
    <li class="li-tema"><a href="">tobogan.html</a>
     
      </ul>
    </li>





`
;
addElemento(texto);



  /*  Array.prototype.forEach.call($archivos, function($archivos) {
       $archivos.classList.add("visible-none");
   });
   setTimeout(function () {
       $homecss.classList.add("visible-yes"); 
       
   }, 1000); */
  
}


if (e.target.matches(".li-album-html")) {
       
  texto= `

  <section id="home" class="home-section">
  
  <div class="telon-container">
      <div class="humo-telon"></div>

      <div class="telon-iz-1"></div>
    
      <div class="telon-iz-2 invisible"></div>
       <!-- <div class="telon-central-1 invisible"></div>
      <div class="telon-central-2 invisible"></div>
    
      <div class="telon-central-2 invisible"></div>
    
       <div class="telon-central-3"></div> -->
      <div class="telon-der"></div>
  </div> 
<h1 class="home-h1">PABLO COMAS</h1>

<div class="cara-home"></div>




`
;
addElemento(texto);



  /*  Array.prototype.forEach.call($archivos, function($archivos) {
       $archivos.classList.add("visible-none");
   });
   setTimeout(function () {
       $homecss.classList.add("visible-yes"); 
       
   }, 1000); */
  
}

 
/*    if(e.target.matches(".btn-acordes-tema")){
     $acordes.classList.toggle("display-none");
     $contenedorimgacordes.classList.toggle("display-none");
    
     
     if (!$acordes.classList.contains("display-none")) {
         Array.prototype.forEach.call($espaciadores, function($espaciadores) {
           $espaciadores.classList.add("renglon-letra");
       });
       $btnacordestema.innerHTML="ocultar acordes";
       $btnacordestema.classList.add("bg-ocultar");
     }else{
         Array.prototype.forEach.call($espaciadores, function($espaciadores) {
           $espaciadores.classList.remove("renglon-letra");
       });
       $btnacordestema.innerHTML="Acordes";
       $btnacordestema.classList.remove("bg-ocultar");
     }
    
   } */
 });
 