/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var listaNoticias = new Array();

$(document).ready(inicioApp);



function inicioApp()
{
    obtenerNoticiaPortada();
    cargarEventos();
    cargarMiniaturas();
    cargarTienda();
    cargarMTG();
    cargarHeadersYFooters();

}

function cargarHeadersYFooters() {
    $('.miHeader').load('cabezal.html');
    $('.miFooter').load('footer.html');
    $("#pieDados").load('controlesDados.html');
}

// Dada una categoria y una cantidad esta funcion tiene como responsabilidad poblar
// la pagina de noticias correspondiente con los registros de una liosta de noticias
// para la categoria dada//
function obtenerNoticiasPorCategoria(categoria, cantidad)
{

    $.ajax({
        url: "http://mgh-preprod.xly.es/jsonapi/node/" + categoria + "?page[limit]=" + cantidad + "&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        success: function (res) {
            console.log(res);
            resultado = res;
            for (var i = 0; i < resultado.data.length; i++)
            {
                pieza = obtenerCabezalNoticia(categoria, resultado, i);

                $("#listaNoticia" + categoria).append(pieza);
            }
            $("#listaNoticia" + categoria).refresh();
        }
    });
}


//Esta funcion llama a obtenerNoticias 
function cargarEventos()
{
    obtenerNoticiasPorCategoria("Eventos", 5);
}

//Esta funcion llama a obtenerNoticias 
function cargarMiniaturas()
{
    obtenerNoticiasPorCategoria("Miniaturas", 5);
}

function cargarTienda()
{
    obtenerNoticiasPorCategoria("Tienda", 5);
}
function cargarMTG()
{
    obtenerNoticiasPorCategoria("MTG", 5);
}


//Dado un resultado y una posicion devuelvo una pieza para el cabezal de la lista de noticias
// Cada registro de la lista de la pagina debe mostrar el titulo formateado.
// 
// Lo optmimo es refactorizar esto para hacer que ademas de los parametros tambien reciba la categoria
// cuando yo lo hice me dara un error con la variable que decia que no estaba definida
// 
//
////
function obtenerCabezalNoticia(categoria, resultado, i)
{
    titulo = resultado.data[i].attributes.title;
  
  // Esta parte carga la primera imagen de la noticia que vamos a usar como
  // representante en la cabecera, si no tiene imagen entonces usamos la por defecto//
    var str = resultado.data[i].attributes.body.value;
    var ele = document.createElement("div");
    ele.innerHTML = str;
    var imagen = ele.querySelector("img");
    
    if (imagen === null)
    {
        ele.innerHTML = "<img src='img/logo.png'></img>";
        imagen = ele.querySelector("img");
    }

    // Esta parte arma la pieza y la retorna
    pieza = "<li><a href='#PaginaDetalleNoticia' data-idprod='" +
            resultado.data[i].attributes.uuid +
            "' data-cat='" + categoria + "' onclick='cargarDetalle($(this))'>" +
            imagen.outerHTML +
            resultado.data[i].attributes.title +
            "</a> <a class='ui-btn  ui-btn-icon-right'href='#'</a></li>"

    return pieza;
}


//Funcion para cargar el detalle de la noticia seleccionada
function cargarDetalle(lnk)
{
    var uuid = lnk.attr("data-idprod");
    var categoria = lnk.attr("data-cat");

    $.ajax({
        url: "http://mgh-preprod.xly.es/jsonapi/node/" + categoria + "/" + uuid,
        type: "GET",
        dataType: "JSON",
        data: {},
        async: false,
        success: function (res) {
            console.log(res);
            resultado = res;
            $("#contenidoDetalle").html("<p> " + resultado.data.attributes.body.value + "</p>");
        }
    });

}



//Dada una categoria y una noticia la cargamos
function obtenerNoticiaPorUUID(categoria, uuid)
{
    $.ajax({
        url: "http://mgh-preprod.xly.es/jsonapi/node/" + categoria + "/" + uuid,
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        success: function (res) {
            console.log(res);
            resultado = res;
            return resultado;
        }
    });
}


function obtenerNoticiaPortada() {

    $.ajax({
        url: "http://mgh-preprod.xly.es/jsonapi/node/Tienda?page[limit]=1&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        success: function (res) {
            console.log(res);
            resultado = res;
            for (var i = 0; i < resultado.data.length; i++)
            {
                pieza = formatearNoticiaCompleta(resultado, i);
                // $("#listaResultados").append("<li> "+resultado.data[i].attributes.title+"</li>");
                $("#portada").append(pieza);
            }
            $("#portada").listview('refresh');
        }
    });
}




function formatearNoticia(resultado, posicion) {
    titulo = resultado.data[posicion].attributes.title
    resumen = resultado.data[posicion].attributes.body.summary
    cuerpo = resultado.data[posicion].attributes.body.value
    pieza = "<li>" + titulo + "<br>" + cuerpo + "</li>"
    return pieza;

}


function formatearNoticiaCompleta(resultado, posicion) {
    titulo = resultado.data[posicion].attributes.title
    resumen = resultado.data[posicion].attributes.body.summary
    cuerpo = resultado.data[posicion].attributes.body.value
    pieza = "<div>" + titulo + "<br>" + cuerpo + "</div>"
    return pieza;

}



function obtenerLocalizacion()
{
    navigator.geolocation.getCurrentPosition(onSuccess, onErrorNav);
}

function onSuccess(position) {
    var lat = position.coords.latitude;
    var longitud = position.coords.longitude;
    $("#mapGoogle").attr("src", "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDmrGuARK5rJ6ZJOt7j6cjsSH1f7-dyL_Y&origin=" + lat + "," + longitud + "&destination=Montevideo+Gaming+House,+Colonia+1761A,+11200+Montevideo");
}

function onErrorNav(error) {
    alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
}




// Funciones obsoletas, se dejan aqui por las dudas que necesitemos reusar algo pero se van a borrar//
function cargarNoticias()
{

    $.ajax({
        url: "http://mgh-preprod.xly.es/jsonapi/node/MTG?include=field_image",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        //data: "q=Montevideo&lang=es",
        //data: JSON.stringify({email: email, pwd: pwd}),
        success: function (res) {
            console.log(res);
            resultado = res;
            for (var i = 0; i < resultado.data.length; i++)
            {
                pieza = formatearNoticia(resultado, i);
                $("#listaResultados").append(pieza);
            }
            $("#listaResultados").listview('refresh');
        }
    });
}

function cargarNoticiasEventos()
{

    $.ajax({
        url: "http://mgh-preprod.xly.es/jsonapi/node/Eventos?page[limit]=5&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        //data: "q=Montevideo&lang=es",
        //data: JSON.stringify({email: email, pwd: pwd}),
        success: function (res) {
            console.log(res);
            resultado = res;
            for (var i = 0; i < resultado.data.length; i++)
            {
                pieza = obtenerCabezalNoticia("Eventos", resultado, i);
                $("#listaNoticiaEventos").append(pieza);
            }
            $("#listaNoticiaEventos").refresh();
        }
    });



}