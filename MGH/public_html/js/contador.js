
jugador1 = 40;
jugador2 = 40;
jugador3 = 40;
jugador4 = 40;

veneno1 = 0;
veneno2 = 0;
veneno3 = 0;
veneno4 = 0;


function sumar(numeroJugador)
{
    switch (numeroJugador) {
        
        case 1:
            $("#Jugador1").empty();
            jugador1++;
            $("#Jugador1").append(jugador1);
            $("#Veneno1").append(veneno1);
            break;
        case 2:
            $("#Jugador2").empty();
            jugador2++;
            $("#Jugador2").append(jugador2);
            $("#Veneno2").append(veneno2);
            break;
        case 3:
            $("#Jugador3").empty();
            jugador3++;
            $("#Jugador3").append(jugador3);
            $("#Veneno3").append(veneno3);
            break;
        case 4:
            $("#Jugador4").empty();
            jugador1++;
            $("#Jugador4").append(jugador4);
            $("#Veneno4").append(veneno4);
            break;
            }
}

function restar(numeroJugador)
{
    switch (numeroJugador) {
        case 1:
            $("#Jugador1").empty();
            jugador1--;
            $("#Jugador1").append(jugador1);
            break;
        case 2:
            $("#Jugador2").empty();
            jugador2--;
            $("#Jugador2").append(jugador1);
            break;
        case 3:
            $("#Jugador3").empty();
            jugador3--;
            $("#Jugador3").append(jugador1);
            break;
        case 4:
            $("#Jugador4").empty();
            jugador1--;
            $("#Jugador4").append(jugador1);
            break;

    }


}

function aumentarVeneno(numeroJugador)
{
    switch (numeroJugador) {
        case 1:
            $("#Veneno1").empty();
            veneno1++;
            $("#Veneno1").append(veneno1);
            break;
        case 2:
            $("#Veneno2").empty();
            veneno2++;
            $("#Veneno2").append(veneno2);
            break;
        case 3:
            $("#Veneno3").empty();
            veneno3++;
            $("#Veneno3").append(veneno3);
            break;
        case 4:
            $("#Veneno4").empty();
            veneno4++;
            $("#Veneno4").append(veneno1);
            break;
}}