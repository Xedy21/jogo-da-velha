var vez=1
var vencedor=""
$(document).ready(function(){
  $(".casa").click(function(){
  var fundo = $(this).css("background-image");
if(fundo == "none"||fundo == ""){
var fig = "url("+vez.toString()+".jpg)"
$(this).css("background",fig);
vez = (vez == 1 ? 2:1);
verificarFimDeJogo();

}});});
function verificarFimDeJogo(){

}
