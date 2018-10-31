/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(inicioApp);


function inicioApp()
{
    
  cargarNoticias()
  obtenerNoticiaPortada()
    
}

function obtenerNoticiaPortada(){
    
     $.ajax({
         
        url: "http://mgh-preprod.xly.es/jsonapi/node/Tienda?page[limit]=1&sort=-nid",
        type: "GET",
        dataType: "JSON",
        data:{},
        async:true,
       
        //data: "q=Montevideo&lang=es",
        //data: JSON.stringify({email: email, pwd: pwd}),
        success: function (res) {

            //alert('funciona');
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


function cargarNoticias()
{
   
     $.ajax({
         
        url: "http://mgh-preprod.xly.es/jsonapi/node/MTG?include=field_image",
        type: "GET",
        dataType: "JSON",
        data:{},
        async:true,
       
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

function formatearNoticia(resultado, posicion){
    titulo = resultado.data[posicion].attributes.title
    resumen = resultado.data[posicion].attributes.body.summary
    cuerpo = resultado.data[posicion].attributes.body.value
    
          
    pieza = "<li>"+titulo+"<br>"+cuerpo+"</li>"
    return pieza;

}


function formatearNoticiaCompleta(resultado, posicion){
    titulo = resultado.data[posicion].attributes.title
    resumen = resultado.data[posicion].attributes.body.summary
    cuerpo = resultado.data[posicion].attributes.body.value
    
    
          
    pieza = "<div>"+titulo+"<br>"+cuerpo+"</div>"
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
    
    $("#mapGoogle").attr("src", "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDmrGuARK5rJ6ZJOt7j6cjsSH1f7-dyL_Y&origin="+lat+","+longitud+"&destination=Montevideo+Gaming+House,+Colonia+1761A,+11200+Montevideo");
    
}

function onErrorNav(error) {
    alert('code: '    + error.code    + '\n' +
'message: ' + error.message + '\n');

}
