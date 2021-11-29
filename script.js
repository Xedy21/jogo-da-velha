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

function verificaSeTemCasasIguais(numeroPrimeiraCasa, numeroSegundaCasa, numeroTerceiraCasa){
var primeiraCasa = $("#casa" + numeroPrimeiraCasa);
var segundaCasa = $("#casa" + numeroSegundaCasa);
var terceiraCasa = $("#casa" + numeroTerceiraCasa);

 var fundoPrimeiraCasa = $("#casa" + numeroPrimeiraCasa).css("background-image");
 var fundoSegundaCasa = $("#casa" + numeroSegundaCasa).css("background-image");
 var fundoTerceiraCasa = $("#casa" + numeroTerceiraCasa).css("background-image");

if ((fundoPrimeiraCasa == fundoSegundaCasa) && (fundoTerceiraCasa == fundoSegundaCasa)  && (fundoPrimeiraCasa != "none" && fundoPrimeiraCasa != "")){

} else{
  return False;
}
