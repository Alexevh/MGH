
jugador1 = 40;
jugador2 = 40;
jugador3 = 40;
jugador4 = 40;

veneno1 = 0;
veneno2 = 0;
veneno3 = 0;
veneno4 = 0;

function cantJugadores() {
    jugadores = $("#txtJugadores").val();
    $("#tableroJugadores").empty();
    agregarTableros(jugadores);
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
            $("#Veneno4").html(veneno1);
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
        DivP1 = obtenerDivJugador(1);
        DivP2 = obtenerDivJugador(2);
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
   nuevaDiv = "<div style='height: 50%'><div style='width: 45%; display:inline-block;'><a href='#' class='ui-btn' onclick='restar("+numero+")'>-</a>  <a href='#' class='ui-btn' onclick='sumar("+numero+")'>+</a> </div><div style='width: 45%; display:inline-block;position: relative;text-align: center;top: 50%;transform: translateY(-50%);' ><label id='Jugador"+numero+"'>+ jugador"+numero+":40 +</label><a href='' onclick='aumentarVeneno("+numero+")'><div id='Veneno"+numero+"'  >0</div></a></div></div></div>";
   return nuevaDiv;
}