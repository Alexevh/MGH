
jugador1 = 40;
jugador2 = 40;
jugador3 = 40;
jugador4 = 40;

veneno1 = 0;
veneno2 = 0;
veneno3 = 0;
veneno4 = 0;





function cantJugadores(numero) {
    
    $("#tableroJugadores").empty();
    agregarTableros(numero);
}


function sumar(numeroJugador)
{
    switch (numeroJugador) {

        case 1:
            $("#Jugador1").empty();
            jugador1++;
            $("#Jugador1").html("Jugador"+numeroJugador+" : "+jugador1);
            $("#Veneno1").html(veneno1);
            break;
        case 2:
            $("#Jugador2").empty();
            jugador2++;
            $("#Jugador2").html("Jugador"+numeroJugador+" : "+jugador2);
            $("#Veneno2").html(veneno2);
            break;
        case 3:
            $("#Jugador3").empty();
            jugador3++;
            $("#Jugador3").html("Jugador"+numeroJugador+" : "+jugador3);
            $("#Veneno3").html(veneno3);
            break;
        case 4:
            $("#Jugador4").empty();
            jugador4++;
            $("#Jugador4").html("Jugador"+numeroJugador+" : "+jugador4);
            $("#Veneno4").html(veneno4);
            break;
    }
}

function restar(numeroJugador)
{
    switch (numeroJugador) {
        case 1:
            $("#Jugador1").empty();
            jugador1--;
            $("#Jugador1").html("Jugador"+numeroJugador+" : "+jugador1);
            break;
        case 2:
            $("#Jugador2").empty();
            jugador2--;
            $("#Jugador2").html("Jugador"+numeroJugador+" : "+jugador2);
            break;
        case 3:
            $("#Jugador3").empty();
            jugador3--;
            $("#Jugador3").html("Jugador"+numeroJugador+" : "+jugador3);
            break;
        case 4:
            $("#Jugador4").empty();
            jugador4--;
            $("#Jugador4").html("Jugador"+numeroJugador+" : "+jugador4);
            break;

    }


}

function aumentarVeneno(numeroJugador)
{
    switch (numeroJugador) {
        case 1:
            $("#Veneno1").empty();
            veneno1++;
            $("#Veneno1").html(veneno1);
            break;
        case 2:
            $("#Veneno2").empty();
            veneno2++;
            $("#Veneno2").html(veneno2);
            break;
        case 3:
            $("#Veneno3").empty();
            veneno3++;
            $("#Veneno3").html(veneno3);
            break;
        case 4:
            $("#Veneno4").empty();
            veneno4++;
            $("#Veneno4").html(veneno4);
            break;
    }
}


function agregarTableros(cantidadJugadores)
{
    if (parseInt(cantidadJugadores) === 1)
    {
        nuevaDiv = obtenerDivJugador(1);
        
        
    } else if (parseInt(cantidadJugadores) === 2)
    {
        DivP1 = obtenerDivJugadorv2(1);
        DivP2 = obtenerDivJugadorv2(2);
        nuevaDiv = DivP1+DivP2;
    }else if (parseInt(cantidadJugadores) === 3)
    {
        DivP1 = obtenerDivJugador(1);
        DivP2 = obtenerDivJugador(2);
        DivP3 = obtenerDivJugador(3);  
        nuevaDiv = DivP1+DivP2+DivP3;
    }else if (parseInt(cantidadJugadores) === 4)
    {
        DivP1 = obtenerDivJugador(1);
        DivP2 = obtenerDivJugador(2);
        DivP3 = obtenerDivJugador(3);  
        DivP4 = obtenerDivJugador(4); 
        nuevaDiv = DivP1+DivP2+DivP3+DivP4;
    }

    $("#tableroJugadores").append(nuevaDiv);
}


function obtenerDivJugador(numero)
{
   nuevaDiv = "<div class='divInicialBloqueJugador'><div  class='divSegundoBloqueJugador'><a href='#' class='ui-btn' onclick='restar("+numero+")'>-</a>  <a href='#' class='ui-btn' onclick='sumar("+numero+")'>+</a> </div><div class='divTerceroBloqueJugador' ><label id='Jugador"+numero+"'>+ jugador"+numero+":40 +</label><a href='' onclick='aumentarVeneno("+numero+")'><div class='divVeneno' id='Veneno"+numero+"'  >0</div></a></div></div></div>";
   return nuevaDiv;
}


function obtenerDivJugadorv2(numero)
{
   divRestar = "<div class='izquierda' onclick='restar("+numero+")'> -</div>"
   divSumar = "<div class='derecha' onclick='sumar("+numero+")'> +</div>"
   divPrincipal = "<div class='principal'><label id='Jugador"+numero+"'>+ jugador"+numero+":40 +</label> </div>"
   nuevaDiv ="<div class='divInicialBloqueJugador'>"+divRestar+divPrincipal+divSumar+"</div>"
   return nuevaDiv;
}
