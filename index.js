function mostrarMensaje(){

    var nombres = ["Maria", "José", "Mohammed", "Yan","Ali","John","David","Ana","Michael","Juan","Mary","Robert","Daniel","Luis","Carlos","Antonio","Joseph","Elena","Peter","Fatima","Alexandra","Richard","Paul","Olga","Pedro","William","Rosa","Thomas","Jorge","Elizabeth","Patricia","Manuel","Victor","Sandra","Emmanuel","Samuel","Sarah","Tatiana","Rita","Martin","Patrick","Natalia","Martha","Andrea","Christine","Irina","Laura","Linda","Marina","Vladimir","Barbara","Angela","George","Roberto"];
    
   
    var nn = Math.floor(Math.random()*nombres.length);
/* 
    var mostrarTexto = document.getElementById("textarea"); */

    var mostrarTexto = nombres[nn] ;

    document.getElementById("textarea").value = mostrarTexto;
    

    


    }
    