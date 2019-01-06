jQuery(document).ready(function($){

  $('#dado').on('click', function(){
    var flipResult = Math.floor((Math.random() * 6) + 1);
    $('#dado').removeClass();
    setTimeout(function(){
       
  
          switch (flipResult){
         case 1:
             $('#dado').addClass('uno');
             $('#ResultadoDado').empty();
             $('#ResultadoDado').html("Salio el 1");
             break;
        case 2:
             $('#dado').addClass('dos');
             $('#ResultadoDado').empty();
             $('#ResultadoDado').html("Salio el 2");
             break;
        case 3:
             $('#dado').addClass('tres');
             $('#ResultadoDado').empty();
             $('#ResultadoDado').html("Salio el 3");
             break;
        case 4:
             $('#dado').addClass('cuatro');
             $('#ResultadoDado').empty();
             $('#ResultadoDado').html("Salio el 4");
             break;
        case 5:
             $('#dado').addClass('cinco');
             $('#ResultadoDado').empty();
             $('#ResultadoDado').html("Salio el 5");
             break;
        case 6:
             $('#dado').addClass('seis');
             $('#ResultadoDado').empty();
             $('#ResultadoDado').html("Salio el 6");
             break;      
         default:
              $("#mesaDados").append("Ocurrio un error inesperado");
     }
    }, 100);
  });
});
