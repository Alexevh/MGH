/* 
 *En este JS vamos a trabajar con el consumo de noticias
 */
var listaNoticias = new Array();

/*Vamos a almacenar el timestamp del ultimo evento*/
var ultimoeventoTS =0;


$(document).ready(inicioApp);

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    console.log(navigator.notification);
}

function inicioApp()
{
    //ocultarAlertas();
    paginaActiva();
    obtenerNoticiaPortada();
    cargarEventos();
    cargarMiniaturas();
    cargarTienda();
    cargarMTG();
    cargarHeadersYFooters();
    refrescarNoticias();
    db = window.openDatabase("db","1.0","estadisticasUso",1024*1024*5);
    db.transaction(crearbd,erroresBd,paginaActiva);
}

function crearbd(tx){
    //tx.executeSql("DROP TABLE TiempoUso");
    tx.executeSql("CREATE TABLE IF NOT EXISTS TiempoUso(id INTEGER PRIMARY KEY, pagina TEXT, tiempo TEXT)");
}

function erroresBd(results){
    console.log(results.message);
}


function ocultarAlertas()
{
    $(".alert").alert('close');
}

var timer;
function refrescarNoticias(){
    timer = setInterval(function(){
        cargarEventos();
        obtenerDatosParaEnviar();
        //notificar();
    }, 150000);
    //300.000 equivalen a 5 min
}

function verificarNoticiasAEnviar(){
    timer = setInterval(function(){
        obtenerDatosParaEnviar();
        //notificar();
    }, 150000);
}

var pagActivaAnterior = null;
var pagActivaActual = null;
var pagActivaAux = null;
var tiempo = 1;
function paginaActiva(){
    timer = setInterval(function(){
        pagActivaAux = $.mobile.activePage.attr("id");
        console.log(pagActivaAux);
        if (pagActivaAux !== "nav-panel" && pagActivaAux !== "splash" && pagActivaAux !== pagActivaActual){
            pagActivaAnterior = pagActivaActual;
            pagActivaActual = pagActivaAux;
            //insertar en bd el tiempo que se tuvo en la pagina
            db.transaction(function(tx){
                tx.executeSql("SELECT COUNT(1) AS cantidad FROM TiempoUso",[],function(tx,results){
                    var id = results.rows.item(0).cantidad+1;
                    tx.executeSql("INSERT INTO TiempoUso VALUES ("+id+",'"+pagActivaAnterior+"','"+tiempo+"')");
                });
            },erroresBd,function(){tiempo=1;});
        }else {
            tiempo++;
        }
    }, 1000);
}

function cerrarNotificacion(){
    
}

function obtenerDatosParaEnviar(){

    resultado = false;
    db.transaction(function(tx){
        tx.executeSql("SELECT id,pagina,tiempo FROM TiempoUso",[],function(tx,results){
            for(var i = 1; i < results.rows.length; i++){
                envioDeDatos(results.rows.item(i).id,results.rows.item(i).pagina,results.rows.item(i).tiempo);
            }
        });
    },erroresBd);
}



function envioDeDatos(id,pagina,tiempo){
    
   
    fechaAux = new Date();
    fecha = fechaAux.getFullYear()+ "-"+ fechaAux.getMonth()+1+"-"+fechaAux.getDate();
    console.log(id,pagina,tiempo);
    usuario = "admin";
    
    
    $.ajax({
        url: "http://colector.montevideo-gh.com/colectar.php?usuario=admin&pass=sarasa2019&pagina="+pagina+"&tiempo="+tiempo+"&fecha="+fecha,        
        type: "GET",       
        dataType: "json",
        crossDomain: true,
        data: {},
        async: true,
        success: function(){
           db.transaction(function(tx){
               tx.executeSql("DELETE FROM TiempoUso WHERE id="+id);
           },erroresBd);
        },
        error: function(res){
            console.log(res);
        }
    });
}

function successGenerico(results){
    console.log(results);
    console.log("tranqui");
}

