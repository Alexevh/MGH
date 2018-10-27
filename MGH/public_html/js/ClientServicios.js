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
         
        url: "http://mgh-preprod.xly.es/jsonapi/node/MTG",
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
          
           
              for (var i = 0; i < resultado.length; i++)
            {
                $("#listaResultados").append("<li> un resultado por registro</li>");

            }
            $("#listaResultados").listview('refresh');
           
           
           

        }
        

    });
    
    

}