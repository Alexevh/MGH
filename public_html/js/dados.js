/* 
 * Este JS se encarga de las tiradas de dados
 * 
 */

/* Funcion que obtiene un numero aleatorio entre el 1 y el 6 y dibuja
 * el resultado en la mesa de dados*/
function limpiarPaginaDados() {
    $("#mesaDados").empty();
    $("#mesaDados").append('<img src="img/dados/animacion.gif" alt=""/>');
}
function tirarD6()
{

    $("#mesaDados").empty();
    var resultado = Math.floor((Math.random() * 6) + 1);


    $("#mesaDados").append(obtenerImagenD6(resultado));
    /* switch (resultado){
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
     }*/


}

function obtenerImagenD6(numero) {

    pieza = "<img src=img/dados/" + numero + ".png>";
    return pieza;
}