function notificar(){
 
   navigator.notification.beep(10);
  
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
        url: "http://www.montevideo-gh.com/jsonapi/node/" + categoria + "?page[limit]=" + cantidad + "&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        success: function (res) {
            
          
           
            $("#listaNoticia" + categoria).empty();
            //console.log(res);
            resultado = res;
            
            /* Si es un evento me interesa guardar el ID para controlarlo*/
             if (categoria==="Eventos")
           {
               ultimoeventoTS = obtenerTSNoticia(resultado, 0);
           }

            for (var i = 0; i < resultado.data.length; i++)
            {
                pieza = obtenerCabezalNoticia(categoria, resultado, i);

                $("#listaNoticia" + categoria).append(pieza);
                

            }
            $("#listaNoticia" + categoria).listview( "refresh" );;
            

        }
    });
}


//Esta funcion llama a obtenerNoticias 
function cargarEventos()
{
   
    idactual = ultimoeventoTS;    
    obtenerNoticiasPorCategoria("Eventos", 5);
    /* Cuando llegamos a este IF la variable global de ultimoevento ya se debio
     * haber actualizado por lo que*/
    if (idactual !== ultimoeventoTS && idactual!==0)
    {
        notificarActualizacion("Eventos");
    }
    

  
}

function notificarActualizacion(categoria)
{ 
    
    $(".alert").show();
    $('.alert').alert();
    
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
    pieza = "<li><a href='#PaginaDetalleNoticia'  class='FuenteListados' data-idprod='" +
            resultado.data[i].attributes.uuid +
            "' data-cat='" + categoria + "' onclick='cargarDetalle($(this))'>" +
            imagen.outerHTML +
            resultado.data[i].attributes.title +
            "</a> <a class='ui-btn  ui-btn-icon-right'href='#'</a></li>";

    return pieza;
}

/*dado un resultado y una posicion devuelvo el id*/
function obtenerTSNoticia(resultado, i)
{
    id = resultado.data[i].attributes.changed;
    return id;
}

//Funcion para cargar el detalle de la noticia seleccionada
function cargarDetalle(lnk)
{
    var uuid = lnk.attr("data-idprod");
    var categoria = lnk.attr("data-cat");

    $.ajax({
        url: "http://www.montevideo-gh.com/jsonapi/node/" + categoria + "/" + uuid,
        type: "GET",
        dataType: "JSON",
        data: {},
        async: false,
        success: function (res) {

            //alert('funciona');
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
        url: "http://www.montevideo-gh.com/jsonapi/node/" + categoria + "/" + uuid,
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        success: function (res) {

            //alert('funciona');
            //console.log(res);
            resultado = res;
            return resultado;

        }


    });
}


function obtenerNoticiaPortada() {

    $.ajax({
        url: "http://www.montevideo-gh.com/jsonapi/node/Tienda?page[limit]=1&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        //data: "q=Montevideo&lang=es",
        //data: JSON.stringify({email: email, pwd: pwd}),
        success: function (res) {

            //alert('funciona');
            //console.log(res);
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
    // alert(position.coords.latitude +" : " + position.coords.longitude);
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
        url: "http://www.montevideo-gh.com/jsonapi/node/MTG?include=field_image",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        //data: "q=Montevideo&lang=es",
        //data: JSON.stringify({email: email, pwd: pwd}),
        success: function (res) {

            //alert('funciona');
            console.log(res);
            resultado = res;


            for (var i = 0; i < resultado.data.length; i++)
            {
                pieza = formatearNoticia(resultado, i);
                // $("#listaResultados").append("<li> "+resultado.data[i].attributes.title+"</li>");
                $("#listaResultados").append(pieza);

            }
            $("#listaResultados").listview('refresh');




        }


    });




}

function cargarNoticiasEventos()
{

    $.ajax({
        url: "http://www.montevideo-gh.com/jsonapi/node/Eventos?page[limit]=5&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data: {},
        async: true,
        //data: "q=Montevideo&lang=es",
        //data: JSON.stringify({email: email, pwd: pwd}),
        success: function (res) {

            //alert('funciona');
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