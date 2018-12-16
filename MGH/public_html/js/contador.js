
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


function sumar(numeroJugador, cantidad)
{
    switch (numeroJugador) {

        case 1:
            $("#Jugador1").empty();
            jugador1+=cantidad;
            $("#Jugador1").html(jugador1);
            $("#Veneno1").html(veneno1);
            break;
        case 2:
            $("#Jugador2").empty();
            jugador2+=cantidad;
            $("#Jugador2").html(jugador2);
            $("#Veneno2").html(veneno2);
            break;
        case 3:
            $("#Jugador3").empty();
            jugador3+=cantidad;
            $("#Jugador3").html(jugador3);
            $("#Veneno3").html(veneno3);
            break;
        case 4:
            $("#Jugador4").empty();
            jugador4+=cantidad;
            $("#Jugador4").html(jugador4);
            $("#Veneno4").html(veneno4);
            break;
    }
}

function restar(numeroJugador, cantidad)
{
    switch (numeroJugador) {
        case 1:
            $("#Jugador1").empty();
            jugador1-=cantidad;
            $("#Jugador1").html(jugador1);
            break;
        case 2:
            $("#Jugador2").empty();
            jugador2-=cantidad;
            $("#Jugador2").html(jugador2);
            break;
        case 3:
            $("#Jugador3").empty();
            jugador3-=cantidad;
            $("#Jugador3").html(jugador3);
            break;
        case 4:
            $("#Jugador4").empty();
            jugador4-=cantidad;
            $("#Jugador4").html(jugador4);
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
        nuevaDiv = obtenerDivJugadorv2(1);
        
        
    } else if (parseInt(cantidadJugadores) === 2)
    {
        DivP1 = obtenerDivJugadorv2(1);
        DivP2 = obtenerDivJugadorv2(2);
        nuevaDiv = DivP1+DivP2;
    }else if (parseInt(cantidadJugadores) === 3)
    {
        DivP1 = obtenerDivJugadorv2(1);
        DivP2 = obtenerDivJugadorv2(2);
        DivP3 = obtenerDivJugadorv2(3);  
        nuevaDiv = DivP1+DivP2+DivP3;
    }else if (parseInt(cantidadJugadores) === 4)
    {
        DivP1 = obtenerDivJugadores4(1);
        DivP2 = obtenerDivJugadores4(2);
        DivP3 = obtenerDivJugadores4(3);  
        DivP4 = obtenerDivJugadores4(4); 
        nuevaDiv = DivP1+DivP2+DivP3+DivP4;
    }

    $("#tableroJugadores").append(nuevaDiv);
}


function obtenerDivJugador(numero)
{
   nuevaDiv = "<div class='divInicialBloqueJugador'><div  class='divSegundoBloqueJugador'><a href='#' class='ui-btn' onclick='restar("+numero+")'>-</a>  <a href='#' class='ui-btn' onclick='sumar("+numero+")'>+</a> </div><div class='divTerceroBloqueJugador' ><label id='Jugador"+numero+"'>+ jugador"+numero+":40 +</label><a href='' onclick='aumentarVeneno("+numero+")'> <div class='divVeneno' id='Veneno"+numero+"'  >0</div></a></div></div></div>";
   return nuevaDiv;
}


function obtenerDivJugadorv2(numero)
{
        
        divRestar1 = "<div class='botonVidas' onclick='restar("+numero+",1)'> - 1</div>";
        divRestar5= "<div class='botonVidas' onclick='restar("+numero+",5)'> - 5</div>";
        divRestar = "<div class='izquierda' >"+divRestar1+divRestar5+" </div>";
        
        
        divSumar1 = "<div class='botonVidas' onclick='sumar("+numero+",1)'> + 1</div>";
        divSumar5= "<div class='botonVidas' onclick='sumar("+numero+",5)'> + 5</div>";
        divSumar = "<div class='izquierda' >"+divSumar1+divSumar5+" </div>";
        
        etiquetaNombreJugador= "<p class='editable' id='etiquetaJ"+numero+"' contenteditable='true'>J"+numero+"</p>";
        
        divPrincipal = "<div class='principal'>"+etiquetaNombreJugador+"<p class='numeroVidas' id='Jugador"+numero+"' >40</p><p class='editable' id='Veneno"+numero+"'  onclick='aumentarVeneno("+numero+")' style='color: green; font-size: 30px'>0</p> </div>";
        nuevaDiv ="<div class='divInicialBloqueJugador'>"+divRestar+divPrincipal+divSumar+"</div>";
        return nuevaDiv;
}

function obtenerDivJugadores4(numero){
       
        
        divRestar1 = "<div class='botonVidas' onclick='restar("+numero+",1)'>-1</div>";
        divRestar5= "<div class='botonVidas' onclick='restar("+numero+",5)'>-5</div>";
        divRestar10= "<div class='botonVidas' onclick='restar("+numero+",10)'>10</div>";
        divRestar = "<div class='izquierdaMulti' >"+divRestar1+divRestar5+divRestar10+" </div>";
        
        
        divSumar1 = "<div class='botonVidas' onclick='sumar("+numero+",1)'> +1</div>";
        divSumar5= "<div class='botonVidas' onclick='sumar("+numero+",5)'> +5</div>";
        divSumar10= "<div class='botonVidas' onclick='sumar("+numero+",10)'>10</div>";
        divSumar = "<div class='derechaMulti' >"+divSumar1+divSumar5+divSumar10+" </div>";
        
        etiquetaNombreJugador= "<p id='etiquetaJ"+numero+"' contenteditable='true'>J"+numero+"</p>";
        
        divPrincipal = "<div class='principalMulti'> <div style='height: 50%; '>"+etiquetaNombreJugador+"<p class='numeroVidas' id='Jugador"+numero+"' >"+"40 </p></div> <div style='height: 50%; background-image: url(\"img/pirexia2.png\"); background-size: cover; background-position: center;' onclick='aumentarVeneno("+numero+")'><label id='Veneno"+numero+"' style='padding-top: 50%; color: red; font-size: 30px'>0</label> </div></div>";
        nuevaDiv ="<div class='divInicialBloqueJugador'>"+divRestar+divPrincipal+divSumar+"</div>";
        return nuevaDiv;
}
