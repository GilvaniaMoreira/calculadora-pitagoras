$(document).ready(function(){
  $("button").click(function(){
      var a = $('input[name="a"]').val();
      var b = $('input[name="b"]').val();
      var c = $('input[name="c"]').val();
      $.post("http://127.0.0.1:5000/calcular", {a:a, b:b, c:c}, function(result){
        $.each(result, function(key, value){
          console.log(key, value);
          $("#" + key).val(value);
      });
    });
  }); 
});