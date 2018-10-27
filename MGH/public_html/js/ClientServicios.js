/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(inicioApp);


function inicioApp()
{
    
  cargarNoticias()
    
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