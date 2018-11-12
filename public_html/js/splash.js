
$(document).ready(inicioSplash);


function inicioSplash()
{
    
  setTimeout(hideSplash, 1000);

}


function hideSplash() {
  $.mobile.changePage("#inicio", "fade");
}

/**
 * 
 * para activar los menues inteligentes avanzados poner en el inicio
 *     $(function () {
  $("[data-role=panel]").panel().enhanceWithin();
});
 * 
 * */