$(document).ready(function(){
  $("form#height").submit(function() {
    var height = parseInt($("input#height").val());

    if (height < 36) {
      $(".short").show();
      $(".middle").hide();
      $(".tall").hide();
    } else if (height < 48) {
      $(".short").show();
      $(".middle").show();
      $(".tall").hide();
    } else if (height >= 48){
      $(".short").show();
      $(".middle").show();
      $(".tall").show();
    }
    event.preventDefault();
  });
});
