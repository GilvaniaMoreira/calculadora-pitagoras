$(document).ready(function(){
  $("button").click(requisitaApi);
  $('#a, #b, #c').change(valida);  
});


/* Função para requesitar os dados da api de calculo */
function requisitaApi(){
  var a = $('input[name="a"]').val();
  var b = $('input[name="b"]').val();
  var c = $('input[name="c"]').val();
  $.post("http://127.0.0.1:5000/calcular", {a:a, b:b, c:c}, function(result){
    $.each(result, function(key, value){
      console.log(key, value);
      $("#" + key).val(value);
    }); 
  });
}


/* Função que valida a os campos para permitir o preenchimento de apenas 2 deles */
function valida() {
  if ($('#a').val().length > 0 && $('#b').val().length > 0 ) {
    $("#c").prop("disabled", true);
  } else if ($('#b').val().length > 0 && $('#c').val().length > 0){
    $("#a").prop("disabled", true);
  } else if($('#a').val().length > 0 && $('#c').val().length > 0){
    $("#b").prop("disabled", true);
  } else {
    $("#a").prop("disabled", false);
    $("#b").prop("disabled", false);
    $("#c").prop("disabled", false);
  }
}