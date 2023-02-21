$(document).ready(function(){

  var stopAutohide;

  function showWindow(){
    $('#main').show();
    // detener scroll
    $('html body').css('overflow','hidden');
    // desaparece después de 5s
    stopAutohide = setTimeout(hideWindow,5000);

  }
  //mostrar ventana()

  function hideWindow(){
    $('#main').hide();
    // on scroll
    $('html body').css('overflow','scroll');
  }
  //esconder ventana()

  // llama funciones automaticamente después de un tiempo


  // se abre automaticamente después de 1s
  setTimeout(showWindow,1000);

  // cierra después del click 

  $("#close-btn").click(function(){

    hideWindow();
    celarTimeout(stopAutohide);

  })


})


function valida_envia(){
    //valido el nombre
  if (document.fvalida.nombre.value.length==0){
    alert("Tiene que llenar todos los campos")
    document.fvalida.nombre.focus()
    return 0;
  }
      //valido el apellido
  if (document.fvalida.apellido.value.length==0){
    alert("Tiene que llenar todos los campos")
    document.fvalida.apellido.focus()
    return 0;
  }
        //valido el mail
  if (document.fvalida.email.value.length==0){
    alert("Tiene que llenar todos los campos")
    document.fvalida.email.focus()
    return 0;
  }

        //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}