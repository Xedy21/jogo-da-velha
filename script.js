var vez = 1
var vencedor= ""

$(document).ready(function(){
  $(".casa").click(function(){
  var fundo = $(this).css("background-image");
if(fundo == "none" || fundo == ""){
var fig = "url(" + vez.toString() + ".jpg)"
$(this).css("background",fig);
vez = (vez == 1 ? 2:1);
verificarFimDeJogo();

}

 function verificarFimDeJogo(){

  var existemCasasIguais = [
    verificaSeTemCasasIguais(1,2,3),
    verificaSeTemCasasIguais(4,5,6,),
     verificaSeTemCasasIguais(7,8,9),
     verificaSeTemCasasIguais(1,4,7),
      verificaSeTemCasasIguais(2,5,8),
       verificaSeTemCasasIguais(3,9,6),
       verificaSeTemCasasIguais(1,5,9),
        verificaSeTemCasasIguais(3,5,7)];

  if(existemCasasIguais.indexOf(true) >= 0){
  $("#resultado").html("<h1> O jogador " + vencedor + " venceu!</h1>");
  $(".casa").off("click");
  }
}

function verificaSeTemCasasIguais(numeroPrimeiraCasa, numeroSegundaCasa, numeroTerceiraCasa){
var primeiraCasa = $("#casa" + numeroPrimeiraCasa);
var segundaCasa = $("#casa" + numeroSegundaCasa);
var terceiraCasa = $("#casa" + numeroTerceiraCasa);

 var fundoPrimeiraCasa = $("#casa" + numeroPrimeiraCasa).css("background-image");
 var fundoSegundaCasa = $("#casa" + numeroSegundaCasa).css("background-image");
 var fundoTerceiraCasa = $("#casa" + numeroTerceiraCasa).css("background-image");

if ((fundoPrimeiraCasa == fundoSegundaCasa) && (fundoTerceiraCasa == fundoSegundaCasa)  && (fundoPrimeiraCasa != "none" && fundoPrimeiraCasa != "")){

if(fundoPrimeiraCasa.indexOf("1.jpg") >= 0){
  vencedor = "1";
  return true;
}else{
  vencedor = "2";
  return true;
}}else{
  return false;
}
}
});
});
