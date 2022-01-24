var Fn = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
      return false;
    var tmp 	= rutCompleto.split('-');
    var digv	= tmp[1];
    var rut 	= tmp[0];
    if ( digv == 'K' ) digv = 'k' ;

    return (Fn.dv(rut) == digv );
  },
  dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }
}


$("#enviar").click(function(){
  if (Fn.validaRut( $("#txt_rut").val() )){
    $("#msgerror").html("");
  } else {
    $("#msgerror").html("El Rut no es válido ");
  }
});

$(function() {
$('#enviar').on('click', function(){
  $('#basic-form').validate();
});


    $('#resumen').click(function(e) {
      e.preventDefault();
      var rut = $('#txt_rut').val();
      var nom = $('#nombres').val();
      var correo = $('#email').val();
      var apellido = $('#apellido').val();
      var dir = $('#dir').val();
      var nombre = $('#nombreV').val();
      var marca = $('#marcav').val();
      var modelo = $('#modelov').val();
      var fecha = $('#fecha').val();
      var hora = $('#appt-time').val();
      var tvehiculo = $('#agev').val();
      var si = $('#revsi').val();
      var no = $('#revno').val();
      var op = $('#first-select').val();
      var primerValor = $('#optionsRadios1').val();
      var segundoValor = $('#optionsRadios2').val();
      var ambos=$('#optionsRadios3').val();


      var opcion = $('input:radio[name=optionsRadios1]:checked').val();
      if(opcion == "si"){
        $('#rev').text(si);
      }else if(opcion == "no"){
        $('#rev').text(no);
      }else{

      }
      var opcionSeleccionada = $('input:radio[name=optionsRadios]:checked').val();
      if(primerValor.match(/^[0-9]+$/) || segundoValor.match(/^[0-9]+$/)){
        if(opcionSeleccionada == 7000){
          var resultado =  parseInt(primerValor) * 0.19;
          var res2 = parseInt(primerValor) + resultado;
          $("#valor").text("7.000");


        }else if(opcionSeleccionada == 15000){
          var resultado = parseInt(segundoValor) * 0.19;
          var res2 = parseInt(segundoValor) + resultado;
          $("#valor").text("15.000");
        }else if(opcionSeleccionada == 22000){
          var resultado = parseInt(ambos) * 0.19;
          var res2 = parseInt(ambos) + resultado;
          $("#valor").text("22.000");

        }
       }else{
        alert("Ingrese solo números en los campos");

      }


      $('#rut').text(rut);
      $('#nombre').text(nom);
      $('#ape').text(apellido);
      $('#correo').text(correo);
      $('#direccion').text(dir);
      $('#namev').text(nombre);
      $('#marca').text(marca);
      $('#modelo').text(modelo);
      $('#agevehiculo').text(tvehiculo);
      $('#opselect').text(op);
      $('#fechaR').text(fecha);
      $('#hora').text(hora);
      //Muestro el resultado
      $('#rest2').text(res2);
      $('#resultado').text(resultado);
    });



    //validaciones

  });




