/* 
 * Este JS se encarga de las tiradas de dados
 * 
 */


function limpiarPaginaDados() {
    $("#mesaDados").empty();
    $("#mesaDados").append('<img src="img/dados/animacion.gif" alt=""/>');
}


/* Funcion que obtiene un numero aleatorio entre el 1 y el 6 y dibuja
 * el resultado en la mesa de dados*/
function tirarD6()
{
   
     $("#mesaDados").empty();
     
     var resultado = Math.floor((Math.random() * 6) + 1);
    
     switch (resultado){
         case 1:
             $("#mesaDados").append(obtenerImagenD6(1));
             break;
        case 2:
             $("#mesaDados").append(obtenerImagenD6(2));
             break;
        case 3:
             $("#mesaDados").append(obtenerImagenD6(3));
             break;
        case 4:
             $("#mesaDados").append(obtenerImagenD6(4));
             break;
        case 5:
             $("#mesaDados").append(obtenerImagenD6(5));
             break;
        case 6:
             $("#mesaDados").append(obtenerImagenD6(6));
             break;      
         default:
              $("#mesaDados").append("Ocurrio un error inesperado");
     }
     
     
}

function tirarD12()
{
     $("#mesaDados").empty();
     
     var resultado = Math.floor((Math.random() * 12) + 1);
    
     switch (resultado){
         case 1:
             $("#mesaDados").append(obtenerImagenD12(1));
             break;
        case 2:
             $("#mesaDados").append(obtenerImagenD12(2));
             break;
        case 3:
             $("#mesaDados").append(obtenerImagenD12(3));
             break;
        case 4:
             $("#mesaDados").append(obtenerImagenD12(4));
             break;
        case 5:
             $("#mesaDados").append(obtenerImagenD12(5));
             break;
        case 6:
             $("#mesaDados").append(obtenerImagenD12(6));
             break;      
        case 7:
             $("#mesaDados").append(obtenerImagenD12(7));
             break;   
        case 8:
             $("#mesaDados").append(obtenerImagenD12(8));
             break;   
        case 9:
             $("#mesaDados").append(obtenerImagenD12(9));
             break;   
        case 10:
             $("#mesaDados").append(obtenerImagenD12(10));
             break;   
        case 11:
             $("#mesaDados").append(obtenerImagenD12(11));
             break;   
        case 12:
             $("#mesaDados").append(obtenerImagenD12(12));
             break;   
         default:
              $("#mesaDados").append("Ocurrio un error inesperado");
     }
}

function tirarD20()
{
     $("#mesaDados").empty();
     
     var resultado = Math.floor((Math.random() * 20) + 1);
    
     switch (resultado){
         case 1:
             $("#mesaDados").append(obtenerImagenD20(1));
             break;
        case 2:
             $("#mesaDados").append(obtenerImagenD20(2));
             break;
        case 3:
             $("#mesaDados").append(obtenerImagenD20(3));
             break;
        case 4:
             $("#mesaDados").append(obtenerImagenD20(4));
             break;
        case 5:
             $("#mesaDados").append(obtenerImagenD20(5));
             break;
        case 6:
             $("#mesaDados").append(obtenerImagenD20(6));
             break;      
        case 7:
             $("#mesaDados").append(obtenerImagenD20(7));
             break;   
        case 8:
             $("#mesaDados").append(obtenerImagenD20(8));
             break;   
        case 9:
             $("#mesaDados").append(obtenerImagenD20(9));
             break;   
        case 10:
             $("#mesaDados").append(obtenerImagenD20(10));
             break;   
        case 11:
             $("#mesaDados").append(obtenerImagenD20(11));
             break;   
        case 12:
             $("#mesaDados").append(obtenerImagenD20(12));
             break;   
        case 13:
             $("#mesaDados").append(obtenerImagenD20(13));
             break;
        case 14:
             $("#mesaDados").append(obtenerImagenD20(14));
             break;
        case 15:
             $("#mesaDados").append(obtenerImagenD20(15));
             break;
        case 16:
             $("#mesaDados").append(obtenerImagenD20(16));
             break;
        case 17:
             $("#mesaDados").append(obtenerImagenD20(17));
             break;
        case 18:
             $("#mesaDados").append(obtenerImagenD20(18));
             break;
        case 19:
             $("#mesaDados").append(obtenerImagenD20(19));
             break;
        case 20:
             $("#mesaDados").append(obtenerImagenD20(20));
             break;
         default:
              $("#mesaDados").append("Ocurrio un error inesperado");
     }
}



function tirarMoneda(){
    
    $("#mesaDados").empty();
     
     var resultado = Math.floor((Math.random() * 2) + 0);
     switch (resultado){
         case 0:
             $("#mesaDados").append(obtenerImagenMoneda("cara"));
             break;
        case 1:
             $("#mesaDados").append(obtenerImagenMoneda("numero"));
             break;
     }  
}


function obtenerImagenD6(numero){
   
    pieza = "<img  src=img/dados/d6/"+numero+".jpg>";
    return pieza;
}

function obtenerVideoD6(numero)
{
     pieza = "<video controls autoplay class='videoDados'>  <source src='./videos/d6/"+numero+".ogg' type='video/ogg'> Tu broser no soporta videos</video> ";
    return pieza;
}

function obtenerImagenD12(numero){
   
    pieza = "<img src=img/dados/d12/"+numero+".jpg>";
    return pieza;
}

function obtenerImagenD20(numero){
   
    pieza = "<img src=img/dados/d20/"+numero+".jpg>";
    return pieza;
}

function obtenerImagenMoneda(lado){
   
    pieza = "<img  src=img/moneda/"+lado+".jpg>";
    return pieza;
}
