$(document).ready(function(){
  $("#calcular").click(requisitaApi);
  $('#a, #b, #c').change(valida);
  $("#limpar").click(function() {
    $("#formulario").trigger("reset")
    valida();
  });
  validaFoco();
});


/* Função para requesitar os dados da api de calculo */
function requisitaApi(){
  var a = $('input[name="a"]').val();
  var b = $('input[name="b"]').val();
  var c = $('input[name="c"]').val();
  $.post("http://127.0.0.1:5000/calcular", {a:a, b:b, c:c}, function(result){
    $.each(result, function(key, value){
      console.log(key, value);
      if (key=="error"){
        alert(value)
      } else {
        $("#" + key).val(value);
        $("#" + key).css('border', '3px solid #198754');
      }      
    }); 
  });
};


/* Função que valida os campos para permitir o preenchimento de apenas 2 deles e mudar a cor onde vem o resultado */
function valida() {
  if ($('#a').val().length > 0 && $('#b').val().length > 0 ) {
    $("#c").prop("disabled", true,);
    
  } else if ($('#b').val().length > 0 && $('#c').val().length > 0){
    $("#a").prop("disabled", true);
 
  } else if($('#a').val().length > 0 && $('#c').val().length > 0){
    $("#b").prop("disabled", true);
    
  } else {
    $("#a").prop("disabled", false);
    $("#b").prop("disabled", false);
    $("#c").prop("disabled", false);
    $("#a").css('border', '1px solid #ced4da');
    $("#b").css('border', '1px solid #ced4da');
    $("#c").css('border', '1px solid #ced4da');
  }
}


/* Função verifica quais campos estão sendo preenchidos e destaca na imagem */
function validaFoco(){
  $('#a').focus(function(e) {
    $("#la").css("stroke","red");
    $("#imga").css("fill","red");
  });
  $('#b').focus(function(e) {
    $("#lb").css("stroke","red");
    $("#imgb").css("fill","red");
  });
  $('#c').focus(function(e) {
    $("#lc").css("stroke","red");
    $("#imgc").css("fill","red");
  });
  $('#a').focusout(function(e) {
    $("#la").css("stroke","black");
    $("#imga").css("fill","black");
  });
  $('#b').focusout(function(e) {
    $("#lb").css("stroke","black");
    $("#imgb").css("fill","black");
  });
  $('#c').focusout(function(e) {
    $("#lc").css("stroke","black");
    $("#imgc").css("fill","black");
  });
}
